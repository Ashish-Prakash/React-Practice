import React from "react";

class TodoPrac extends React.Component{
    state = {
        tasks : ["hooo","hell"],
        curr : ""
    }
    render = () => {
        return(
            <div>
                <input 
                type="text"
                onChange={(e)=>{
                    this.setState({
                        curr : e.currentTarget.value
                    })
                }}
                onKeyDown ={(e)=>{
                    if(e.key === "Enter"){
                        this.setState({
                            tasks : [...this.state.tasks,this.state.curr],
                            curr : ""
                        })
                    }
                }}
                value = {this.state.curr}
                />
                <ul>
                    {
                        this.state.tasks.map((e) => {
                            return <li>{e} 
                            <button
                            onClick={()=>{
                                let currentTasks = this.state.tasks

                                let filteredTasks = currentTasks.filter((el) =>{
                                    return el !== e
                                })
                                this.setState({tasks:filteredTasks})
                            }}
                            >Delete</button></li> 
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoPrac;