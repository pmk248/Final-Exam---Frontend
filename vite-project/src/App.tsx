import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Graph from './components/Graph';
import { fetchDeadliestAttackTypes, fetchHighestCasualtyRegions } from './services/api';

const App: React.FC = () => {
  const [deadliestAttackTypes, setDeadliestAttackTypes] = useState([]);
  const [highestCasualtyRegions, setHighestCasualtyRegions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const attacks = await fetchDeadliestAttackTypes();
      const regions = await fetchHighestCasualtyRegions();

      setDeadliestAttackTypes(attacks);
      setHighestCasualtyRegions(regions);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: '1rem' }}>
        <h2>Deadliest Attack Types</h2>
        <Graph data={deadliestAttackTypes} />
        <h2>Highest Casualty Regions</h2>
        <Map data={highestCasualtyRegions} />
      </div>
    </div>
  );
};

export default App;
