import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";
import PropTypes from "prop-types";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Topbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
