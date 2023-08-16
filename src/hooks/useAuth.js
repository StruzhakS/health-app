import { useSelector, shallowEqual } from 'react-redux';

export const useAuth = () => {
  return {
    user: useSelector(state => state.auth.user, shallowEqual),
    step: useSelector(state => state.auth.step, shallowEqual),
  };
};
