import React, {useEffect, useState} from "react"
import List from "./List"
import Form from "./Form"

import '../App.css';

function App() {
  const [names, setNames] = useState([])
  const API = "http://127.0.0.1:3000/toys"

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setNames(data))
  }, [])

  function filterSubmit(value){
    console.log("lifted:", value)
  }

  return (
    <div>
      <Form filterSubmit={filterSubmit} />
      <List names={names}/>
    </div>
  );
}

export default App;


// upon loading fetch data and present in a list
// have a form where you can search to refine the list
