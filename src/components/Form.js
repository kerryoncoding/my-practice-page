import React, {useState} from "react"

function Form({filterSubmit}){
   const [formInput, setFormInput] = useState("")


   function handleInput(e){
      console.log(e.target.value.toLowerCase())
      if (e.target.value.length < 10) {
         setFormInput(e.target.value.toLowerCase())
      } else {
         alert("form input limpted to 10 characters")
         setFormInput("")
      }
   }

   function handleSubmit(e){
      e.preventDefault()
      filterSubmit(formInput)
   }





   return (
      <div>
         <h1>FORM</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput}/>
            <input type="submit" value="submit" />
         </form>
      </div>
      
   )
}


export default Form