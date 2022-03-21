import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './styles/app.scss';

import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import Routes from './components/Routes/Routes';
import Directions from './components/Directions/Directions';
import Stops from './components/Stops/Stops';
import Departures from './components/Departures/Departures';

function App() {
  const [searchAction, setSearchAction] = useState("routes");
  const [metroRoutes, setMetroRoutes] = useState([]);
  const [selectedMetroRoute, setSelectedMetroRoute] = useState("");
  const [metroDirections, setMetroDirections] = useState("");
  const [metroRouteStops, setMetroRouteStops] = useState("");
  const [selectedMetroRouteStop, setSelectedMetroRouteStop] = useState("");
  const [selectedMetroRouteDepartures, setSelectedMetroRouteDepartures] = useState(null);
  
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get('https://svc.metrotransit.org/nextripv2/routes?format=json');
        setMetroRoutes(data); 
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedMetroRoute]);

  const getMetroRouteDirections = async (route) => {
    try {
      if(route !== "") {
        const {data} = await axios.get(`https://svc.metrotransit.org/nextripv2/directions/${route}`);
        setMetroDirections(data);
        setSelectedMetroRoute(route);
      }else{
        setSelectedMetroRoute("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getMetroRouteStops = async (direction) => {
    try {
      if(direction !== "") {
        const {data} = await axios.get(`https://svc.metrotransit.org/nextripv2/stops/${selectedMetroRoute}/${direction}`);
        setMetroRouteStops(data);
        setSelectedMetroRouteStop(direction);
      }else{
        setSelectedMetroRouteStop("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const getMetroRouteDepartures = async (stop) => {
    try {
      if(stop !== "") {
        const {data} = await axios.get(`https://svc.metrotransit.org/nextripv2/${selectedMetroRoute}/${selectedMetroRouteStop}/${stop}`);
        setSelectedMetroRouteDepartures(data);
      }else{
        setSelectedMetroRouteDepartures("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resetMetroRouteMenus = () => {
    setSelectedMetroRouteDepartures("");
    setSelectedMetroRoute("");
    setSelectedMetroRouteStop("");
  }
  
  return (
    <Layout>
      <Menu />
      <Banner />
      <Content 
        searchAction={searchAction}
        setSearchAction={setSearchAction}
        resetMetroRouteMenus={resetMetroRouteMenus}>
        {(searchAction === 'routes') ?
          <React.Fragment>
            <Routes 
              setMetroRoutes={setMetroRoutes}
              getMetroRouteDirections={getMetroRouteDirections}
              metroRoutes={metroRoutes} />
            <Directions 
              selectedMetroRoute={selectedMetroRoute} 
              getMetroRouteStops={getMetroRouteStops}
              metroDirections={[...metroDirections]} />
            <Stops 
              selectedMetroRouteStop={selectedMetroRouteStop} 
              getMetroRouteDepartures={getMetroRouteDepartures}
              metroRouteStops={[...metroRouteStops]} />
          </React.Fragment> 
          : <Search 
              setSelectedMetroRouteDepartures={setSelectedMetroRouteDepartures}/>
        }
      </Content>
      <Departures 
        selectedMetroRouteDepartures={selectedMetroRouteDepartures} />
    </Layout>
  );
}

export default App;
