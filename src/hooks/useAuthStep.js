import { useSelector, shallowEqual } from 'react-redux';

const useAuthStep = () => useSelector(state => state.auth.step, shallowEqual);
export default useAuthStep;
