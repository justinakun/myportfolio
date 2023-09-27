import { useState } from "react";
import Modal from "react-modal";
import Button from "./../Button/Button";

Modal.setAppElement("#root"); // Set the app root element for accessibility

function CVModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal} text="View CV" variant="contained" />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CV Modal"
      >
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        <iframe
          src="Justina Kunigonyte.pdf"
          title="CV"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </Modal>
    </div>
  );
}

export default CVModal;
