import React, { useState } from "react";

interface PropsExample2 {
  name: string;
  surname: string;
}
interface PropsExample3 {
  namereal: string;
  surnamereal: string;
}
//@ts-ignore
class ComponentAsClass extends React.Component<Props1> {
  method() {
    console.log("Not implemented");
  }
  render() {
    return <div>Name: {name}</div>;
  }
}
function ComponentAsFunction(props: PropsExample2) {
  const { name, surname } = props;
  return (
    <div>
      Name: {name}, Surname {surname}
    </div>
  );
}
ComponentAsFunction.method = () => {
  console.log("Not implemented");
};

function WithComponent(Component: React.ComponentType<PropsExample2>) {
  return class extends React.Component<PropsExample3> {
    render() {
      return (
        <div>
          <div>Yep this is HOC</div>
          <Component
            name={this.props.namereal}
            surname={this.props.surnamereal}
          />
        </div>
      );
    }
  };
}
interface PropWithRenderFn extends PropsExample2 {
  render: () => void;
  method: () => void;
}
//@ts-ignore
class ComponentWithRPandFn extends React.Component<PropWithRenderFn> {
  render() {
    const { render, method, name, surname } = this.props;
    return {
      name: name,
      surname: surname
    };
  }
}
function MouseTrackerHook() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  return (
    <div style={{ height: "100px" }} onMouseMove={handleMouseMove}>
      <p>
        ({position.x},{position.y})
      </p>
    </div>
  );
}
class CatCursor extends React.Component<{ x: number; y: number }> {
  render() {
    const { x, y } = this.props;
    return (
      <div>
        {x},{y}
      </div>
    );
  }
}
interface Position {
  x?: number;
  y?: number;
}
interface State extends Position {
  toggled?: boolean;
}
export function WithMouseComponent(Component: React.ComponentType<Position>) {
  return class extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
    }
    handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
    render() {
      return (
        <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
          <h1>MOve to</h1>
          <Component x={this.state.x} y={this.state.y} />
        </div>
      );
    }
  };
}

const makeUpperCase = WrappedComponent => {
  return class UpperCaseComponent extends React.Component<{ title }, {}> {
    render() {
      const props = Object.assign({}, this.props, {
        title: this.props.title.toUpperCase()
      });

      return <WrappedComponent {...props} />;
    }
  };
};
const makeToggleable = (WrappedComponent, color) => {
  return class ToggleableComponent extends React.Component<{}, State> {
    constructor(props) {
      super(props);

      this.state = { toggled: false };
      this.toggleColor = this.toggleColor.bind(this);
    }

    toggleColor() {
      this.setState({ toggled: !this.state.toggled });
    }

    render() {
      const fontColor = this.state.toggled ? color : "black";
      return (
        <WrappedComponent
          {...this.props}
          style={{ color: fontColor }}
          onClick={this.toggleColor}
        />
      );
    }
  };
};
const MyHOC1 = makeToggleable(ComponentAsFunction, "red");
const MyHOC2 = WithComponent(ComponentAsFunction);
const MouseTrackerWithCatCursor = WithMouseComponent(CatCursor);

export const UpperCaseToggleableComponent = makeUpperCase(
  makeToggleable(ComponentAsFunction, "red")
);
