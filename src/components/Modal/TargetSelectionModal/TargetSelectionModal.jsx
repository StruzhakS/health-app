import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './TargetSelectionModal.module.css';
import { customStyles } from 'components/Header/Header';
import loseFat from '../../../assets/icons/emoji/Lose_fat_men.png';
import maintain from '../../../assets/icons/emoji/Maintake_men.png';
import gainMuscle from '../../../assets/icons/emoji/Gain_muscle.png';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { updateGoalOperation } from 'redux/user/userOperations';

export const customMobileStyles = {
  overlay: {
    background: 'black',
  },
};

const TargetSelectionModal = ({
  targetModalOpen,
  setTargetModalOpen,
  goal,
}) => {
  const [selectTarget, setSelecttarget] = useState(goal);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setTargetModalOpen(false);
    dispatch(updateGoalOperation(selectTarget));
  };

  const isMobileScreen = useMediaQuery({ maxWidth: 834 });

  return (
    <>
      <Modal
        className={s.targetModal}
        isOpen={targetModalOpen}
        onRequestClose={() => setTargetModalOpen(false)}
        style={isMobileScreen ? customMobileStyles : customStyles}
        contentLabel="Example Modal"
      >
        {!isMobileScreen && (
          <button
            type="button"
            className={s.closeTargetModal}
            onClick={() => setTargetModalOpen(false)}
          >
            {IoIosCloseCircleOutline()}
          </button>
        )}
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
                value="maintain"
                name="target"
                checked={selectTarget === 'maintain'}
                onChange={e => setSelecttarget(e.target.value)}
              />
              <div
                className={s.imageWrapper}
                style={
                  selectTarget === 'maintain'
                    ? { borderColor: '#B6C3FF' }
                    : null
                }
              >
                <img src={maintain} alt="maintain" className={s.radioImage} />
              </div>

              <span
                style={
                  selectTarget === 'maintain' ? { color: '#B6C3FF' } : null
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
                  alt="gainMuscle"
                  className={s.radioImage}
                />
              </div>
              <span
                style={
                  selectTarget === 'gainMuscle' ? { color: '#B6C3FF' } : null
                }
              >
                Gain Muscle
              </span>
            </label>
          </div>
          <button className={s.confirmTargetBtn}>Confirm</button>
          {isMobileScreen && (
            <button
              type="button"
              onClick={() => setTargetModalOpen(false)}
              className={s.cancelTargetButton}
            >
              Cancel
            </button>
          )}
        </form>
      </Modal>
    </>
  );
};

export default TargetSelectionModal;
