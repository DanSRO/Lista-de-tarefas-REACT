import { FormEvent, useState } from 'react';
import styles from './style.module.scss';

interface Tasks{
    title:string;
    done:boolean;
    id:number;
}

export const Task:React.FC = () =>{
    const [taskTitle, setTaskTitle] = useState("");
    const [task, setTask] = useState([] as Tasks[]);
    
    function submitTask(e:FormEvent){
        e.preventDefault();
        
        if(taskTitle.length < 3){
            alert ("Não é possível adicionar uma tarefa com menos de 3 letras.");
            return;
        }
        setTask([...task, {id:new Date().getTime(),title:taskTitle, done:false} ]);
        setTaskTitle("");
    }

    return (
    <section className={styles.container}>
        <form onSubmit={submitTask}>
            <div>
            <label htmlFor="task-title">Adicionar tarefa</label>
            <input type="text" value={taskTitle} onChange={(event)=>{setTaskTitle(event.target.value)}} id="task-title" placeholder='Título da tarefa'/>
            </div>
            <button type="submit">Adicionar tarefa</button>
        </form>
        <ul>
        {task.map(tasks => {
            return(
                <li key={tasks.id}> 
                    <input type='checkbox' id={`task-${tasks.id}`}/>
                    <label htmlFor="task">{tasks.title}</label>                
                </li>
            )})}
        </ul>
    </section>
    );
}