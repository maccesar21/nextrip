import React from 'react';
import PropTypes from 'prop-types';

const Stops = (props) => {
  return (
    <div className="metro-transit--routes">
      {
        props.selectedMetroRouteStop !== "" ? 
        <select className="metro-transit--routes_dropdown"
          onChange={(evt) => {props.getMetroRouteDepartures(evt.target.value)}}>
          <option value="">Select stop</option>
          {props.metroRouteStops && props.metroRouteStops.map(stop => (
            <option 
              key={stop.place_code} 
              value={stop.place_code}>
                {stop.description}
            </option>
          ))}
        </select>
        : null
      }
    </div>
  )
}

Stops.propTypes = {
  selectedMetroRouteStop: PropTypes.string,
  getMetroRouteDepartures: PropTypes.func,
  metroRouteStops: PropTypes.array
};

Stops.defaultProps = {
  selectedMetroRouteStop: "",
  metroRouteStops: []
};

export default Stops;
