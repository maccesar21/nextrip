import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Departures = (props) => {
  useEffect(() => {
    if(props.selectedMetroRouteDepartures) {
      const departuresTable = document.querySelector('.metro-transit--departures_table');
      departuresTable.scrollIntoView();
    }
  }, [props.selectedMetroRouteDepartures]);

  return (
    props.selectedMetroRouteDepartures && 
    <div className="metro-transit--departures">
      <div className="metro-transit--departures_heading">
        {
          props.selectedMetroRouteDepartures?.stops?.map(stop => (
            <React.Fragment key={stop.stop_id}>
              <h3 className="metro-transit--departures_stop">{stop.description}</h3>
              <span className="metro-transit--departures_stopNum">Stop: #{stop.stop_id}</span>
            </React.Fragment>
          ))
        }
      </div>
      
      <div className="metro-transit--departures_table">
        <ul className="metro-transit--departures_header">
          <li className="metro-transit--departures_item">Route</li>
          <li className="metro-transit--departures_item">Destination</li>
          <li className="metro-transit--departures_item">Departs</li>
        </ul>
        {
          props.selectedMetroRouteDepartures.departures.length ? props.selectedMetroRouteDepartures.departures?.map(departure => (
            <ul key={departure.trip_id} className="metro-transit--departures_information">
              <li className="metro-transit--departures_item">{departure.route_short_name}</li>
              <li className="metro-transit--departures_item">{departure.description}</li>
              <li className="metro-transit--departures_item">
                {departure.actual && <img className="metro-transit--departures_broadcast" src='https://www.metrotransit.org/img/svg/broadcast-blue.svg' alt='Broadcast icon' />}
                {departure.departure_text}
              </li>
            </ul>
          ))
          : <p className="metro-transit--departures_item">No departures at this time</p>
        }
      </div>
    </div>
  )
}

Departures.propTypes = {
  selectedMetroRouteDepartures: PropTypes.object
};

Departures.defaultProps = {
  selectedMetroRouteDepartures: {}
};

export default Departures;
