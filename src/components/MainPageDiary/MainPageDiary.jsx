import { Link } from 'react-router-dom';
import css from './MainPageDiary.module.css';

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

      <ul>
        {Data.map(({ carbonohidrates, protein, fat }, i) => (
          <li key={i}>
            <div>
              <img src="" alt="meal" />
              <h3>
                {i === 0
                  ? 'Breakfast'
                  : i === 1
                  ? 'Lunch'
                  : i === 2
                  ? 'Dinner'
                  : 'Snack'}
              </h3>
              {carbonohidrates && (
                <ul>
                  <li>
                    <p>
                      Carbonohidrates:
                      <span>{carbonohidrates}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Protein:
                      <span>{protein}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Fat:
                      <span>{fat}</span>
                    </p>
                  </li>
                </ul>
              )}
              {!carbonohidrates && <button>Test</button>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPageDiary;
