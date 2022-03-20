import React from 'react';
import PropTypes from 'prop-types';

const Routes = (props) => {
  return (
    <div className="metro-transit--routes">
      <select 
        className="metro-transit--routes_dropdown"
        data-testid="dropdown"
        onChange={(evt) => {props.getMetroRouteDirections(evt.target.value)}}>
        <option value="">Select route</option>
        {
          props.metroRoutes && props.metroRoutes.map((route, index) => (
            <option 
              data-testid="select-option"
              key={index} 
              value={route.route_id}>
                {route.route_label}
            </option>
          ))
        }
      </select>
    </div>
  )
}

Routes.propTypes = {
  getMetroRouteDirections: PropTypes.func,
  metroRoutes: PropTypes.array
};

Routes.defaultProps = {
  metroRoutes: []
};

export default Routes;
