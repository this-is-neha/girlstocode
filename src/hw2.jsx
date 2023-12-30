import React, { useState } from 'react';

const NameInputBox = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (e) => {
   setName(e.target.value);
  };

  const handleAddName = () => {
 
    if (name.trim() !== '') {
     
      setNames([...names, name]);
      setName(''); 
    } else {
      alert('Please enter a valid name.');
    }
  };
  const deleteEverything=(index)=>{
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  }

 
  return (
    <div>
      <form>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      </form>
      <button onClick={handleAddName}>Add Name</button>
      <button onClick={deleteEverything}>Delete</button>

      <div>
        <h2>Entered Names:</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NameInputBox;