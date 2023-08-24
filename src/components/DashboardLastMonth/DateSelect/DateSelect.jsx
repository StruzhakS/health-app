import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../../assets/icons/symbol-defs.svg';
import s from './DateSelect.module.css';
import a from '../../../animations/animations.module.css';

const DateSelector = ({setIsMonth}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Last Month');
  const [lastYearButtonText, setLastYearButtonText] = useState('Last Year');
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (buttonText === 'Last Month' && lastYearButtonText === 'Last Year') {
      setLastYearButtonText('Last Month')
      setButtonText('Last Year');
      setIsMonth(false);
    } else {
      setLastYearButtonText('Last Year');
      setButtonText('Last Month');
      setIsMonth(true);
    }
    handleModalClose();
  };
  return (
    <div className={`${s.dateSelectorContainer} ${a.slideLeftToRight}`}>
      <button onClick={handleModalOpen} className={s.lastMonthBtn}>
        {buttonText}
        <svg className={s.dashboardArrowDownSvg}>
          <use
            className={s.dashboardArrowDownSvgLink}
            xlinkHref={`${sprite}#arrow-down`}
          ></use>
        </svg>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="ModalDashBoard"
        className={`${s.dashboardSelect} ${a.scaleInCenter}`}
        overlayClassName={s.modalOverlay}
      >
        <span onClick={handleButtonClick} >{ lastYearButtonText}</span>
      </Modal>
    </div>
  );
};

export default DateSelector;
