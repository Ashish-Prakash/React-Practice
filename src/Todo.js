import React from "react";
import './Todo.css';
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
                    if(e.key == "Enter"){
                        this.setState({
                            input : [...this.state.input, this.state.curr],
                            curr : ""
                        })
                    }
                }}
                value = {this.state.curr}
                
                />
                <ul>
                    {
                        this.state.input.map((element) =>{
                            return <li>{element}
                            </li>
                        })
                    }
                    {/* {
                        this.state.input.filter((element) =>{
                            if(ondblclick){
                                return false;
                            }
                            return true;
                        })
                    } */}
                </ul>
            </div>
        )
    }
}

export default Todo;