import React, { useState } from 'react';
import Modal from 'react-modal'; // Імпорт бібліотеки react-modal
import sprite from '../../../assets/icons/symbol-defs.svg';
import s from './DateSelect.module.css';

const DateSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.dateSelectorContainer}>
      <button onClick={handleModalOpen} className={s.lastMonthBtn} >Last Month
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
        className={s.dashboardSelect} 
        overlayClassName={s.modalOverlay} 
      >
        <p onClick={handleModalClose}>Last Year</p>
      </Modal>
    </div>
  );
};

export default DateSelector;
