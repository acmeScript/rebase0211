import React from "react";
import { Avatar } from "../Avatar";

interface Props {
  user: {
    id: string;
    name: string;
    pictureUrl: string;
  };
  size?: number;
  hasNotification?: boolean;
}

export const User: React.FunctionComponent<Props> = ({
  user,
  size,
  hasNotification = false,
}) => {
  return (
    <div className="user__wrapper">
      <div style={{ display:"inline-block",flexDirection:"row",position: "relative", alignItems:"center", padding:"10px 10px",  }}>
        {hasNotification ? (
          <div
            style={{
              position: "absolute",
              fontSize: 60,
              top: 0,
              right: -7,
              lineHeight: 40,
              height: 18,
              width: 18,
              border: "1px solid red",
              borderRadius: '50%',
              background: 'rgb(233, 30, 99)',
              overflow: 'hidden',
              color: "#E91E63",
            }}
          >

          </div>
        ) : null}
        <Avatar src={user.pictureUrl} size={size} />
      </div>
      {user.name}
    </div>
  );
};
