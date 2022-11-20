export default function Todo(props){
    return(
        <div className="todolist">
            <h1>TODO LIST</h1>
        <div className="abc">
        <form onSubmit={(e)=>{e.preventDefault();props.onChange()}}>
            <input type="text" value={props.inputValue} className="note-text white-box" onChange={props.value}/>
            { 
                props.toggle ? <button type="submit" className="add-btn btn" ><i className="fa-solid fa-cart-plus"></i></button> :
                <button type="submit" className="add-btn btn" ><i className="fa-solid fa-pen-to-square"></i></button>
            }
        </form>
        <button className="update-btn btn" title="Refresh" onClick={props.refresh}><i className="fa-sharp fa-solid fa-spinner"></i></button>
        </div>
        </div>
    )
}