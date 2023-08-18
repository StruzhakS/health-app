import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component, redirect = '/' }) => {
  const isAuth = useSelector(state => state.auth?.token);
  return !isAuth ? component : <Navigate to={redirect} />;
};

export default PublicRoute;
