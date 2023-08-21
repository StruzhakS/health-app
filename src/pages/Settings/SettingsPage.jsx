import React, { useState } from 'react';
import s from './Settings.module.css';
import mobileSettingsPicture from '../../assets/img/mobile/Setting.png';
import tabletSettingsPicture from '../../assets/img/tablet/Setting.png';
import desktopSettingsPicture from '../../assets/img/desktop/Setting.png';
import { useDispatch, useSelector } from 'react-redux';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';
import { updateSettingsOperations } from 'redux/user/userOperations';
import { useMediaQuery } from 'react-responsive';

const SettingsPage = () => {
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
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
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
      <form className={s.mainSettingsForm} onSubmit={handleSubmit}>
        <div className={s.settingsBtnTablet}>
          <h2 className={s.settingsTitle}>Profile setting</h2>
          {isTablet && (
            <div className={s.settingsBtnWrapper}>
              <button className={s.saveBtn}>Save</button>
              <button
                type="button"
                className={s.cancelBtn}
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>
          )}
          {isDesktop && (
            <div className={s.settingsBtnWrapper}>
              <button className={s.saveBtn}>Save</button>
              <button
                type="button"
                className={s.cancelBtn}
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        {isMobile && (
          <img
            className={s.imageSettings}
            src={mobileSettingsPicture}
            alt="Settings"
          />
        )}
        {isTablet && (
          <img
            className={s.imageSettings}
            src={tabletSettingsPicture}
            alt="Settings"
          />
        )}
        <div className={s.settingsContent}>
          {isDesktop && (
            <img
              className={s.imageSettings}
              src={desktopSettingsPicture}
              alt="Settings"
            />
          )}
          <div className={s.settingsForm}>
            <label className={s.labelWrapper}>
              <span className={s.nameTitle}>Your name</span>
              <input
                className={s.nameInput}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className={s.photoLabel}>
              <p className={s.nameTitle}>Your photo</p>
              <div className={s.photoLabelBox}>
                <img
                  src={user.avatarURL}
                  alt="user avatar"
                  className={s.settingsAvatar}
                />
                <div className={s.photoInfoBox}>
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
                </div>
              </div>
            </label>
            <label className={s.labelWrapper}>
              <p className={s.nameTitle}>Your age</p>
              <input
                className={s.nameInput}
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
            <div className={s.genderLabel}>
              <p className={s.nameTitle}>Gender</p>
              <div className={s.customRadioBox}>
                <label className={s.customRadio}>
                  <input
                    className={s.radioInput}
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
                    className={s.radioInput}
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={handleChange}
                  />
                  <span className={s.goalList}>Female</span>
                </label>
              </div>
            </div>
            <label className={s.labelWrapper}>
              <p className={s.nameTitle}>Height</p>
              <input
                className={s.nameInput}
                type="text"
                name="height"
                value={form.height}
                onChange={handleChange}
                maxLength={3}
                autoComplete="off"
                placeholder="Enter your height in cm"
              />
            </label>
            <label className={s.labelWrapper}>
              <p className={s.nameTitle}>Weight</p>
              <input
                className={s.nameInput}
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
            <div className={`${s.activityWrapper} ${s.fullWidth}`}>
              <p className={s.nameTitle}>Your activity</p>
              <div className={s.activityContent}>
                <label className={s.actvityLabel}>
                  <input
                    className={s.radioInput}
                    type="radio"
                    name="activity"
                    value="1.2"
                    checked={form.activity === '1.2'}
                    onChange={handleChange}
                  />
                  <span>
                    1.2 - if you do not have physical activity and sedentary
                    work
                  </span>
                </label>
                <label className={s.actvityLabel}>
                  <input
                    className={s.radioInput}
                    type="radio"
                    name="activity"
                    value="1.375"
                    checked={form.activity === '1.375'}
                    onChange={handleChange}
                  />
                  <span>
                    1.375 - if you do short runs or light gymnastics 1-3 times a
                    week
                  </span>
                </label>
                <label className={s.actvityLabel}>
                  <input
                    className={s.radioInput}
                    type="radio"
                    name="activity"
                    value="1.55"
                    checked={form.activity === '1.55'}
                    onChange={handleChange}
                  />
                  <span>
                    1.55 - if you play sports with average loads 3-5 times a
                    week
                  </span>
                </label>
                <label className={s.actvityLabel}>
                  <input
                    className={s.radioInput}
                    type="radio"
                    name="activity"
                    value="1.725"
                    checked={form.activity === '1.725'}
                    onChange={handleChange}
                  />
                  <span>1.725 ​​- if you train fully 6-7 times a week</span>
                </label>
                <label className={s.actvityLabel}>
                  <input
                    className={s.radioInput}
                    type="radio"
                    name="activity"
                    value="1.9"
                    checked={form.activity === '1.9'}
                    onChange={handleChange}
                  />
                  <span>
                    1.9 - if your work is related to physical labor, you train 2
                    times a day and include strength exercises in your training
                    program
                  </span>
                </label>
              </div>
            </div>
            {isMobile && (
              <div className={s.settingsBtnWrapper}>
                <button className={s.saveBtn}>Save</button>
                <button
                  type="button"
                  className={s.cancelBtn}
                  onClick={() => navigate('/')}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
