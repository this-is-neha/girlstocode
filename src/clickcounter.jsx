import React, { useState } from "react";
const useClick=(b)=>{
        const [count, setCount] = useState(0);
        const [buttonClicked, setButtonClicked] = useState(false);
      
        const increment = (b) => {
          setCount(count + b);
          setButtonClicked(true);
      
        };
      
        const decreasetwo = (a) => {
           
               if(count-a>=0){
          setCount(count - a);
          setButtonClicked(true);
               }
               else{
                setCount(0)
               }
    
    };
      
        return (
          <div>
            <h2>{b.title}</h2>
      
      
            <p>Count: {count}</p>
            <button onClick={()=>increment(1)}>Increment</button>
            <button onClick={()=>decreasetwo(2)}>Decrement</button>
      
            {buttonClicked? <p>Button Clicked!{count}</p>:<p></p>}
      
          </div>
        );
      };
      
      export default useClick;
