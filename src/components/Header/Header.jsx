import React from 'react';
import { useSelector } from 'react-redux';
// import Modal from 'react-modal';
import AuthHeader from './AuthHeader';
import UnAuthHeader from './UnAuthHeader';

export const customStyles = {
  overlay: {
    background: 'transparent',
    overflow: 'hidden',
  },
};

// Modal.setAppElement('#root');

const Header = () => {
  const isAuth = useSelector(state => state.auth?.user?.requirements);

  return isAuth ? <AuthHeader /> : <UnAuthHeader />;
};

export default Header;
