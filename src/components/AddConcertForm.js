import React, { useState } from 'react';

import "./AddConcertForm.css";
const AddConcertForm = (props) => {

  const[enteredText, setEnteredText] = useState('');

  const addConcertHandler = (event) => {
    event.preventDefault();
    const newConcert = {id:'9', name:enteredText};
    setEnteredText('');
    props.onAddConcert(newConcert);
  }

  const textChangeHandler = (event) => {
    setEnteredText( event.target.value );
  };

  return (
    <div id="add-concert-form" onSubmit={addConcertHandler}><form>
      <input type="text" id="concert-name" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add Concert</button>
    </form></div>
  );

}

export default AddConcertForm;
