import React, { useState } from 'react';
import css from './UpdateMealModal.module.css';
import Modal from 'react-modal';
import Breakfast from '../../../assets/img/mobile/Breakfast.png';
import Lunch from '../../../assets/img/mobile/Lunch.png';
import Dinner from '../../../assets/img/mobile/Dinner.png';
import Snack from '../../../assets/img/mobile/Snack.png';
import a from '../../../animations/animations.module.css';
import { useDispatch } from 'react-redux';
import { updateUserFoodOperation } from 'redux/user/userOperations';

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
  foodName,
}) => {
  const [form, setForm] = useState({
    foodName,
    carbonohidrates: '',
    protein: '',
    fat: '',
  });

  const [validationText, setValidationText] = useState(false);

  const dispatch = useDispatch();

  const foodSection = selectedMeal.toLowerCase();

  const updateFood = {
    [foodSection]: {
      foodName,
      carbonohidrates: form.carbonohidrates,
      protein: form.protein,
      fat: form.fat,
    },
  };

  const handleClick = () => {
    if (form.carbonohidrates === '' || form.protein === '' || form.fat === '') {
      setValidationText(true);
      return;
    }

    dispatch(updateUserFoodOperation(updateFood));
    setUpdateMealModalOpen(false);
    setValidationText(false);
    setForm({
      foodName,
      carbonohidrates: '',
      protein: '',
      fat: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'carbonohidrates' || name === 'fat' || name === 'protein') {
      if (/^\d{0,3}$/.test(value) && Number(value) <= 999) {
        setForm(prevForm => {
          return { ...prevForm, [name]: value };
        });
      }
      return;
    }
  };

  const handleDefault = e => {
    if (e.key === '-' || e.key === '+') {
      e.preventDefault();
    }
  };

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
        <div className={css.updateFoodForm}>
          <h4 className={css.textBtn}>{foodName}</h4>
          <div className={css.inputWrapper}>
            <input
              placeholder="Carbonoh."
              type="number"
              name="carbonohidrates"
              className={css.recordMealModalInput}
              value={form.carbonohidrates}
              onChange={handleChange}
              onKeyDown={handleDefault}
              required={true}
            />
            <input
              placeholder="Protein"
              type="number"
              name="protein"
              className={css.recordMealModalInput}
              value={form.protein}
              onChange={handleChange}
              onKeyDown={handleDefault}
              required={true}
            />
            <input
              placeholder="Fat"
              name="fat"
              type="number"
              className={css.recordMealModalInput}
              value={form.fat}
              onChange={handleChange}
              onKeyDown={handleDefault}
              required={true}
            />
          </div>
        </div>
        {validationText && (
          <p className={css.validationText}>Please fill in all fields </p>
        )}
        <div className={css.recordMealModalBtnContainer}>
          <button
            className={`${css.recordMealModalConfirmBtn} ${a.hoverYellowBtn}`}
            onClick={handleClick}
            type="button"
          >
            Confirm
          </button>
          <button
            className={`${css.recordMealModalCancelBtn} ${a.hoverCloseBtn}`}
            type="button"
            onClick={() => {
              setUpdateMealModalOpen(false);
              setValidationText(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateMealModal;
