import React from 'react';
import s from './Diary.module.css';
// import Table from 'components/Table/Table';
// import TableMobile from 'components/Table/TableMobile';
// import { useMediaQuery } from 'react-responsive';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import RecordMealModal from 'components/Modal/RecordMealModal/RecordMealModal';
import UpdateMealModal from 'components/Modal/UpdateMealModal/UpdateMealModal';
import DiaryTable from 'components/Table/Table';

const Diary = () => {
  const [recordMealModalOpen, setRecordMealModalOpen] = useState(false);
  const [updateMealModalOpen, setUpdateMealModalOpen] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState('');
  // const isMobile = useMediaQuery({ maxWidth: 833 });
  const breakfast = useSelector(state => state.user.breakfast);
  const lunch = useSelector(state => state.user.lunch);
  const dinner = useSelector(state => state.user.dinner);
  const snack = useSelector(state => state.user.snack);

  const [foodName, setFoodName] = useState('');
  const onRecordMealButtonClick = evt => {
    setSelectedMeal(evt.target.name);
    setRecordMealModalOpen(true);
  };

  const onUpdateMealButtonClick = meal => {
    setSelectedMeal(meal);
    setUpdateMealModalOpen(true);
  };

  const mealTypes = [
    { type: 'Breakfast', data: breakfast },
    { type: 'Dinner', data: dinner },
    { type: 'Lunch', data: lunch },
    { type: 'Snack', data: snack },
  ];

  const renderedDiaryTables = mealTypes.map(({ type, data }) => (
    <DiaryTable
      key={type}
      mealType={type}
      mealData={data}
      onRecordMealButtonClick={onRecordMealButtonClick}
      onUpdateMealButtonClick={onUpdateMealButtonClick}
      setFoodName={setFoodName}
    />
  ));

  return (
    <div className={s.containerDiary}>
      <RecordMealModal
        selectedMeal={selectedMeal}
        recordMealModalOpen={recordMealModalOpen}
        setRecordMealModalOpen={setRecordMealModalOpen}
      />
      <UpdateMealModal
        selectedMeal={selectedMeal}
        updateMealModalOpen={updateMealModalOpen}
        setUpdateMealModalOpen={setUpdateMealModalOpen}
        foodName={foodName}
      />
      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={'/'}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <h2 className={s.textBtn}>Diary</h2>
      </div>
      <div className={s.diary}>{renderedDiaryTables}</div>
    </div>
  );
};

export default Diary;
