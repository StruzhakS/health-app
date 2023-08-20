import React, { useState } from 'react';
import s from './Settings.module.css';
import settingsPicture from '../../assets/img/mobile/Setting.png';
import { useDispatch, useSelector } from 'react-redux';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';
import { updateSettingsOperations } from 'redux/user/userOperations';

const Settings = () => {
  const user = useSelector(state => state.auth?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: user.name,
    gender: user.gender,
    age: user.age,
    height: user.height,
    weight: user.weight,
    activity: user.activity,
  });
  const [file, setFile] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'age' || 'height' || 'weight') {
      const regex = /^\d{0,3}$/;
      if (regex.test(value)) {
        setForm(prevForm => {
          return { ...prevForm, [name]: value };
        });
      }
    }
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const formData = new FormData();

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  // const isMobile = useMediaQuery({ maxWidth: 833 });
  // const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });
  const handleSubmit = async e => {
    e.preventDefault();

    formData.name = form.name;
    formData.age = form.age;
    formData.gender = form.gender;
    formData.height = form.height;
    formData.weight = form.weight;
    formData.activity = form.activity;
    formData.avatar = file;

    dispatch(updateSettingsOperations(formData))
      .unwrap()
      .then(() =>
        setForm({
          name: user.name,
          gender: user.gender,
          age: user.age,
          height: user.height,
          weight: user.weight,
          activity: user.activity,
        })
      )
      .then(() => navigate('/'));
  };

  return (
    <div className={s.settingsWrapper}>
      <h2 className={s.settingsTitle}>Profile setting</h2>
      <img className={s.imageSettings} src={settingsPicture} alt="Settings" />
      <form className={s.settingsForm} onSubmit={handleSubmit}>
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <p>Your photo</p>
        <label className={s.photoLabel}>
          <img
            src={user.avatarURL}
            alt="user avatar"
            className={s.settingsAvatar}
          />
          <svg width="16" height="16px">
            <use href={`${iconsSrc}#direct-inbox`} />
          </svg>

          <span>{file?.name || 'Download new photo'}</span>
          <input
            type="file"
            name="avatar"
            onChange={handleFileChange}
            placeholder="Download new photo"
            style={{ display: 'none' }}
          />
        </label>
        <label>
          <span>Your age</span>
          <input
            className={s.inputData}
            type="text"
            name="age"
            placeholder="Enter your age"
            required
            value={form.age}
            onChange={handleChange}
            maxLength={3}
            autoComplete="off"
          />
        </label>
        <p>Gender</p>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === 'male'}
            onChange={handleChange}
          />
          <span className={s.goalList}>Male</span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === 'female'}
            onChange={handleChange}
          />
          <span className={s.goalList}>Female</span>
        </label>
        <label>
          <span>Height</span>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
            maxLength={3}
            autoComplete="off"
            placeholder="Enter your height in cm"
          />
        </label>
        <label>
          <span>Weight</span>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            maxLength="3"
            autoComplete="off"
            placeholder="Enter your weight"
            step={0.1}
          />
        </label>
        <p>Your activity</p>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.2"
            checked={form.activity === '1.2'}
            onChange={handleChange}
          />
          <span>
            1.2 - if you do not have physical activity and sedentary work
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.375"
            checked={form.activity === '1.375'}
            onChange={handleChange}
          />
          <span>
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.55"
            checked={form.activity === '1.55'}
            onChange={handleChange}
          />
          <span>
            1.55 - if you play sports with average loads 3-5 times a week
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.725"
            checked={form.activity === '1.725'}
            onChange={handleChange}
          />
          <span>1.725 ​​- if you train fully 6-7 times a week</span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.9"
            checked={form.activity === '1.9'}
            onChange={handleChange}
          />
          <span>
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </span>
        </label>
        <div>
          <button>Save</button>
          <button type="button" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
