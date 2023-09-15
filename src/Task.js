export const Task=(props)=>{
    return (
    <div className="task"
    style={{backgroundColor: props.completed?"green":"#ff9d00"}}>
        <h3>{props.taskName}</h3>
        <button onClick={()=>props.completeTask(props.id)}>Complete</button>
        <button onClick={()=>props.deleteTask(props.id)}>X</button>
    </div>
    );
}