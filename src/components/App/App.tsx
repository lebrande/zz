import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BoatData } from '../../types/BoatData';
import Boat from '../Boat/Boat';
import { device } from '../../styled/breakpoints';

const AppWrapper = styled.div`
  margin: 4em auto;
  max-width: 430px;

  @media ${device.laptop} {
    max-width: 1000px;
  }
`;

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
    <AppWrapper>
      {boats.map((boat) => (
        <Boat
          key={boat.id}
          {...boat}
        />
      ))}
    </AppWrapper>
  );
};

export default App;