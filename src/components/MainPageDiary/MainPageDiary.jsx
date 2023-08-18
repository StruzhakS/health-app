import { Link } from 'react-router-dom';
import css from './MainPageDiary.module.css';

import Icons from '../../assets/icons/symbol-defs.svg';
import Breakfast from '../../assets/img/mobile/Breakfast.png';
import Lunch from '../../assets/img/mobile/Lunch.png';
import Dinner from '../../assets/img/mobile/Dinner.png';
import Snack from '../../assets/img/mobile/Snack.png';

const Data = [
  { carbonohidrates: 60, protein: 40, fat: 20 },
  { carbonohidrates: 110, protein: 79.5, fat: 24.8 },
  {},
  {},
];

const MainPageDiary = () => {
  return (
    <section className={css.DiarySection}>
      <div className={css.DiaryTitleContainer}>
        <h2 className={css.DiaryTitle}>Daily goal</h2>
        <Link className={css.DiaryTitleLink} to={`/diary`}>
          See more
        </Link>
      </div>

      <ul className={css.mealList}>
        {Data.map(({ carbonohidrates, protein, fat }, i) => (
          <li className={css.mealListItem} key={i}>
            <div className={css.mealTitle}>
              <img
                width="36px"
                height="36px"
                src={
                  i === 0
                    ? Breakfast
                    : i === 1
                    ? Lunch
                    : i === 2
                    ? Dinner
                    : Snack
                }
                alt="meal"
              />
              <h3 className={css.mealListItemTitle}>
                {i === 0
                  ? 'Breakfast'
                  : i === 1
                  ? 'Lunch'
                  : i === 2
                  ? 'Dinner'
                  : 'Snack'}
              </h3>
            </div>
            {carbonohidrates && (
              <ul className={css.mealAdditionalInfoList}>
                <li className={css.mealAdditionalInfoListItem}>
                  <p className={css.mealAdditionalInfoDescription}>
                    Carbonohidrates:
                    <span className={css.mealAdditionalInfoValue}>
                      &nbsp;{carbonohidrates}
                    </span>
                  </p>
                </li>
                <li className={css.mealAdditionalInfoListItem}>
                  <p className={css.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={css.mealAdditionalInfoValue}>
                      &nbsp;{protein}
                    </span>
                  </p>
                </li>
                <li className={css.mealAdditionalInfoListItem}>
                  <p className={css.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={css.mealAdditionalInfoValue}>
                      &nbsp;{fat}
                    </span>
                  </p>
                </li>
              </ul>
            )}
            {!carbonohidrates && (
              <button className={css.recordMealButton}>
                <svg width="16px" height="16px" className={css.recordMealIcon}>
                  <use xlinkHref={`${Icons}#add`} />
                </svg>
                Record your meal
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPageDiary;
