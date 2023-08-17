import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BodyParams = () => {
  const [form, setForm] = useState({
    height: '',
    weight: '',
  });
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  //   const handleSubmit = e => {
  //     dispatch(form);
  //   };

  return (
    <div>
      <h1>Body parameters</h1>

      <form>
        <h2>Enter your parameters for correct performance tracking</h2>
        <p>Height</p>
        <input
          type="number"
          placeholder="Enter your height"
          required
          name="height"
          value={form.height}
          onChange={handleChange}
          autoComplete="off"
        />

        <p>Weight</p>
        <input
          type="number"
          placeholder="Enter your weight"
          required
          name="weight"
          value={form.weight}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" onClick={() => navigate('/signup/activity')}>
          Next
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default BodyParams;
