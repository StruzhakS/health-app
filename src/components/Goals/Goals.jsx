import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
  const [goal, setGoal] = useState('lose fat');
  const navigate = useNavigate();
  const onOptionChange = e => {
    setGoal(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Your goal</h1>
        <h2>Choose a goal so that we can help you effectively</h2>
        <label>
          <input
            type="radio"
            name="goal"
            value="lose fat"
            checked={goal === 'lose fat'}
            onChange={onOptionChange}
          />
          Lose Fat
        </label>
        <label>
          <input
            type="radio"
            name="goal"
            value="maintain"
            checked={goal === 'maintain'}
            onChange={onOptionChange}
          />
          Maintain
        </label>
        <label>
          <input
            type="radio"
            name="goal"
            value="gain muscle"
            checked={goal === 'gain muscle'}
            onChange={onOptionChange}
          />
          Gain Muscle
        </label>
        <button onClick={() => navigate('/signup/gender')}>Next</button>
      </form>
    </div>
  );
};

export default Goals;
