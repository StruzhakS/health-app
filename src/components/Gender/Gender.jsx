import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Gender = () => {
  const [form, setForm] = useState({
    gender: '',
    age: '',
  });
  const [gender, setGender] = useState('male');
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOptionChange = e => {
    setGender(e.target.value);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  // const handleSubmit = e => {
  //   dispatch(form);
  // };

  return (
    <div>
      <h1>Select gender, Age</h1>

      <form>
        <h2>Choose a goal so that we can help you effectively</h2>
        <p>Gender</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={onOptionChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={onOptionChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="non-binary"
            checked={gender === 'non-binary'}
            onChange={onOptionChange}
          />
          Non-binary
        </label>

        <p>Your age</p>
        <input
          type="number"
          placeholder="Enter your age"
          required
          name="age"
          value={form.age}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" onClick={() => navigate('/signup/bodyparams')}>
          Next
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Gender;
