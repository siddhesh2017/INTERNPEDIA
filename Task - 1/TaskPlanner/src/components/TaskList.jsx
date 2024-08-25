import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_ from '../assets/delete.png';

const TaskList = ({id, task, isComplete, removeTask, markDone}) => {
    
    return(
        <div className='flex items-center gap-2 px-4 py-2'>
            <div onClick={() => markDone(id)} className='flex flex-1 items-center cursor-pointer'>
                <img  className='w-7 h-7' src={isComplete?  tick : not_tick} />

                <p className={`text-[17px] font-normal text-slate-700 ml-4 ${isComplete? 'line-through' : ''}`}>{task}</p>
            </div>
            <img onClick={()=>{
                removeTask(id);
            }} className='w-3.5 h-3.5 cursor-pointer' src={delete_}/>
        </div>
    ) 
}

export default TaskList;