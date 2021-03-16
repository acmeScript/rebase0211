import React from 'react';
import {firebase} from '../../../firebase';

export const Checkbox = ({id, taskDesc}) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true
            });
    }
    return (
        <div className="checkbox-holder" date-testid="checkbox-action" onClick={()=>archiveTask()}>
            
                <span type="checkbox" className="checkbox"/>
        </div> 
    )
}
