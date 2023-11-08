import Modal from 'react-modal';
import { customStyles } from './CustomModalStyle';
Modal.setAppElement('#root');

const CustomModal = ({ onClose, children, isShowModal }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isShowModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};
export default CustomModal;
