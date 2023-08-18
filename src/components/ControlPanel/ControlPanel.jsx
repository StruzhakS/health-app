import React, { useState } from 'react';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import Lose_fat_men from '../../assets/icons/emoji/Lose_fat_men.png';
import s from './ControlPanel.module.css';
import Waigth from '../../assets/icons/emoji/Waight.png';
import TargetSelectionModal from 'components/Modal/TargetSelectionModal/TargetSelectionModal';
import СurrentWeightModal from '../Modal/СurrentWeightModal/СurrentWeightModal';

const ControlPanel = () => {
  const [targetModalOpen, setTargetModalOpen] = useState(false);

  const [weightModalOpen, setWeightModalOpen] = useState(false);

  return (
    <>
      <TargetSelectionModal
        targetModalOpen={targetModalOpen}
        setTargetModalOpen={setTargetModalOpen}
      />
      <СurrentWeightModal
        weightModalOpen={weightModalOpen}
        setWeightModalOpen={setWeightModalOpen}
      />
      <div className={s.controlPanel}>
        <div className={s.targerSelect}>
          <div className={s.imageWrapper}>
            <img src={Lose_fat_men} alt="" className={s.targetImg} />
          </div>
          <div className={s.targetTextWrapper}>
            <h3 className={s.titleTarget}>Goal</h3>
            <div className={s.BtnTextWrapper}>
              <p className={s.subTitleTarget}>Lose fat</p>
              <button onClick={() => setTargetModalOpen(true)}>
                <svg
                  style={
                    !targetModalOpen
                      ? { fill: 'white' }
                      : {
                          fill: 'white',
                          rotate: '180deg',
                        }
                  }
                  width="14"
                  height="14"
                >
                  <use href={`${iconsSrc}#arrow-down`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={s.targerSelect}>
          <div className={s.imageWrapper}>
            <img src={Waigth} alt="" className={s.targetImg} />
          </div>
          <div className={s.targetTextWrapper}>
            <h3 className={s.titleTarget}>Weigth</h3>
            <div className={s.BtnTextWrapper}>
              <p className={s.subTitleTarget}>65</p>{' '}
              <p className={s.weigthTargetText}>kg</p>
              <button onClick={() => setWeightModalOpen(true)}>
                <svg style={{ fill: 'white' }} width="24" height="14">
                  <use href={`${iconsSrc}#edit-2`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
