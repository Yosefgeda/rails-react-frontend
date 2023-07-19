import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const singleGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="center">
      <button
        type="button"
        onClick={() => dispatch(fetchGreetings())}
        className="greeting-btn"
      >
        Generate Message
      </button>
      {singleGreeting && <h1>{singleGreeting.message}</h1>}
    </div>
  );
}

export default Greetings;
