import {useState} from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  const [active, setActive] = useState(true);

  const toggleActiveState = (action) => {
    setActive(!active);
    props.setSearchAction(action);
    props.resetMetroRouteMenus();
  };

  return (
    <div className="metro-transit--content">
        <h1 className="metro-transit--heading">Real-time Departures</h1>
        <div className="metro-transit--route_tabs">
          <button 
            className="metro-transit--route_tabType" 
            data-active={active}
            disabled={active}
            onClick={() => toggleActiveState("routes")}>By route</button>
          <button 
            className="metro-transit--route_tabType" 
            data-active={!active}
            disabled={!active}
            onClick={() => toggleActiveState("stops")}>By stop #</button>
        </div>
        {props.children}
    </div>
  );
}

Layout.propTypes = {
  setSearchAction: PropTypes.func,
  resetMetroRouteMenus: PropTypes.func
};

export default Layout;
