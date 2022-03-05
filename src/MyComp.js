import React from "react";
// let MyComp = () => {
//     return (
//         <div>
//             <h1>
//                 Hello Ashish
//             </h1>
//             <p>
//                 Welcome to React
//             </p>
//         </div>
//     );
// }
class MyComp extends React.Component{
    state = {
        num : 1,
    }
    render = () => {
        return (
            <div>
                {/* <h1> {this.state.name} </h1>  */}
                <button onClick={
                    () =>{
                        this.setState({num : this.state.num + 1})
                    }
                }>i'll increment number</button>
                <span> </span>
                <button onClick={
                    () => {
                        this.setState({num : this.state.num - 1})
                    }
                }>
                    i'll decrement number
                </button>
                <h1>
                    {this.state.num}
                </h1>
            </div>
        );
    }
}

export default MyComp;              