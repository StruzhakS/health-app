import React from 'react';
import s from './СurrentWeightModal.module.css';
import { customStyles } from 'components/Header/Header';
import Modal from 'react-modal';

const СurrentWeightModal = ({ weightModalOpen, setWeightModalOpen }) => {
  return (
    <>
      <Modal
        className={s.weightModal}
        isOpen={weightModalOpen}
        onRequestClose={() => setWeightModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>WeightModal</h3>
      </Modal>
    </>
  );
};

export default СurrentWeightModal;
