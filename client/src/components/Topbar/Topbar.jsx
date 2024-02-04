import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { topbarNavigationItems } from "../../routes/const";
import { RiMenu3Fill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import "./Topbar.scss";

Modal.setAppElement("#root");

const Topbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const itemsLength = topbarNavigationItems.length - 1;

  return (
    <div className="topbar-container">
      <div className="logo-and-burger">
        <div className="logo-container" title="See my CV" onClick={openModal}>
          JUSTINA KUNIGONYTE
        </div>
        <div onClick={toggleMenu}>
          <RiMenu3Fill className="hamburger" />
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        <div></div>
        <iframe
          src="Justina Kunigonyte.pdf"
          title="CV"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </Modal>
      <div className={menuIsOpen ? "menu-open" : "menu-closed"}>
        <div className="navigation-items">
          {" "}
          {topbarNavigationItems.map((item, index) => (
            <div key={item.title} className="nav-items-div">
              <Link
                className="nav-item"
                to={item.route}
                onClick={() => setMenuIsOpen(false)}
              >
                {item.title.toUpperCase()}
              </Link>
              {index !== itemsLength && <BsDot className="dot" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
