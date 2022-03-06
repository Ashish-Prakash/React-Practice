import React from "react";
import './Todo.css';
import List from "./List";
class Todo extends React.Component{
    state = {
        input : ["make coffee", "make notice", "dance class"],
        curr : ""
    }
    render = () => {
        return(
            <div>
                <input type= "text" placeholder="Write Todo and Press Enter !!!" onChange={
                    (e) =>{
                        this.setState({
                            curr : e.currentTarget.value
                        })
                        
                    }
                }
                onKeyDown = {(e) =>{
                    if(e.key === "Enter"){
                        this.setState({
                            input : [...this.state.input, this.state.curr],
                            curr : ""
                        })
                    }
                }}
                value = {this.state.curr}
                
                />
                <List input = {this.state.input} />
            </div>
        )
    }
}
export default Todo;