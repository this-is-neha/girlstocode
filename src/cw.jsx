import React, { useState } from 'react';

const  Data = () => {
    const [count, setCount] = useState([])
    
    const  data=[  { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
         { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
         { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
         { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
         { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
         { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
       
        ] 


return (
    
   <>
 { data.map((i)=>(
    <table>
<tr>
  <th> category</th>
  <th> price</th>
  <th> stocked</th>
  <th> name</th>
 
</tr>


<tr>
  <th> {i.category}</th>
  <th>{ i.price}</th>
  <th> {i.stocked}</th>
  <th> {i.name}</th>
 
</tr>


    </table>
 ))}

)

)
</>)
}

export default Data;