import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './TargetSelectionModal.module.css';
import { customStyles } from 'components/Header/Header';
import loseFat from '../../../assets/icons/emoji/Lose_fat_men.png';
import mainTainspa from '../../../assets/icons/emoji/Maintake_men.png';
import gainMuscle from '../../../assets/icons/emoji/Gain_muscle.png';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const TargetSelectionModal = ({ targetModalOpen, setTargetModalOpen }) => {
  const [selectTarget, setSelecttarget] = useState('lose fat');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(selectTarget);
    setTargetModalOpen(false);
    //   діспатч на зміну цілі
  };

  return (
    <>
      <Modal
        className={s.targetModal}
        isOpen={targetModalOpen}
        onRequestClose={() => setTargetModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          className={s.closeTargetModal}
          onClick={() => setTargetModalOpen(false)}
        >
          {IoIosCloseCircleOutline()}
        </button>
        <h2 className={s.targetTitle}>Target selection</h2>
        <p className={s.targetSubTitle}>
          The service will adjust your calorie intake to your goal
        </p>
        <form onSubmit={handleSubmit} className={s.targetForm}>
          <div>
            <label className={s.targetLabel}>
              <input
                type="radio"
                className={s.inputTarget}
                value="lose fat"
                name="target"
                checked={selectTarget === 'lose fat'}
                onChange={e => setSelecttarget(e.target.value)}
              />
              <div
                className={s.imageWrapper}
                style={
                  selectTarget === 'lose fat'
                    ? { borderColor: '#B6C3FF' }
                    : null
                }
              >
                <img src={loseFat} alt="lose fat" className={s.radioImage} />
              </div>
              <span
                style={
                  selectTarget === 'lose fat' ? { color: '#B6C3FF' } : null
                }
              >
                Lose fat
              </span>
            </label>
          </div>
          <div>
            <label className={s.targetLabel}>
              <input
                className={s.inputTarget}
                type="radio"
                value="maintainspa"
                name="target"
                checked={selectTarget === 'maintainspa'}
                onChange={e => setSelecttarget(e.target.value)}
              />
              <div
                className={s.imageWrapper}
                style={
                  selectTarget === 'maintainspa'
                    ? { borderColor: '#B6C3FF' }
                    : null
                }
              >
                <img
                  src={mainTainspa}
                  alt="maintainspa"
                  className={s.radioImage}
                />
              </div>

              <span
                style={
                  selectTarget === 'maintainspa' ? { color: '#B6C3FF' } : null
                }
              >
                Maintainspa
              </span>
            </label>
          </div>
          <div>
            <label className={s.targetLabel}>
              <input
                type="radio"
                className={s.inputTarget}
                value="gain muscle"
                name="target"
                checked={selectTarget === 'gain muscle'}
                onChange={e => setSelecttarget(e.target.value)}
              />
              <div
                className={s.imageWrapper}
                style={
                  selectTarget === 'gain muscle'
                    ? { borderColor: '#B6C3FF' }
                    : null
                }
              >
                <img
                  src={gainMuscle}
                  alt="gain muscle"
                  className={s.radioImage}
                />
              </div>
              <span
                style={
                  selectTarget === 'gain muscle' ? { color: '#B6C3FF' } : null
                }
              >
                Gain Muscle
              </span>
            </label>
          </div>
          <button className={s.confirmTargetBtn}>Confirm</button>
        </form>
      </Modal>
    </>
  );
};

export default TargetSelectionModal;
