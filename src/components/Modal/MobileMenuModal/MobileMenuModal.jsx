import { customStyles } from 'components/Header/Header';
import React from 'react';
import s from './MobileMenuModal.module.css';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ControlPanel from 'components/ControlPanel/ControlPanel';

const MobileMenuModal = ({ mobileMenuOpen, setMobileMenuOper }) => {
  return (
    <Modal
      className={s.mobileMenuModal}
      isOpen={mobileMenuOpen}
      onRequestClose={() => setMobileMenuOper(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button
        type="button"
        className={s.closeMobileMenuModal}
        onClick={() => setMobileMenuOper(false)}
      >
        {IoIosCloseCircleOutline()}
      </button>
      <ControlPanel />
    </Modal>
  );
};

export default MobileMenuModal;
