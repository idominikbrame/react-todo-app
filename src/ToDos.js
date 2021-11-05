import React, {Component} from "react";
import ToDoDetail from "./ToDoDetail";

export default class ToDos extends Component {
    render(props) {
        return(

            <ul>
                {this.props.todos.map((todo, index) => {
                   return <ToDoDetail todo={todo} mytoes={index} delete={this.props.removeToDo}/>
                })}
            </ul>

        )
    }
}
