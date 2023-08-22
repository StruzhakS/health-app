import { useSelector } from 'react-redux';
import css from './MainPageFood.module.css';
import { leftCount, percentageCount } from 'helpers/percentageCount';

const MainPageFood = () => {
  const goalCalories = useSelector(state => state.user.defaultCalories);
  const goalFat = useSelector(state => state.user.goalFat);
  const goalCarbo = useSelector(state => state.user.goalCarbo);
  const goalProtein = useSelector(state => state.user.goalProtein);

  const calories = useSelector(state => state.user.calories);
  const fat = useSelector(state => state.user.fat);
  const carbo = useSelector(state => state.user.carbo);
  const protein = useSelector(state => state.user.protein);

  return (
    <div>
      <h2 className={css.foodTitle}>Food</h2>
      <div className={css.foodStatisticsContainer}>
        {/* //////////////////////////////// */}
        <div className={css.caloriesScheduleContainer}>
          <svg className={css.caloriesScheduleSvg}>
            <circle cx="77.5" cy="77.5" r="77.5"></circle>
            <circle
              style={{
                strokeDashoffset: `${
                  480 - percentageCount(goalCalories, calories) * 4.8
                }`,
              }}
              cx="77.5"
              cy="77.5"
              r="77.5"
            ></circle>
          </svg>
          <p className={css.caloriesScheduleDescription}>
            {calories}
            <span className={css.caloriesScheduleAdditionDescription}>
              calories
            </span>
          </p>
        </div>
        {/* /////////////////////////// */}
        <ul className={css.scheduleList}>
          <li className={css.scheduleListItem}>
            <div className={css.carbohydratesScheduleContainer}>
              <svg className={css.carbohydratesScheduleSvg}>
                <circle cx="22.2" cy="22.2" r="22.2"></circle>
                <circle
                  style={{
                    strokeDashoffset: `${
                      135 - percentageCount(goalCarbo, carbo) * 1.35
                    }`,
                  }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percentageCount(goalCarbo, carbo)}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Carbonohidrates</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{goalCarbo}
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{leftCount(goalCarbo, carbo)}
                </span>
              </p>
            </div>
          </li>
          <li className={css.scheduleListItem}>
            <div className={css.carbohydratesScheduleContainer}>
              <svg className={css.carbohydratesScheduleSvg}>
                <circle cx="22.2" cy="22.2" r="22.2"></circle>
                <circle
                  style={{
                    strokeDashoffset: `${
                      135 - percentageCount(goalProtein, protein) * 1.35
                    }`,
                    stroke: '#FFF3B7',
                  }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percentageCount(goalProtein, protein)}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Protein</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{goalProtein}
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{leftCount(goalProtein, protein)}
                </span>
              </p>
            </div>
          </li>
          <li className={css.scheduleListItem}>
            <div className={css.carbohydratesScheduleContainer}>
              <svg className={css.carbohydratesScheduleSvg}>
                <circle cx="22.2" cy="22.2" r="22.2"></circle>
                <circle
                  style={{
                    strokeDashoffset: `${
                      135 - percentageCount(goalFat, fat) * 1.35
                    }`,
                    stroke: '#B6B6B6',
                  }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percentageCount(goalFat, fat)}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Fat</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{goalFat}
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;{leftCount(goalFat, fat)}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPageFood;
