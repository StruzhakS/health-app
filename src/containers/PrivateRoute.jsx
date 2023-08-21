import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component, redirect = '/signin' }) => {
  const isAuth = useSelector(state => state.auth?.user?.requirements);
  return isAuth ? component : <Navigate to={redirect} />;
};

export default PrivateRoute;
