import React from 'react';
import s from './Diary.module.css';
import Table from 'components/Table/Table';
import TableMobile from 'components/Table/TableMobile';
import { useMediaQuery } from 'react-responsive';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Diary = () => {
  const isMobile = useMediaQuery({ maxWidth: 833 });

  return (
    <div className={s.containerDiary}>
      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={`/mainpage`}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <h2 className={s.textBtn}>Diary</h2>
      </div>
      <div className={s.tableRow}>
        <div className={s.container}>
          <div className={s.containerLis}>
            <div className={s.foodIMG}>
              <img
                src={require('../../assets/icons/food/Breakfast.png')}
                alt="breakfast"
                width="32px"
                height="32px"
              />
              <h2 className={s.titleTab}>Breakfast</h2>
            </div>
            <ul className={s.listTab}>
              <li className={s.itemTab}>Carbonohidrates: 0</li>
              <li className={s.itemTab}>Protein: 0</li>
              <li className={s.itemTab}>Fat: 0</li>
            </ul>
          </div>

          {!isMobile ? <Table /> : <TableMobile />}
        </div>
        <div className={s.container}>
          <div className={s.containerLis}>
            <div className={s.foodIMG}>
              <img
                src={require('../../assets/icons/food/Dinner.png')}
                alt="dinner"
                width="32px"
                height="32px"
              />
              <h2 className={s.titleTab}>Dinner</h2>
            </div>
            <ul className={s.listTab}>
              <li className={s.itemTab}>Carbonohidrates: 0</li>
              <li className={s.itemTab}>Protein: 0</li>
              <li className={s.itemTab}>Fat: 0</li>
            </ul>
          </div>

          {!isMobile ? <Table /> : <TableMobile />}
        </div>
      </div>
      <div className={s.tableRow}>
        <div className={s.container}>
          <div className={s.containerLis}>
            <div className={s.foodIMG}>
              <img
                src={require('../../assets/icons/food/Lunch.png')}
                alt="lunch"
                width="32px"
                height="32px"
              />
              <h2 className={s.titleTab}>Lunch</h2>
            </div>
            <ul className={s.listTab}>
              <li className={s.itemTab}>Carbonohidrates: 0</li>
              <li className={s.itemTab}>Protein: 0</li>
              <li className={s.itemTab}>Fat: 0</li>
            </ul>
          </div>

          {!isMobile ? <Table /> : <TableMobile />}
        </div>
        <div className={s.container}>
          <div className={s.containerLis}>
            <div className={s.foodIMG}>
              <img
                src={require('../../assets/icons/food/Snack.png')}
                alt="snack"
                width="32px"
                height="32px"
              />
              <h2 className={s.titleTab}>Snack</h2>
            </div>
            <ul className={s.listTab}>
              <li className={s.itemTab}>Carbonohidrates: 0</li>
              <li className={s.itemTab}>Protein: 0</li>
              <li className={s.itemTab}>Fat: 0</li>
            </ul>
          </div>

          {!isMobile ? <Table /> : <TableMobile />}
        </div>
      </div>
    </div>
  );
};

export default Diary;
