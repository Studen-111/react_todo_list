import React, {useState} from "react";
import PropTypes from "prop-types";

function AddTodo({onCreate}) {
  const [value, setValue] = useState('');
  
  function submitHandler(event) {
      event.preventDefault();

      if(value.trim()){
          onCreate(value);
          setValue('');
      }
  } 
  
  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler} >
      <input style={{height: '20px', marginRight: '10px'}} value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit" style={{height: '25px', width: '100px', backgroundColor: 'blue', color: '#fff'}}>Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;
