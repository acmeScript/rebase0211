import React from "react";
import { RenderArea } from "../../../context/routes-areaRenderer-context";
import s from './Footer.module.css';
//import {Portal} from '../Portal';
//lazy load
interface Props {
  footerHeight: number,
  darkMode: any,
  //props?: React.Props<any>
}
export const Footer: React.FunctionComponent<Props> = ({
    footerHeight,
    darkMode
}) => {
  return (
    <div
        //className="footer"
        className={(!darkMode ? "footer" : "footer") && (darkMode ?  `${s.darkmode}` : undefined)}
        style={{
            display: "flex",
            flexShrink: 0,
            justifyContent: "center",
            flexDirection: "row",
            height: footerHeight,
            position: "fixed",
            bottom: 0,
            width: "100%"
        }}>
        <div
        //className="footer-container"
        style={{
            width: "100%",
            maxWidth: 1000, 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center" 
        }}
        >
            Fan Organizer 2020
            <div 
            //className="footer-container__system-messages"
            style={{ 
                marginLeft: "auto",
                backgroundColor: "rgba(0,0,0,0.15)", 
                height: "150px", 
                width: "50px" 
            }}>
                <RenderArea name="system-messages" />
            </div>
        </div>
  </div>
  );
}
