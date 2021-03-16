import React, { useState } from "react";
import { RenderArea } from "../../../context/routes-areaRenderer-context";
import { Self } from "../../Self";
import { Darkmode } from '../../Darkmode';
import { Logo } from "../../Logo";
import { AddTask } from '../../../features/Sheduler/Add-Task'; // create ui button
import {ProjectsProvider, SelectedProjectProvider} from '../../../context';
import s from './Header.module.css';

function HeaderItem({ children }) {
  return (
    <span
      // border="right"
      style={{justifyContent:"start",alignItems:"center"}}>
        {children}
    </span>
  );
}

interface Props {
  setDarkMode: any;
  headerHeight: number;
  darkMode: any;
  //props?: React.Props<any>
}
export const Header:React.FunctionComponent<Props> = ({
    headerHeight,
    darkMode,
    setDarkMode
}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false); 
  return (
    <div className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__wrapper}>
            <div className={s.header__left}>
            <ul className={s.info}>
              <li className={s.info__logo}>
                <HeaderItem>
                  <Logo />
                </HeaderItem>
            </li>
            <li className={s.info__description}>
              <RenderArea name="toolbar/left" />
            </li>
            </ul>
          </div>
          <div className={s.header__right}>
            <RenderArea name="toolbar/right" />
            <div
              className={s.settings}>
              <ul className={s.settings__wrapper} style={{position:"relative"}}>
                <li tabIndex={1} className={s.settings__dark}><Darkmode setDarkMode={setDarkMode} darkMode={darkMode}/></li>
                <li tabIndex={1} className={s.settings__avatar} style={{position:"relative"}}><Self /></li>
                <li tabIndex={1} className={s.settings__task}
                  onClick={()=>{
                      setShowQuickAddTask(true);
                      setShouldShowMain(true)}
                  }
                  data-testid="quick-add-task-action">
                  + 
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <SelectedProjectProvider>
            <ProjectsProvider>
              <AddTask
                showAddTaskMain={false}
                shouldShowMain={setShouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
              />
            </ProjectsProvider>
          </SelectedProjectProvider>
      </div>
  );
}
