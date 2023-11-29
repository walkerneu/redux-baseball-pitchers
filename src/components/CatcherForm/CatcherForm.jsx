import {useState} from 'react';
import { useDispatch } from 'react-redux';

function CatcherForm (){

    const [newCatcher, setNewCatcher] = useState('');

    const dispatch = useDispatch()
  
    const handleCatcherNameChange = event => {
      setNewCatcher(event.target.value);
    };
  
    const handleCatcherSubmit = event => {
      event.preventDefault();
      dispatch({
        type: "ADD_CATCHER",
        payload: newCatcher
      })
      setNewCatcher('');
    };

    return (
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
    )
}

export default CatcherForm;