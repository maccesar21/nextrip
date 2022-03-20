import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [stopNumber, setStopNumber] = useState();

  const handleMetroRoutesStop = () => {
    (async () => {
      const {data} = await axios.get(`https://svc.metrotransit.org/nextripv2/${stopNumber}`);
      props.setSelectedMetroRouteDepartures(data);
    })();
  };

  return (
    <div className="metro-transit--routes">
      <input 
        type="text"
        className="metro-transit--routes_search"
        onChange={(evt) => setStopNumber(evt.target.value)}
        placeholder="Enter stop number"
        data-testid="search" />
      <button 
        className="metro-transit--routes_searchButton"
        onClick={handleMetroRoutesStop}>
        <img src="https://www.metrotransit.org/img/svg/search-gray.svg" alt="Searh Icon" />
      </button>
    </div>
  )
}

Search.propTypes = {
  setSelectedMetroRouteDepartures: PropTypes.func,
};

export default Search;
