import React from 'react';
import todo_icon from '../assets/todo_icon.png';
import TaskList from './TaskList';
import {useState, useRef, useEffect} from 'react';

const ToDo = () => {

    const [task, setTask] = useState(localStorage.getItem('task-lists') ? JSON.parse(localStorage.getItem('task-lists')) : []);
    const inputRef = useRef();

    const addTask = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ''){
            return null;
        }

        const tasks_info = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTask((prev) => [...prev, tasks_info]);
        inputRef.current.value = '';
    }
    const removeTask = (id) => {
        setTask((prev) => {
            return prev.filter((item) => item.id !== id)
        })
    }
    const markDone = (id) => {
        setTask((prev) => {
            return prev.map((item)=>{
                if(item.id === id){
                    return {...item, isComplete: !item.isComplete};
                }
                return item;
            })
        });
    }

    useEffect(() => {
        console.log(task)
        localStorage.setItem('task-lists', JSON.stringify(task))
    }, [task]);

  return (
    <div className='text-stone-900 z-50 relative bg-gradient-to-br from-purple-500 via-red-500 to-emerald-500 w-11/12  rounded-xl py-5 px-10  before:content-[""] before:w-[98%] before:h-[98%] before:absolute before:inset-1 before:rounded-lg before:bg-white inline-block before:-z-50'>
        {/* title */}
        <div id="title" className='flex items-center gap-4 mt-5 mb-5'>
            <img className='w-8 h-8' src={todo_icon}/>
            <h1 className='text-3xl font-bold '>To-Do List</h1>
        </div>

        {/* input */}
        <div class="relative mt-6 cursor-pointer">
            <input
                type="email"
                placeholder="Add your task..."
                ref={inputRef}
                class="block w-full rounded-full border border-neutral-500 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div class="absolute inset-y-1 right-1 flex justify-end">
                <button
                    type="submit"
                    class="flex aspect-square h-full items-center justify-center rounded-full bg-orange-400 text-white transition hover:bg-neutral-800"
                    onClick={addTask}
                >
                    <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                        <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

        {/* task list */}
        <div id="task-list" className='mt-4'>
            {task.map((item)=>{
                return <TaskList key={item.id} id={item.id} task={item.text} isComplete={item.isComplete} removeTask={removeTask} markDone={markDone} />
            })}
        </div>

    </div>
  )
}

export default ToDo;