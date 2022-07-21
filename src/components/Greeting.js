import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromAPI } from '../redux/reducers/greetings';

const Greetings = () => {
  const selected = useSelector((state) => state.greetings.message);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDataFromAPI());
  };

  return (
    <>
      Message:
      {selected}
      <button type="button" id="messages" onClick={handleClick}>
        Show a message
      </button>
    </>
  );
};

export default Greetings;
