import "./Buttons.css";
import DownArrow from "../../assets/icons/DownArrow";

function Buttons() {
  return (
    <div className="container">
      <div className="buttons">
        <button className="button primary">Custom Order</button>
        <button className="button secondary">Existing Inventory</button>
      </div>
      <DownArrow className="downArrow" />
    </div>
  );
}

export default Buttons;
