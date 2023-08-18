import React, { useState } from 'react';
import s from './СurrentWeightModal.module.css';
import { customStyles } from 'components/Header/Header';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const СurrentWeightModal = ({ weightModalOpen, setWeightModalOpen }) => {
  const D = new Date();

  const [weight, setWeight] = useState(0);

  const [day] = useState(
    ('0' + D.getDate()).slice(-2) +
      '.' +
      ('0' + (D.getMonth() + 1)).slice(-2) +
      '.' +
      D.getFullYear()
  );

  const handleChange = e => {
    setWeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Діспатч на зміну ваги
    setWeightModalOpen(false);
  };

  return (
    <>
      <Modal
        className={s.weightModal}
        isOpen={weightModalOpen}
        onRequestClose={() => setWeightModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          className={s.closeWeigthModal}
          onClick={() => setWeightModalOpen(false)}
        >
          {IoIosCloseCircleOutline()}
        </button>
        <h2 className={s.titleWigth}>Enter your current weight</h2>
        <p className={s.subTitleWigth}>You can record your weight once a day</p>
        <p className={s.subDate}>
          Today <span className={s.calendarDate}>{day}</span>
        </p>
        <form onSubmit={handleSubmit} className={s.formWeight}>
          <input
            type="number"
            placeholder="Enter your weight"
            className={s.inputWeigth}
            onChange={handleChange}
            value={weight}
          />
          <button className={s.confirmWeight}>Confirm</button>
        </form>
      </Modal>
    </>
  );
};

export default СurrentWeightModal;
