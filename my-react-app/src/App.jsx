import React, { useState } from "react";

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
          {items.map(item=>(
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
