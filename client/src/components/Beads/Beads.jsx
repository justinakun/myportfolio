import { RiLightbulbFlashLine, RiComputerLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import "./Beads.scss";

const Beads = () => {
  return (
    <div className="beads-container">
      <RiLightbulbFlashLine className="bead-icon" />
      <div className="bead-line"></div>
      <RiComputerLine className="bead-icon" />
      <div className="bead-line"></div>
      <CgWebsite className="bead-icon" />
    </div>
  );
};

export default Beads;
