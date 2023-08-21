import React, { useState } from 'react';
import Modal from 'react-modal';
import css from './WaterIntakeModal.module.css';
import { useDispatch } from 'react-redux';
import { updateWaterOperations } from 'redux/user/userOperations';

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

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    if (milliliters <= 0) {
      return;
    }
    document.body.style.overflow = 'auto';
    setWaterIntakeModalOpen(false);
    setMilliliters(0);
    dispatch(updateWaterOperations({ water: milliliters }));
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
