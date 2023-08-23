import React from 'react';
import s from './Table.module.css';
import { PiPencilLineLight } from 'react-icons/pi';
import { BsPlus } from 'react-icons/bs';
import { useState } from 'react';
import RecordMealModal from 'components/Modal/RecordMealModal/RecordMealModal';

const Table = () => {
  const [recordMealModalOpen, setRecordMealModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');

  const onRecordMealButtonClick = evt => {
    setSelectedMeal(evt.target.name);
    setRecordMealModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <RecordMealModal
        selectedMeal={selectedMeal}
        recordMealModalOpen={recordMealModalOpen}
        setRecordMealModalOpen={setRecordMealModalOpen}
      />
      <table className={s.table}>
        <tbody>
          <tr>
            <th className={s.firstTd}>1</th>
            <td className={s.secondTd}>English breakfast</td>
            <td className={s.allTd}>11.2</td>
            <td className={s.allTd}>3.6</td>
            <td className={s.allTd}>12</td>
            <td className={s.btn}>
              <button className={s.btnEdit}>
                <PiPencilLineLight size="1rem" />
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th className={s.firstTd}>2</th>
            <td className={s.secondTd}>
              <button className={s.btnAdd} onClick={onRecordMealButtonClick}>
                <BsPlus size="1rem" />
                Record your meal
              </button>
            </td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.btn}></td>
          </tr>
          <tr>
            <th className={s.firstTd}>3</th>
            <td className={s.secondTd}></td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.btn}></td>
          </tr>
          <tr>
            <th className={s.firstTd}>4</th>
            <td className={s.secondTd}></td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.allTd}></td>
            <td className={s.btn}></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
