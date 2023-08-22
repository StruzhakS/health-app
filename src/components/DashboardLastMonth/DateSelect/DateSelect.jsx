import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../../assets/icons/symbol-defs.svg';
import s from './DateSelect.module.css';
import a from '../../../animations/animations.module.css';

const DateSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Last Month');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (buttonText === 'Last Month') {
      setButtonText('Last Year');
    } else {
      setButtonText('Last Month');
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
        <p onClick={handleButtonClick}>Last Year</p>
      </Modal>
    </div>
  );
};

export default DateSelector;
