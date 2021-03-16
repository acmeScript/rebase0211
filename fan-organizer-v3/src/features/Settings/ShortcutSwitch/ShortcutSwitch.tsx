import React from "react";
import { Switch } from "@blueprintjs/core";

export function ShortcutSwitch({
  shortcut,
  label,
  defaultChecked = true,
  onChange = () => {},
}) {
  const [key1, key2] = shortcut.split("+");
  return (
    <div 
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"row",
        maxWidth: "400px" }}>
      <Switch
        large
        label={label}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <span>
        <span>
          {key1}
        </span>
        {" + "}
        <span>
          {key2}
        </span>
      </span>
    </div>
  );
}
