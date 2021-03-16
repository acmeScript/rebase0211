import React from "react";
import { RenderArea } from "../../../context/routes-areaRenderer-context";
//import s from './Main.module.css';
import './Main.module.css';

interface Props {
  darkMode: any;
  //props?: React.Props<any>
}
export const Main: React.FunctionComponent<Props> = ({
  darkMode
}) => {
  //const {props} = props;
  return (
    <div
        className="main__container"
        //className={darkMode ?  `${s.darkmode}` : undefined}
        >
        <RenderArea name="main" />
    </div>
  );
}
