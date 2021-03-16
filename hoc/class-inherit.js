import React from "react";

class BaseComponent extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={this.props.style}>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
export class ClickLogger extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <BaseComponent {...this.props} onClick={this.onClick} />
      </div>
    );
  }
}
