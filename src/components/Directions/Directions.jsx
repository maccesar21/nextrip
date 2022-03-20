import React from 'react';
import PropTypes from 'prop-types';

const Directions = (props) => {  
  return (
    <div className="metro-transit--routes directions_select_menu">
    {
      props.selectedMetroRoute !== "" ? 
      <select className="metro-transit--routes_dropdown" 
        data-testid="direction-select"
        onChange={(evt) => {props.getMetroRouteStops(evt.target.value)}}>
        <option value="">Select direction</option>
        {props.metroDirections && props.metroDirections.map(direction => (
          <option 
          data-testid="direction-options"
            key={direction.direction_id} 
            value={direction.direction_id}>
              {direction.direction_name}
          </option>
        ))}
      </select>
      : null
    }
    </div>
  )
}

Directions.propTypes = {
  selectedMetroRoute: PropTypes.string,
  getMetroRouteStops: PropTypes.func,
  metroDirections: PropTypes.array
};

Directions.defaultProps = {
  selectedMetroRoute: "",
  metroDirections: [],
};

export default Directions;
