import React, {useState} from "react"

function Form({formSubmit}){
   const [formInput, setFormInput] = useState("")

// original form...
   // function handleInput(e){
   //    console.log(e.target.value.toLowerCase())
   //    if (e.target.value.length < 10) {
   //       setFormInput(e.target.value.toLowerCase())
   //    } else {
   //       alert("form input limpted to 10 characters")
   //       setFormInput("")
   //    }
   // }

   function handleInput(e){
      setFormInput(e.target.value)
   }

   function handleSubmit(e){
      e.preventDefault()
      formSubmit(formInput)
   }


   return (
      <div>
         <h1>FORM</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput}/>
            <input type="submit" value="Search" />
         </form>
      </div>
      
   )
}


export default Form