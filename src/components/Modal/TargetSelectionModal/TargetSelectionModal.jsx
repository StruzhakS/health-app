import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './TargetSelectionModal.module.css';
import { customStyles } from 'components/Header/Header';
import loseFat from '../../../assets/icons/emoji/Lose_fat_men.png';
import mainTainspa from '../../../assets/icons/emoji/Maintake_men.png';
import gainMuscle from '../../../assets/icons/emoji/Gain_muscle.png';

const TargetSelectionModal = ({ targetModalOpen, setTargetModalOpen }) => {
  const [selectTarget, setSelecttarget] = useState('loseFat');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    //   діспатч на зміну цілі
    // setTargetModalOpen(false);
  };

  const handleChange = e => {
    console.log(e.target.checked);
    setSelecttarget(e.target.value);
  };

  console.log(selectTarget);
  return (
    <>
      <Modal
        className={s.targetModal}
        isOpen={targetModalOpen}
        onRequestClose={() => setTargetModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={() => setTargetModalOpen(false)}>
          Close
        </button>
        <h2>Target selection</h2>
        <p>The service will adjust your calorie intake to your goal</p>
        <form onChange={handleChange}>
          <div>
            <label>
              <div className="radioLabel">
                <input
                  type="radio"
                  value="loseFat"
                  name="target"
                  checked={selectTarget === 'loseFat'}
                  onChange={handleChange}
                />
                <img src={loseFat} alt="loseFat" className={s.radioImage} />

                <span>Lose fat</span>
              </div>
            </label>
          </div>
          <div>
            <label className="radioLabel">
              <input
                className={s.targetInput}
                type="radio"
                value="maintainspa"
                name="target"
                checked={selectTarget === 'maintainspa'}
                onChange={handleChange}
              />
              <img
                src={mainTainspa}
                alt="maintainspa"
                className={s.radioImage}
              />

              <span>Maintainspa</span>
            </label>
          </div>
          <div>
            <label className="radioLabel">
              <input
                type="radio"
                value="gainMuscle"
                name="target"
                checked={selectTarget === 'gainMuscle'}
                onChange={handleChange}
              />
              <img src={gainMuscle} alt="gainMuscle" className={s.radioImage} />

              <span> Gain Muscle</span>
            </label>
          </div>
          <button type="button">Confirm</button>
        </form>
      </Modal>
    </>
  );
};

export default TargetSelectionModal;
