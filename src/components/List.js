import React from "react"
import Name from "./Name"

function List({names}){

   console.log(names)

   let singleName = names.map((item) => {
      return(
         <Name
         key={item.id}
         item={item} />
      )
   })


   return (
      <div>
         <h1>LIST:</h1>
         <div>
            {singleName}
         </div>

      </div>
      
   )
}


export default List