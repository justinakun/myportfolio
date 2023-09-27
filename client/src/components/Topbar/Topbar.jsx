import { topbarNavigationItems } from "../../routes/const";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import "./Topbar.scss";

const Topbar = () => {
  const itemsLength = topbarNavigationItems.length - 1;
  return (
    <div className="topbar-container">
      <div className="logo-container">JUSTINA KUNIGONYTE</div>
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
