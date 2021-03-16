import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { NavigationIcon } from "../../ui/NavigationIcon";
//import "NavigationItem.module.css";

export function NavigationItem({
  onNavigate,
  featherIcon,
  icon,
  iconColor,
  href,
  label,
  text,
  ...props
}: {
  onNavigate?: (pathname: string) => void;
  featherIcon?: string;
  iconColor?: string;
  href?: string;
  label?: string;
  text?: string;
  icon?: string;
}) {
  const location = useLocation();
  const history = useHistory();
  const active = location.pathname === href;
  return (
    <a
      style={{display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "flex-start"}}
      label={label}
      href={href}
      onClick={event => {
        event.preventDefault();
        
        if (onNavigate) {
          onNavigate(event.currentTarget.pathname);
        } else {
          history.push(event.currentTarget.pathname);
        }
        
      }}>
      {label}
      {<NavigationIcon
        style={{ marginTop: 2 }}
        name={featherIcon}
        svgAttrs={{
          width: 16,
          height: 16,
          color: active ? "#e91e63" : "inherit",
          "stroke-width": active ? 3 : 2,
        }}
      ></NavigationIcon>}
      {text}
    </a>
  );
}
