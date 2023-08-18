import React, { useState } from 'react';
import Modal from 'react-modal';
import css from './WaterIntakeModal.module.css';

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'hidden',
  },
};

const WaterIntakeModal = ({
  waterIntakeModalOpen,
  setWaterIntakeModalOpen,
}) => {
  const [milliliters, setMilliliters] = useState(0);

  const handleSubmit = evt => {
    evt.preventDefault();
    document.body.style.overflow = 'auto';
    setWaterIntakeModalOpen(false);
  };

  const onCloseButtonClick = () => {
    document.body.style.overflow = 'auto';
    setWaterIntakeModalOpen(false);
  };

  return (
    <Modal
      className={css.waterIntakeModal}
      isOpen={waterIntakeModalOpen}
      onRequestClose={onCloseButtonClick}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className={css.waterIntakeModalTitle}>Add water intake</h3>

      <form className={css.waterIntakeModalForm}>
        <label className={css.waterIntakeModalFormLabel}>
          How much water
          <input
            placeholder="Enter milliliters"
            className={css.waterIntakeModalFormInput}
            type="number"
            value={milliliters}
            onChange={evt => setMilliliters(evt.target.value)}
          />
        </label>
        <button
          className={css.waterIntakeModalFormButton}
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </form>

      <button
        type="button"
        className={css.closeWaterIntakeModal}
        onClick={onCloseButtonClick}
      >
        Cancel
      </button>
    </Modal>
  );
};

export default WaterIntakeModal;
