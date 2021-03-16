import React from "react";
import { RenderArea } from "../../../context/routes-areaRenderer-context";
import s from './Navigation.module.css';
//lazy load
interface Props {
  headerHeight?: number;
  darkMode: any
}
export const Navigation:React.FunctionComponent<Props> = ({
    headerHeight,
    darkMode
}) => {
  return (
    <div
        className="nav__box"
        /*
        className={darkMode ?  `${s.darkmode}` : undefined}
        style={{
        height: "80vh",
        border:"5px solid green", 
        display:"flex", 
        minWidth: "122px", 
        position: "sticky",
        top: 50,
        alignSelf: "flex-start"
      }}
      */
    >
        <ul 
        className="nav__list"  
        style={{
          display:"inline-flex", 
          flexDirection:"column",
          flexWrap: "wrap", padding: 0, margin: 0, listStyle: "none", width:"100%"}}>
            <RenderArea name="navigation" />
        </ul>
    </div>
  );
}
