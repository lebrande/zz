import React, { FunctionComponent } from 'react';

import { IMAGE_BASE_URL } from '../../constants';
import { BoatData } from '../../types/BoatData';

import BoatName from '../BoatName/BoatName';
import Cell from '../Cell/Cell';
import Row from '../Row/Row';
import BoatWrapper from './BoatWrapper';
import BoatLabel from './BoatLabel';

type TProps = BoatData;

const Boat: FunctionComponent<TProps> = ({
  boat_summary: { 
    name,
    images,
    year,
    model: {
      name: model,
    },
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
      <Cell>
        <p><span>HOT</span> 69 views</p>
        <p>in the last 24h</p>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <p>24.04m</p>
        <p>lenght</p>
      </Cell>
      <Cell>
        <p>4</p>
        <p>cabins</p>
      </Cell>
      <Cell>
        <p>10</p>
        <p>guests</p>
      </Cell>
      <Cell>
        <p>*****</p>
        <p>3 reviews</p>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <ul>
          <li>Sicherungsshein</li>
          <li>Luxury</li>
        </ul>
      </Cell>
      <Cell>
        <p>Sail type</p>
        <p>Rolling Mainsail</p>
      </Cell>
      <Cell>
        <p>Free extras</p>
        <p>AirCon, WiFi</p>
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