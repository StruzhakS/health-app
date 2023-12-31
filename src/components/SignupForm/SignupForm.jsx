import Activity from 'components/Activity/Activity';
import BodyParams from 'components/BodyParams/BodyParams';
import Gender from 'components/Gender/Gender';
import Goal from 'components/Goals/Goals';
import React from 'react';
import { useParams } from 'react-router-dom';
import s from './SignupForm.module.css';

const SignupForm = () => {
  const { params } = useParams();

  return (
    <div className={s.container}>
      {(() => {
        switch (params) {
          case 'goal':
            return <Goal />;

          case 'gender':
            return <Gender />;

          case 'bodyparams':
            return <BodyParams />;
          case 'activity':
            return <Activity />;

          default:
            break;
        }
      })()}
    </div>
  );
};

export default SignupForm;
