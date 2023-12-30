import React, { useState } from 'react';

const useAdd = (d) => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const add = () => {
    if (name.trim() !== '') {
      setNames([...names, name]);
      setName(''); // Clear the input after adding the name
      setButtonClicked(true);
    } else {
      alert('Please enter a valid name.');
    }
  };

  return (
    <div>
      <h2>{d.title}</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    
      <p>Names: {names.join(',')}</p>
      <button onClick={add}>Add Name</button>
     
    </div>
  );
};

export default useAdd;