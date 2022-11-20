import React from 'react'

function TodoList(props) {

    return (
        <div className="todo_style">
        <li>{props.text}<button className="secondbtn" onClick={() => {props.onSelect(props.id);}}>Delete</button></li>
         
        </div>
    );
}
export default TodoList;
