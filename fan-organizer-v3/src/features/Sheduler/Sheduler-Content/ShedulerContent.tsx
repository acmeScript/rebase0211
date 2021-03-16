import React, {useState} from "react";
import { Page } from "../../../ui/Layout/Page";
//import { useEntity } from "../../../context/loading-context";
import {useSelectedProjectValue} from '../../../context/selected-project-context';
import {AddProject} from '../Add-Project';
import {Projects} from '../Projects';
import {SelectProject} from '../Select-Project'
import {Tasks} from '../Tasks'
import s from "./ShedulerContent.module.css";



export const ShedulerContent: React.FunctionComponent<{}> = () => {
    const {setSelectedProject} = useSelectedProjectValue();
    const [active, setActive] = useState("inbox");
    const [showProjects, setShowProjects] = useState(true);
  return (
    <Page title="Sheduler" documentTitle="Sheduler">
        <SelectProject/>
        <Tasks/>
    </Page>
  );
};
