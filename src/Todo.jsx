import React from "react";
import './Todo.css';
import List from "./List";
import Input from "./Input";

class Todo extends React.Component{
    state = {
        input : ["make coffee", "make notice", "dance class"],
        curr : ""
    }
    handlecurrent = (currentInput) => {
        this.setState({
            curr : currentInput
        })
    }
    handlestate = () => {
        this.setState({
            input : [...this.state.input, this.state.curr],
            curr : ""
        })
    }
    handledelete = (singleTask) => {
        let currentinput = this.state.input;
        let filterTodo = currentinput.filter((element) => {
            return element !== singleTask;
        })
        this.setState({input:filterTodo});
    }
    render = () => {
        return(
            <div>
                
                <Input handlecurrent = {this.handlecurrent} handlestate = {this.handlestate} curr = {this.state.curr} />
                <List input = {this.state.input} deleteTask = {this.handledelete}/>
            </div>
        )
    }
}
export default Todo;