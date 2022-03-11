let Input = (props) =>{
    return (
        <input type= "text" 
        placeholder="Write Todo and Press Enter !!!" 
        onChange={
            (e) =>{
                props.handlecurrent(e.currentTarget.value); 
            }
        }
        onKeyDown = {(e) =>{
            if(e.key === "Enter"){
                props.handlestate();
            }
        }}
        value = {props.curr}
        />
    )
}
export default Input;