import React, { useState } from 'react';
import s from './Settings.module.css';
import settingsPicture from '../../assets/img/mobile/Setting.png';
import { useSelector } from 'react-redux';

const Settings = () => {
  const avatar = useSelector(state => state.auth?.user?.avatarURL);

  const [form, setForm] = useState({
    name: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activity: '',
    goal: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  return (
    <div className={s.settingsWrapper}>
      <h2 className={s.settingsTitle}>Profile setting</h2>
      <img src={settingsPicture} alt="Settings" />
      <form>
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Your photo</span>
          <img src={avatar} alt="" className={s.settingsAvatar} />
          <input
            type="text"
            name="avatar"
            value={form.name}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Settings;
