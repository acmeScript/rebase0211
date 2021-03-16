import React, {useEffect} from 'react';
import {Checkbox} from '../Checkbox';
import {useTasks} from '../../../infrastructure/useTasks';
import {collatedTasks} from '../../../constansts';
import {getTitle, getCollatedTitle, collatedTasksExist} from '../../../helpers';
import {useSelectedProjectValue, useProjectsValue} from '../../../context' //boundary
import {AddTask} from '../Add-Task';

export const Tasks = () => {
    let projectName = "";
    const {selectedProject} = useSelectedProjectValue(); //undefined name first render
    const {projects} = useProjectsValue();
    const {tasks} = useTasks(selectedProject);
    /*
    if(!collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
        //console.dir(projectName);
        
    }
    
    if(collatedTasksExist(selectedProject) && selectedProject){
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
        //console.dir(projectName);
    }
    */
    useEffect(()=>{
        document.title = `${projectName}: to do`
    })
    //refactor
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>
            <ul className="tasks__list">
                {tasks.map((task)=>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} taskDesc={task.task}/>
                        <span>{task.task}</span>
                    </li>
                ))}
                <AddTask
                />
            </ul>
        </div>
    )
}
