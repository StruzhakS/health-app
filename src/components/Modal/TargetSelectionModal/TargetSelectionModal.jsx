import React from 'react';
import Modal from 'react-modal';
import s from './TargetSelectionModal.module.css';
import { customStyles } from 'components/Header/Header';

const TargetSelectionModal = ({ targetModalOpen, setTargetModalOpen }) => {
  return (
    <>
      <Modal
        className={s.userSettingsModal}
        isOpen={targetModalOpen}
        onRequestClose={() => setTargetModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>TargetModal</h3>
      </Modal>
    </>
  );
};

export default TargetSelectionModal;
