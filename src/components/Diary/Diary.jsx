import React from 'react';
import icon from '../../assets/icons/symbol-defs.svg';
import s from './Diary.module.css';
import Table from 'components/Table/Table';

const Diary = () => {
  return (
    <div className={s.containerDiary}>
      <div className={s.btnNav}>
      <button className={s.btnDiary}>
      <svg fill="white" width="24" height="24">
        <use href={`${icon}#icon-arrow-right`} />
      </svg>
    </button>
    <h2 className={s.textBtn}>Diary</h2>
      </div>
    <div className={s.tableRow}>
    <div className={s.container}>
    <div className={s.containerLis}>
    <h2 className={s.titleTab}>
      <svg width="36" height="36">
        <use href='../../assets/icons/Illustration/symbol-svg.svg#Snack' ></use>
        </svg>
      Breakfast
    </h2>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>
    <Table />
    </div>
    <div className={s.container}>
    <div className={s.containerLis}>
    <h2 className={s.titleTab}>
      <svg width="36" height="36">
        <use href='../../assets/icons/Illustration/symbol-svg.svg#Snack' ></use>
        </svg>
      Dinner
    </h2>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>
    <Table />
    </div>
    </div>
    <div className={s.tableRow}>
    <div className={s.container}>
      <div className={s.containerLis}>
      <h2 className={s.titleTab}>
      <svg width="36" height="36">
        <use href='../../assets/icons/Illustration/symbol-svg.svg#Snack' ></use>
        </svg>
      Lunch
    </h2>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
      </div>
    <Table />
    </div>
    <div className={s.container}>
    <div className={s.containerLis}>
    <h2 className={s.titleTab}>
      <svg width="36" height="36">
        <use href='../../assets/icons/Illustration/symbol-svg.svg#Snack' ></use>
        </svg>
      Snack
    </h2>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>
    <Table />
    </div>
    </div>
  </div>
  )
};

export default Diary;
