import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="menu-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
       Menu 
      {show && <div className={`menu-items`}>
        <div className="menu-item">Item 1</div>
        <div className="menu-item">Item 2</div>
        <div className="menu-item">Item 3</div>
      </div>}
    </div>
  );
};

export default Menu;
