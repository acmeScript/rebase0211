import React, {useState, useEffect} from 'react'
import {useSelectedProjectValue, useProjectsValue} from '../../../context'
import {IndividualProject} from '../Individual-Project';

export const Projects = ({activeValue=null}) => {
    const [active, setActive] = useState(activeValue);
    const {selectedProject, setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();
    useEffect(()=>{
        //console.log("context from Projects.js" + selectedProject) 
    })
    return (
        projects &&
        projects.map(project => (
            <li 
                key={project.projectId}
                data-doc-id={project.docId}
                data-test-id="project-action"
                className={
                    active === project.projectId ? 'active sidebar__project' : 'sidebar__project'
                }
                onKeyDown={()=>{
                    setActive(project.projectId);
                    setSelectedProject(project.projectId)
                }}
                onClick={()=>{
                    setActive(project.projectId);
                    setSelectedProject(project.projectId)
                }}
            >
                    <IndividualProject project={project}/>
            </li>
        ))
    )
}