import React from "react";
import { RenderArea } from "../../context/routes-areaRenderer-context";
import { usePopoverState, Popover, PopoverDisclosure } from "reakit/Popover";
import { User } from "../User";
import { users } from "../../data/users";
import './Self.module.css';

export function SelfMenuItem({
  hasNotification = false,
  ...props
}) {
  return <a
  style={{display: "block"}}
  {...props}
  dangerouslySetInnerHTML={{ __html: props.text }}
></a>
}

export const Self: React.FunctionComponent<{}> = () => {
  const popover = usePopoverState();
  return (
    <RenderArea name="self/menu-options">
      {contentElements => {
        const someNotifications = React.Children.toArray(contentElements).some(
          element => element.props.hasNotification,
        );
        return (
          <div className="user" style={{display:"flex",position:"relative"}}>
            <PopoverDisclosure
              {...popover}
              style={{ display:"flex",position:"relative", backgroundColor: "transparent", border: "none" }}
            >
              <User
                hasNotification={someNotifications}
                user={users["2"]}
              ></User>
            </PopoverDisclosure>
            <Popover {...popover} onClick={popover.hide} aria-label="user menu" style={{    
              position: "absolute",
              top: "0px",
              right: "auto",
              bottom: "auto",
              left: "0px",
              transform: "translate3d(159px, 50px, 0px)"}}>
              <ul
                style={{position:"absolute",left:0,top:0}}
              >
                {contentElements}
                <li style={{display:"block"}}>Logout</li>
              </ul>
            </Popover>
          </div>
        );
      }}
    </RenderArea>
  );
};
