import React, {useState} from 'react';
import {generatePushID} from '../../../helpers/generatePushId';
import {firebase} from '../../../firebase';
import {useProjectsValue} from '../../../context/projects-context';

export const AddProject = ({shouldShow}) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');
    const projectId = generatePushID();
    const {projects, setProjects} = useProjectsValue();
    const addProject = () =>
    projectName &&
    firebase
        .firestore()
        .collection('projects')
        .add({
            projectId:projectId,
            name: projectName,
            userId: 'VXeYyWGmPKXoMy5MQUDN'
        })
        .then(res => {console.log(res)})
        .then(()=>{
            setProjects([...projects]);
            setProjectName('');
            setShow(false)
        })
        
    
    return ( 
        <div className="add-project" data-testid="add-project">
            {show && (
                <>
                <div className="add-project__input">
                    <input 
                        value={projectName} 
                        type="text" 
                        onChange={e => setProjectName(e.target.value)}
                        data-testid="project-name"
                        className="add-project__name"
                        placeholder="Имя проекта"
                    />
                    <button 
                        className="add-project__submit"
                        type="button"
                        onClick={()=>addProject()}
                        data-testid="add-project-submit"    
                    >Добавить проект</button>
                    <span
                        data-testid="hide-project-modal"
                        className="add-project__cancel"
                        onClick={()=>setShow(false)}
                    >Закрыть</span>
                </div>
                </>
            )}
            <span className="add-project__plus">+</span>
            <span 
                className="add-project__text"
                data-testid="add-project-action"
                onClick={()=>setShow(!show)}
            >Добавить проект</span>
        </div>
    )
}