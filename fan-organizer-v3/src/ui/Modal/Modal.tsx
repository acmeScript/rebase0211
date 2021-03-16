import React from 'react'
import {useProjectsValue} from '../../context';

export const Modal = ({setProject, showProjectModal, setShowProjectModal}) => {
    const {projects} = useProjectsValue();
    return (
        /* refactor projects */
        projects && showProjectModal && (
            <div className="project-modal" data-testid="project-modal">
                <ul className="project-modal__list">
                    {projects.map((project)=>(
                        <li
                            key={project.projectId}
                            data-testid="project-modal-action"
                            onClick={()=>{
                                setProject(project.projectId);
                                setShowProjectModal(false);
                            }}
                        >
                            {project.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}
