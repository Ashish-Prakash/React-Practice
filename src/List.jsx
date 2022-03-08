let List = (props) =>{
    return (
        <ul>
            {
                props.input.map((element) =>{
                    return <li>{element}
                    {/* <button onClick={
                        () => {
                            let currentinput = this.state.input;
                            let filterTodo = currentinput.filter((e) =>{
                                return e !== element;
                            })
                            this.setState({input : filterTodo})
                        }
                    }> Delete</button> */}

                    <button onClick={
                        () =>{
                            props.deleteTask(element);
                        }
                    }>Delete</button>
                    </li>
                })
            }
        </ul>
    )
}
export default List;

// https://github.com/Ashish-Prakash/React-Practice.git