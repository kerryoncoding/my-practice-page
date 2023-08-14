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

  //original formSubmit would filter list
  // function formSubmit(value){
  //   console.log("lifted:", value)
  //   let filtered = names.filter((item)=> item.name.toLowerCase().includes(value))
  //   setNames(filtered)
  // }

  function formSubmit(value){
    console.log("lifted:", value)
  }

  return (
    <div>
      <Form formSubmit={formSubmit} />
      <List names={names}/>
    </div>
  );
}

export default App;


// upon loading fetch data and present in a list
// have a form where you can search to refine the list

// now update the form to add an item to the list

