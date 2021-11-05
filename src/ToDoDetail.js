import React from "react";

function ToDoDetail (props) {
    return (
        <div>
        <li key={props.mytoes}>{props.todo}</li>
        <button onClick={() => props.delete(props.mytoes)}>Delete</button>
        </div>
    )
}

export default ToDoDetail