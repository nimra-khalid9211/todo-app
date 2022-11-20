import React, { useState} from 'react';
import Todo from './Todo'
import './App.css';

export default function App() {
  
  const [lists ,setList] = useState([]);
  const [value , setValue] = useState('');
  const [toggle , setToggle] = useState('true');
  const [getid,setId]= useState(null)
  
const listsTodo = lists.map((list)=>{
  return(
                     <div className="list-items" key={list.id}>
                      <div className="textarea white-box">{list.todo}</div>
                      <div className="right-icon">
                       <span className="icons" onClick={()=>updateFunc(list.id)}><i className="fa-solid fa-pen-to-square"></i></span>
                       <span className="icons" onClick={()=>delFunc(list.id)}><i className="fa-solid fa-trash"></i></span>
                      </div>
                    </div>
  )
})
  function addItems(){
    
    if(value === ''){
      alert('ADD SOME TEXT HERE')
    } 
    else if(lists && !toggle){
      const index = lists.findIndex(object => object.id === getid); 

      console.log(index)

       lists[index].todo = value;
      setValue('')
      setToggle(true)
    }
    else {
      const todo = {
        id:new Date().getMilliseconds(),
        todo:value
      }
      setList([...lists,todo]);
  
      setValue('');
      console.log(lists)
    }

  }
  function refreshPage(){ 
    window.location.reload(false);
   }
  function delFunc(id){
    var deleteTofo = lists.filter(lists =>lists.id !== id);
    console.log(deleteTofo);
    setList(deleteTofo);
  }
  function updateFunc(id){
    var updateTofo = lists.find(lists =>lists.id ===id);
    // console.log(updateTofo);
    setValue(updateTofo.todo)
    setToggle(false);

    setId(id);
    console.log(getid)
  }
  function getValue(e){
    console.log(e.target.value )
    setValue(e.target.value)
  }
  return (
    <>
    <Todo 
    onChange={addItems} 
    value={getValue}
    inputValue={value}
    toggle ={toggle}
    refresh ={refreshPage}
    />
    <div>
      {listsTodo}
      </div>
    </>
  );
}
