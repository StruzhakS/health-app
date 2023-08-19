import React, { useState } from 'react';
import Modal from 'react-modal';
import css from './RecordMealModal.module.css';

import Icons from '../../../assets/icons/symbol-defs.svg';
import Breakfast from '../../../assets/img/mobile/Breakfast.png';
import Lunch from '../../../assets/img/mobile/Lunch.png';
import Dinner from '../../../assets/img/mobile/Dinner.png';
import Snack from '../../../assets/img/mobile/Snack.png';

const imageObject = { Breakfast, Lunch, Dinner, Snack };

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'scroll',
  },
};

const RecordMealModal = ({
  recordMealModalOpen,
  setRecordMealModalOpen,
  selectedMeal,
}) => {
  const [numberOfItems, setNumberOfItems] = useState([0]);

  const [productNameArr, setProductNameArr] = useState(['']);
  const [carbonohidratesArr, setCarbonohidratesArr] = useState([0]);
  const [proteinArr, setProteinArr] = useState([0]);
  const [fatArr, setFatArr] = useState([0]);

  const onAddMoreButtonClick = () => {
    const newValue = numberOfItems.length;
    setNumberOfItems(prev => [...prev, newValue]);
    setProductNameArr(prev => [...prev, '']);
    setCarbonohidratesArr(prev => [...prev, 0]);
    setProteinArr(prev => [...prev, 0]);
    setFatArr(prev => [...prev, 0]);
  };

  const onCloseButtonClick = () => {
    document.body.style.overflow = 'auto';
    setNumberOfItems([0]);
    setRecordMealModalOpen(false);
    setProductNameArr(['']);
    setCarbonohidratesArr([0]);
    setProteinArr([0]);
    setFatArr([0]);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    document.body.style.overflow = 'auto';

    const sendedObj = {
      meal: selectedMeal,
      carbonohidrates: carbonohidratesArr,
      fat: fatArr,
      protein: proteinArr,
    };
    console.log(sendedObj);

    onCloseButtonClick();
  };

  const onNameChange = (evt, index) => {
    const string = evt.target.value;
    setProductNameArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onCarbonohidratesChange = (evt, index) => {
    const string = evt.target.value;
    setCarbonohidratesArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onProteinChange = (evt, index) => {
    const string = evt.target.value;
    setProteinArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onFatChange = (evt, index) => {
    const string = evt.target.value;
    setFatArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  return (
    <Modal
      className={css.recordMealModal}
      isOpen={recordMealModalOpen}
      onRequestClose={onCloseButtonClick}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className={css.recordMealModalTitle}>Record your meal</h3>
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
        <ul className={css.recordMealModalInputsList}>
          {numberOfItems.map((el, i) => (
            <li key={el} className={css.recordMealModalInputsListItem}>
              <input
                placeholder="The name of the product or dish"
                type="text"
                className={css.recordMealModalInput}
                value={productNameArr[i]}
                onChange={evt => onNameChange(evt, i)}
              />
              <input
                placeholder="Carbonoh."
                type="number"
                className={css.recordMealModalInput}
                value={carbonohidratesArr[i]}
                onChange={evt => onCarbonohidratesChange(evt, i)}
              />
              <input
                placeholder="Protein"
                type="number"
                className={css.recordMealModalInput}
                value={proteinArr[i]}
                onChange={evt => onProteinChange(evt, i)}
              />
              <input
                placeholder="Fat"
                type="number"
                className={css.recordMealModalInput}
                value={fatArr[i]}
                onChange={evt => onFatChange(evt, i)}
              />
            </li>
          ))}
        </ul>
        <button
          className={css.recordMealModalAddMoreBtn}
          type="button"
          onClick={onAddMoreButtonClick}
        >
          <svg width="16px" height="16px" className={css.svgPlus}>
            <use xlinkHref={`${Icons}#add`} />
          </svg>
          Add more
        </button>
        <div className={css.recordMealModalBtnContainer}>
          <button
            className={css.recordMealModalConfirmBtn}
            onClick={handleSubmit}
            type="submit"
          >
            Confirm
          </button>
          <button
            className={css.recordMealModalCancelBtn}
            type="button"
            onClick={onCloseButtonClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RecordMealModal;
