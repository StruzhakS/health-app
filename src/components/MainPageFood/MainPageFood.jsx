import css from './MainPageFood.module.css';

const percent = 50;
const percent1 = 35;
const percent2 = 60;
const percent3 = 25;

const MainPageFood = () => {
  return (
    <div>
      <h2 className={css.foodTitle}>Food</h2>
      <div className={css.foodStatisticsContainer}>
        {/* //////////////////////////////// */}
        <div className={css.caloriesScheduleContainer}>
          <svg className={css.caloriesScheduleSvg}>
            <circle cx="77.5" cy="77.5" r="77.5"></circle>
            <circle
              style={{ strokeDashoffset: `${480 - percent * 4.8}` }}
              cx="77.5"
              cy="77.5"
              r="77.5"
            ></circle>
          </svg>
          <p className={css.caloriesScheduleDescription}>
            1360
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
                  style={{ strokeDashoffset: `${135 - percent1 * 1.35}` }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percent1}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Carbonohidrates</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;170
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;34
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
                    strokeDashoffset: `${135 - percent2 * 1.35}`,
                    stroke: '#FFF3B7',
                  }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percent2}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Protein</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;127.5
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;8
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
                    strokeDashoffset: `${135 - percent3 * 1.35}`,
                    stroke: '#B6B6B6',
                  }}
                  cx="22.2"
                  cy="22.2"
                  r="22.2"
                ></circle>
              </svg>
              <p
                className={css.carbohydratesScheduleDescription}
              >{`${percent3}%`}</p>
            </div>
            <div>
              <h3 className={css.scheduleListItemTitle}>Fat</h3>
              <p className={css.scheduleListItemDescription}>
                Goal:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;56
                </span>
              </p>
              <p className={css.scheduleListItemDescription}>
                left:
                <span className={css.scheduleListItemAdditionalDescription}>
                  &nbsp;11.2
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
