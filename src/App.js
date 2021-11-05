import './App.css';
import React, { Component} from "react";
import ToDos from "./ToDos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: ""
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.updateText = this.updateText.bind(this)
    this.clearText = this.clearText.bind(this)
  }

  updateText (event) {
    this.setState({text: event.target.value})
  }

  removeToDo = (index) => {
    let array = [...this.state.todos];
    console.log(index)
    if(index !== -1){
      array.splice(index, 1)
      this.setState({todos: array})
    }

  }

  clearText (){
    this.setState({text : ""})
}

  onClickHandler () {
    this.setState({todos: this.state.todos.concat(this.state.text)}, () => console.log(this.state.todos))
    this.clearText()
  }

  render() {
    return (
        <div className={"center"}>
          <input type={"text"} onChange={this.updateText} value={this.state.text} placeholder={"Enter your to do..."} />
          <input type={"submit"} onClick={this.onClickHandler} />
          <ToDos todos={this.state.todos} removeToDo={this.removeToDo}/>
        </div>
    )
  }

}

export default App