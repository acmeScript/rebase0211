import React from 'react';
import moment from 'moment';
interface Props {
    setTaskDate: any;
    showTaskDate: any;
    setShowTaskDate: any;
}
export const TaskDate:React.FunctionComponent<Props> = ({
    setTaskDate,
    showTaskDate,
    setShowTaskDate}) => showTaskDate && (
        <div 
            className="task-date"
        >
                <ul className="task-date__list">
                    <li
                        onClick={()=>{
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-modal"
                    >
                        <span>
                            setDate
                        </span>
                        <span>Сегодня</span>
                    </li>
                    <li
                        onClick={()=>{
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1,'day').format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-tomorrow-modal"
                    >
                        <span>
                            (day)
                        </span>
                        <span>Завтра</span>
                    </li>
                    <li
                        onClick={()=>{
                            setShowTaskDate(false);
                            setTaskDate(moment().add(7,'days').format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-weak-modal"
                    >
                        <span>
                            (week)
                        </span>
                        <span>На неделе</span>
                    </li>
                    <li
                        onClick={()=>{
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1,'month').format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-month-modal"
                    >
                        <span>
                            (month)
                        </span>
                        <span>До конца месяца</span>
                    </li>
                </ul>
        </div>
    )
