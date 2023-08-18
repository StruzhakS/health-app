import Activity from 'components/Activity/Activity';
import BodyParams from 'components/BodyParams/BodyParams';
import Gender from 'components/Gender/Gender';
import Goals from 'components/Goals/Goals';
import React from 'react';
import { useParams } from 'react-router-dom';

const SignupForm = () => {
  const { params } = useParams();

  return (
    <>
      {(() => {
        switch (params) {
          case 'goal':
            return <Goals />;

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
    </>
  );
};

export default SignupForm;
