import React ,{useState} from 'react'
const useAdd=(d)=>{
    
    const [name, setName] = useState('');
    const [names, setNames] = useState([])
    const [buttonClicked, setButtonClicked] = useState(false);

    const add=()=>{
       
            setNames([...names, name]);
            setName(''); // Clear the input after adding the name
       
        setButtonClicked(true)
    }
  
    return (
        <div>
          <h2>{d.title}</h2>
   

          <label for="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <p>Name: {names}</p>
          <button onClick={add()}>Name</button>
          
    
    
        </div>
      );
    };
    
    export default useAdd;