import React from 'react';
import css from './UpdateMealModal.module.css';
import Modal from 'react-modal';
import Breakfast from '../../../assets/img/mobile/Breakfast.png';
import Lunch from '../../../assets/img/mobile/Lunch.png';
import Dinner from '../../../assets/img/mobile/Dinner.png';
import Snack from '../../../assets/img/mobile/Snack.png';
import Icons from '../../../assets/icons/symbol-defs.svg';
import a from '../../../animations/animations.module.css';

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'scroll',
  },
};
const imageObject = { Breakfast, Lunch, Dinner, Snack };

const UpdateMealModal = ({
  updateMealModalOpen,
  setUpdateMealModalOpen,
  selectedMeal,
}) => {
  return (
    <Modal
      className={`${css.recordMealModal} ${a.scaleInCenter}`}
      isOpen={updateMealModalOpen}
      onRequestClose={() => setUpdateMealModalOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className={css.recordMealModalTitle}>Edit your meal</h3>
      <div className={css.recordMealModalMealImageContainer}>
        <img
          width="32px"
          height="32px"
          src={imageObject[selectedMeal]}
          alt="meal"
        />
        <p className={css.recordMealModalMeal}>{selectedMeal}</p>
      </div>
      <form>
        <input
          placeholder="The name of the product or dish"
          type="text"
          className={css.recordMealModalInput}
          //   value={productNameArr[i]}
          //   onChange={evt => onNameChange(evt, i)}
        />
        <input
          placeholder="Carbonoh."
          type="number"
          className={css.recordMealModalInput}
          //   value={carbonohidratesArr[i]}
          //   onChange={evt => onCarbonohidratesChange(evt, i)}
        />
        <input
          placeholder="Protein"
          type="number"
          className={css.recordMealModalInput}
          //   value={proteinArr[i]}
          //   onChange={evt => onProteinChange(evt, i)}
        />
        <input
          placeholder="Fat"
          type="number"
          className={css.recordMealModalInput}
          //   value={fatArr[i]}
          //   onChange={evt => onFatChange(evt, i)}
        />

        <div className={css.recordMealModalBtnContainer}>
          <button
            className={`${css.recordMealModalConfirmBtn} ${a.hoverYellowBtn}`}
            // onClick={handleSubmit}
            type="submit"
            // disabled={submitButtonDisabled}
          >
            Confirm
          </button>
          <button
            className={`${css.recordMealModalCancelBtn} ${a.hoverCloseBtn}`}
            type="button"
            onClick={() => setUpdateMealModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateMealModal;
