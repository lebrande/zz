import React, { useState, useEffect } from 'react';

import { BoatItemData } from '../../types/BoatItemData';
import BoatItem from '../BoatItem/BoatItem';

const App = () => {
  const [boats, setBoats] = useState<BoatItemData[]>([]);

  useEffect(() => {
    fetch('./data.json')
      .then((data) => data.json())
      .then((data: { results: BoatItemData[] }) => {
        setBoats(data.results);
      });
  }, []);

  return (
    <>
      {boats.map((boat) => (
        <BoatItem
          key={boat.id}
          {...boat}
        />
      ))}
    </>
  );
};

export default App;