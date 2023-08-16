import React from 'react';
import css from './Dashboard.module.css';

import sprite from '../../assets/icons/symbol-defs.svg';

const Dashboard = () => {
    return <section className={css.dashboardSection}>
        <h1 className={css.dashboardTitle}>Dashboard</h1>
        <div>
            <button>
                <svg>
                    <use></use>
                </svg>
            </button>
            <button>Last month</button>
        </div>
  </section>;
};

export default Dashboard;
