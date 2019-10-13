import React, { useState, useEffect } from 'react';

import { BoatData } from '../../types/BoatData';
import Boat from '../Boat/Boat';

const App = () => {
  const [boats, setBoats] = useState<BoatData[]>([]);

  useEffect(() => {
    fetch('./data.json')
      .then((data) => data.json())
      .then((data: { results: BoatData[] }) => {
        setBoats(data.results);
      });
  }, []);

  return (
    <>
      {boats.map((boat) => (
        <Boat
          key={boat.id}
          {...boat}
        />
      ))}
    </>
  );
};

export default App;