import React from "react";

class IncDec extends React.Component{
    state = {
        val : 0
    }
    render = () => {
        return (
            <div>
                <button onClick={
                    () =>{
                        this.setState({val : this.state.val+1});
                    }
                }>increment</button>

                {this.state.val}
                
                <button onClick={
                    () =>{
                        this.setState({val : this.state.val -1});
                    }
                }>decrement</button>
            </div>
        )
    }
}

export default IncDec;