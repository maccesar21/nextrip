import { useState } from "react";

const Menu = () => {
  const [activeState, setActiveState] = useState(false);

  return (
    <div className="metro-transit--navigation">
      <div className="metro-transit--logo">
        <img className="metro-transit--logo_img" src="https://www.metrotransit.org/img/MetroTransitLogo.svg" alt="Metro transit logo" />
      </div>
      <button className="metro-transit--mobile_menu"
        data-active={activeState}
        onClick={() => setActiveState(!activeState)}>Menu</button>
      <nav className="metro-transit--navigation_menu"
        data-active={activeState}>
        <li className="metro-transit--navigation_menuItem">
          <a href="/" className="metro-transit--navigation_menuAnchor">Trip Tools</a>
        </li>
        <li className="metro-transit--navigation_menuItem">
          <a href="/" className="metro-transit--navigation_menuAnchor">Schedules &amp; Maps</a>
        </li>
        <li className="metro-transit--navigation_menuItem">
          <a href="/" className="metro-transit--navigation_menuAnchor">Fares</a>
        </li>
        <li className="metro-transit--navigation_menuItem">
          <a href="/" className="metro-transit--navigation_menuAnchor">More</a>
        </li>
        <li className="metro-transit--navigation_menuItem">
          <a href="/" className="metro-transit--navigation_menuAnchor">Help</a>
        </li>
      </nav>
    </div>
  )
}

export default Menu;