import React, { FunctionComponent } from 'react';

import { IMAGE_BASE_URL } from '../../constants';
import { BoatData } from '../../types/BoatData';

import BoatName from '../BoatName/BoatName';
import Cell from '../Cell/Cell';
import Row from '../Row/Row';
import BoatWrapper from './BoatWrapper';
import BoatLabel from './BoatLabel';
import Badge from '../Badge/Badge';
import Stat from '../Stat/Stat';
import Rating from '../Rating/Rating';
import CheckList from '../CheckList/CheckList';
import Features from '../Features/Features';

type TProps = BoatData;

const Boat: FunctionComponent<TProps> = ({
  boat_summary: { 
    name,
    images,
    year,
    model: {
      name: model,
    },
    length,
    cabins,
    nr_guests,
  },
  marina: {
    country,
    locality,
  },
}) => (
  <BoatWrapper>
    <BoatLabel>Zizoo recommended</BoatLabel>
    <Row>
      <Cell>
        <div>
          <img src={`${IMAGE_BASE_URL}${images[0]}`} alt={name}/>
        </div>
      </Cell>
    </Row>
    <Row highlighted>
      <Cell>
        <BoatName
          name={name}
          model={model}
          year={year}
          country={country}
          locality={locality}
        />
      </Cell>
      <Cell centered>
        <Badge />
      </Cell>
    </Row>
    <Row>
      <Cell centered>
        <Stat value={`${length}m`} name="length"/>
      </Cell>
      <Cell centered>
        <Stat value={`${cabins}`} name="cabins"/>
      </Cell>
      <Cell centered>
        <Stat value={`${nr_guests}`} name="guests"/>
      </Cell>
      <Cell centered>
        <Rating />
      </Cell>
    </Row>
    <Row>
      <Cell noBorder>
        <CheckList items={[
          'Sicherungsshein',
          'Luxury',
        ]} />
      </Cell>
      <Cell noBorder>
        <Features
          label="Sail type"
          list={['Rolling Mainsail']}
        />
      </Cell>
      <Cell noBorder>
        <Features
          label="Free extras"
          list={['AirCon', 'WiFi']}
        />
      </Cell>
    </Row>
    <Row>
      <Cell>
        <p>from</p>
        <p>€1,094.00 <span>weekly</span></p>
      </Cell>
      <Cell>
        <p>direct booking</p>
        <button>view details</button>
      </Cell>
    </Row>
  </BoatWrapper>
);

export default Boat;