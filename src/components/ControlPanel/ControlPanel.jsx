import React, { useState } from 'react';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import Lose_fat_men from '../../assets/icons/emoji/Lose_fat_men.png';
import s from './ControlPanel.module.css';
import Waigth from '../../assets/icons/emoji/Waight.png';
import TargetSelectionModal from 'components/Modal/TargetSelectionModal/TargetSelectionModal';
import СurrentWeightModal from '../Modal/СurrentWeightModal/СurrentWeightModal';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

const ControlPanel = () => {
  const [targetModalOpen, setTargetModalOpen] = useState(false);

  const [weightModalOpen, setWeightModalOpen] = useState(false);
  const isMobileScreen = useMediaQuery({ maxWidth: 834 });
  const weight = useSelector(state => state?.auth?.user?.weight) || 0;
  const goal = useSelector(state => state?.auth?.user?.goal);

  return (
    <>
      <TargetSelectionModal
        targetModalOpen={targetModalOpen}
        setTargetModalOpen={setTargetModalOpen}
        goal={goal}
      />
      <СurrentWeightModal
        weightModalOpen={weightModalOpen}
        setWeightModalOpen={setWeightModalOpen}
        weight={weight}
      />
      <div className={s.controlPanel}>
        <div className={s.targerSelect}>
          <div className={s.imageWrapper}>
            <img src={Lose_fat_men} alt="" className={s.targetImg} />
          </div>
          <div className={s.targetTextWrapper}>
            <h3 className={s.titleTarget}>Goal</h3>
            <div className={s.BtnTextWrapper}>
              <p className={s.subTitleTarget}>
                {goal.charAt(0).toUpperCase() + goal.slice(1)}
              </p>
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
                  <use
                    href={
                      isMobileScreen
                        ? `${iconsSrc}#arrow-right`
                        : `${iconsSrc}#arrow-down`
                    }
                  />
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
              <p className={s.subTitleTarget}>{weight}</p>{' '}
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
