import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
  const [activity, setActivity] = useState('1.2');
  const navigate = useNavigate();
  const onOptionChange = e => {
    setActivity(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Your Activity</h1>
      <form onSubmit={handleSubmit}>
        <h2>To correctly calculate calorie and water intake</h2>
        <label>
          <input
            type="radio"
            name="goal"
            value="1.2"
            checked={activity === '1.2'}
            onChange={onOptionChange}
          />
          1.2 - if you do not have physical activity and sedentary work
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.375"
            checked={activity === '1.375'}
            onChange={onOptionChange}
          />
          1.375 - if you do short runs or light gymnastics 1-3 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.55"
            checked={activity === '1.55'}
            onChange={onOptionChange}
          />
          1.55 - if you play sports with average loads 3-5 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.725"
            checked={activity === '1.725'}
            onChange={onOptionChange}
          />
          1.725 ​​- if you train fully 6-7 times a week
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="1.9"
            checked={activity === '1.9'}
            onChange={onOptionChange}
          />
          1.9 - if your work is related to physical labor, you train 2 times a
          day and include strength exercises in your training program
        </label>
        <button>Next</button>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Activity;
