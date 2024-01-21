import { useState } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import Modal from "react-modal";
import "./Topbar.scss";
import { topbarNavigationItems } from "../../routes/const";

Modal.setAppElement("#root");

const Topbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const itemsLength = topbarNavigationItems.length - 1;

  return (
    <div className="topbar-container">
      <div className="logo-container" title="See my CV" onClick={openModal}>
        JUSTINA KUNIGONYTE
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        <iframe
          src="Justina Kunigonyte.pdf"
          title="CV"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </Modal>
      <div className="navigation-items">
        {topbarNavigationItems.map((item, index) => (
          <div key={item.title} className="nav-items-div">
            <Link className="nav-item" to={item.route}>
              {item.title.toUpperCase()}
            </Link>
            {index !== itemsLength && <BsDot className="dot" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
