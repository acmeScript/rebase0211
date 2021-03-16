import React, {useState} from 'react';
import {generatePushID} from '../helpers';
import {firebase} from '../firebase';
//import {useProjectsValue} from '../context';
import {testUserId} from '../constansts';
//async
//positive
export const addProject = ({shouldShow}) => {
    const [show, setShow] = useState(shouldShow);
    //const {projectName} = this.state?.projectName;
    const projectId = generatePushID();
    const [projectName, setProjectName] = useState('');
    //const {projects, setProjects} = useProjectsValue();
    
    return firebase.firestore().collection('projects')
    .add({
        projectId:projectId,
        name: projectName,
        userId: testUserId
    })
    .then(res => {console.log(res)})
    .then(()=>{
        setProjects([...projects]);
        setProjectName('');
        setShow(false)
    })
}