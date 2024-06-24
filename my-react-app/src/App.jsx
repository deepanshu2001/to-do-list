import React, { useState } from "react";
import Listitem from "./Listitem";
function App() {
  const [text,setText] =useState("");
  const [items,setitems]=useState([]);
  function helper(){
    setitems(prevValue=>{
      return [...prevValue,text]
    })
   
    setText("")
  }
  function setter(event){
     const val=event.target.value;
     console.log(val)
     setText(val);
  }
  function deleteitem(id){
    setitems(prevValue=>{
      return prevValue.filter((item,index)=>{
        return index!=id
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setter} type="text" value={text} />
        <button onClick={helper}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item,index)=>(
            <Listitem key={index} id={index} txt={item} onChecked={deleteitem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
