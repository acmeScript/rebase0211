import React, {useState} from 'react'
import {useProjectsValue, useSelectedProjectValue} from '../../../context';
import {firebase} from '../../../firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const {projects, setProjects} = useProjectsValue();
    const {setSelectedProject} = useSelectedProjectValue();
    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(()=>{
                setProjects([...projects]);
                setSelectedProject("INBOX")
            })
    }
    return (
        <>  
            <span className="sidebar__dot">*</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete" data-testid="delete-project" 
                onClick={()=>setShowConfirm(!showConfirm)}
                onKeyDown={()=>setShowConfirm(!showConfirm)}
            >
            <span>(icon)</span>
             {showConfirm && (<div className="project-delete-modal">
                 <div className="project-delete-modal__inner">
                     <p>Вы уверены что хотите удалить этот проект?</p>
                     <button type="button" 
                        onClick={()=>deleteProject(project.docId)}>
                        Удалить
                    </button>
                    <span onClick={()=>setShowConfirm(!showConfirm)}>Закрыть</span>
                 </div>
             </div>)}   
            </span>
        </> 
    )
}