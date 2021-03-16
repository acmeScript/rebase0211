import React from "react";

export const Avatar: React.FunctionComponent<{
  src: string;
  size?: number;
}> = ({ src, size = 48 }) => {
  return (
    <img
      className="user__avatar"
      /*src={}*/
      style={{ height: size, width: size, borderRadius: "50%" }}
      alt="Аватар пользователя"
    />
  );
};
