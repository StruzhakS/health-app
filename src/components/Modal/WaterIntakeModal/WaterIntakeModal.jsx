import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import css from './WaterIntakeModal.module.css';
import a from '../../../animations/animations.module.css';
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
  const [milliliters, setMilliliters] = useState('');
  const [disableConfirm, setDisableConfirm] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (milliliters <= 0) {
      setDisableConfirm(true);
      return;
    }
    setDisableConfirm(false);
  }, [milliliters]);

  const onInputChange = evt => {
    const number = evt.target.value.replace(/[^\d]/g, '');

    setMilliliters(number);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    document.body.style.overflow = 'auto';
    setWaterIntakeModalOpen(false);
    setMilliliters('');
    dispatch(updateWaterOperations({ water: milliliters }));
  };

  const onCloseButtonClick = () => {
    document.body.style.overflow = 'auto';
    setWaterIntakeModalOpen(false);
  };

  return (
    <Modal
      className={`${css.waterIntakeModal} ${a.scaleInCenter}`}
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
            type="text"
            maxlength="4"
            value={milliliters}
            onChange={onInputChange}
          />
        </label>
        <button
          className={`${css.waterIntakeModalFormButton} ${a.hoverYellowBtn}`}
          onClick={handleSubmit}
          disabled={disableConfirm}
        >
          Confirm
        </button>
      </form>

      <button
        type="button"
        className={`${css.closeWaterIntakeModal} ${a.hoverCloseBtn}`}
        onClick={onCloseButtonClick}
      >
        Cancel
      </button>
    </Modal>
  );
};

export default WaterIntakeModal;
