import React, {useState} from "react";
//import { useEntity } from "../../../context/loading-context";
import {useSelectedProjectValue} from '../../../context/selected-project-context';
import {AddProject} from '../Add-Project';
import {Projects} from '../Projects';
import s from "./SelectProject.module.css";



export const SelectProject: React.FunctionComponent<{}> = () => {
    const {setSelectedProject} = useSelectedProjectValue();
    const [active, setActive] = useState("inbox");
    const [showProjects, setShowProjects] = useState(true);
  return (
        <div className={s.sidebar} data-testid="sidebar">
            <ul className={s.sidebar__generic} style={{display: "flex",flexWrap: "wrap"}}>
                <li 
                    onClick={
                        ()=>{setActive("inbox");setSelectedProject('INBOX')}} 
                        data-testid="inbox"
                        className={active === 'inbox' ? s.active : undefined}>
                            <span>(o)</span>
                            <span>Почта</span>
                </li>
                <li 
                    onClick={
                        ()=>{setActive("today");setSelectedProject('TODAY')}} 
                        data-testid="today" 
                        className={active === 'today' ? s.active : undefined}>
                            <span>(o)</span>
                            <span>Сегодня</span>
                </li>
                <li 
                    onClick={
                        ()=>{setActive("weak");setSelectedProject('WEAK')}} 
                        data-testid="weak" 
                        className={active === 'weak' ? s.active : undefined}>
                            <span>(o)</span>
                            <span>Неделя</span>
                </li>
                <li 
                    onClick={
                        ()=>{setActive("month");setSelectedProject('MONTH')}} 
                        data-testid="month" 
                        className={active === 'month' ? s.active : undefined}>
                            <span>(o)</span>
                            <span>Месяц</span>
                </li>
            </ul>
            <div className="sidebar__middle" onClick={()=>setShowProjects(!showProjects)}><span></span><h2>Проекты</h2></div>
            <ul className="sidebar__projects">
            
                {showProjects && <Projects />}
                {showProjects && <AddProject />}
            </ul>
        </div>
  );
};
