import React from 'react';
import icon from '../../assets/icons/symbol-defs.svg';
import s from './Diary.module.css';
import Table from 'components/Table/Table';
import TableMobile from 'components/Table/TableMobile';
import { useMediaQuery } from 'react-responsive';

const Diary = () => {

const isMobile = useMediaQuery({maxWidth: 833});


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
      <div className={s.foodIMG}>
      <img src={require('../../assets/icons/food/Breakfast.png')} alt='breakfast' width='32px' height='32px'/>
    <h2 className={s.titleTab}>
      Breakfast
    </h2>
      </div>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>

    {!isMobile ? (<Table />) : (<TableMobile />)}
  
    </div>
    <div className={s.container}>
    <div className={s.containerLis}>
    <div className={s.foodIMG}>
    <img src={require('../../assets/icons/food/Dinner.png')} alt='dinner' width='32px' height='32px'/>
    <h2 className={s.titleTab}>
      Dinner
    </h2>
    </div>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>
    
    {!isMobile ? (<Table />) : (<TableMobile />)}

    </div>
    </div>
    <div className={s.tableRow}>
    <div className={s.container}>
      <div className={s.containerLis}>
      <div className={s.foodIMG}>
      <img src={require('../../assets/icons/food/Lunch.png')} alt='lunch' width='32px' height='32px'/>
      <h2 className={s.titleTab}>
      Lunch
    </h2>
    </div>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
      </div>
  
      {!isMobile ? (<Table />) : (<TableMobile />)}

    </div>
    <div className={s.container}>
    <div className={s.containerLis}>
    <div className={s.foodIMG}>
    <img src={require('../../assets/icons/food/Snack.png')} alt='snack' width='32px' height='32px'/>
    <h2 className={s.titleTab}>
      Snack
    </h2>
    </div>
    <ul className={s.listTab}>
      <li className={s.itemTab}>Carbonohidrates: 0</li>
      <li className={s.itemTab}>Protein: 0</li>
      <li className={s.itemTab}>Fat: 0</li>
    </ul>
    </div>
    
    {!isMobile ? (<Table />) : (<TableMobile />)}
    
    </div>
    </div>
  </div>
  )
};

export default Diary;
