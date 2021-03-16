import React, {useState} from 'react';
import moment from 'moment';
import {firebase} from '../../../firebase';
import {useSelectedProjectValue} from '../../../context';
import {Modal} from '../../../ui/Modal';
import {TaskDate} from '../../../ui/TaskDate';

export const AddTask = ({showAddTaskMain = true, showShouldMain = false, showQuickAddTask, setShowQuickAddTask}) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState(''); 
    const [showMain, setShowMain] = useState(showShouldMain);
    //const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const {selectedProject} = useSelectedProjectValue();
    
    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';
        /*
        switch(projectId){
            case "TODAY":
                collatedDate = moment().format('DD/MM/YYYY');    
                break;
            case "WEAK":
                collatedDate = moment()
                .add(7, 'days')
                .format('DD/MM/YYYY')
                break;
            case "MONTH":
                collatedDate = moment()
                .add(1, 'month')
                .format('DD/MM/YYYY')
                break;
            default:
                break;
        }
        */
        
        if(projectId === 'TODAY'){
            collatedDate = moment().format('DD/MM/YYYY');
        } else if(projectId === 'WEAK'){
            collatedDate = moment()
                .add(7, 'days')
                .format('DD/MM/YYYY')
        }
        
        return (task && projectId && 
            firebase.firestore()
            .collection('tasks')
            .add({
                archived:false,
                projectId:projectId,
                task:task,
                date:collatedDate,//||taskDate,
                userId:'VXeYyWGmPKXoMy5MQUDN'
            })
            .then(res=>{console.log(res)})
            .then(()=>{
                setTask('');
                setProject('');
                setShowMain('');
                setShowProjectModal(false );
             })
        )
    }
    return (
         <div 
            className={showQuickAddTask ? 'add-task add-task__modal' : 'add-task'}
            data-testid="add-task-comp"
            >
                {showAddTaskMain && (
                    <div 
                        className="add-task__shallow"
                        data-testid="show-main-action"
                        onClick={()=>setShowMain(!showMain)} // for header(showQuickAddTask) and main(showMain)
                    >
                        <span className="add-task__plus">+</span>
                        <span className="add-task__text">Добавить задачу</span>
                    </div>
                )}
                {(showMain || showQuickAddTask) && (
                    <div className="add-task__main" data-testid="add-task-main">
                        {showQuickAddTask && (
                            <div data-testid="quick-add-task">
                                <h2 className="header">Быстрая задача</h2>
                                <span 
                                    className="add-task-quick-cancel"
                                    data-testid="add-task-quick-cancel"
                                    onClick={()=>{
                                        setShowMain(false);
                                        setShowProjectModal(false);
                                        setShowQuickAddTask(false); 
                                    }}
                                >
                                    X
                                </span>
                            </div>
                        )}
                        <ProjectModal 
                            setProject={setProject} 
                            showProjectModal={showProjectModal} 
                            setShowProjectModal={setShowProjectModal}
                        />
                        <TaskDate
                            setTaskDate={setTaskDate}
                            showTaskDate={showTaskDate}
                            setShowTaskDate={setShowTaskDate}
                        />  
                        <input className="add-task__content" 
                            data-testid="add-task-content" 
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            />
                        <button type="button"
                            className="add-task__submit"
                            data-testid="add-task"
                            onClick={()=>addTask()}>Добавить задачу
                        </button>
                        {/* ==============================QuckModal============================= */}
                        {!showQuickAddTask && (
                            <span className="add-task__cancel"
                                data-testid="add-task-main-cancel"
                                onClick={()=>{
                                    setShowMain(false);
                                    setShowProjectModal(false);
                                    setShowQuickAddTask(false);
                                }}>Закрыть</span>
                        )}
                        <span 
                            className="add-task__project"
                                
                            data-testid="show-project-modal"
                            onClick={()=>setShowProjectModal(!showProjectModal)}
                            >
                                ( P+ )
                        </span>
                        <span 
                            className="add-task__date"
                            data-testid="show-task-date-modal"
                            onClick={()=>setShowTaskDate(!showTaskDate)}
                            >
                                ( D+ )
                        </span>
                    </div>
                )}
        </div>
    )
}
