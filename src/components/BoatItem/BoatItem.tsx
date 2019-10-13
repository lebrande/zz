import React, { FunctionComponent } from 'react';

import './boat-item.scss';

import { IMAGE_BASE_URL } from '../../constants';
import { BoatItemData } from '../../types/BoatItemData';
import BoatItemName from '../BoatItemName/BoatItemName';
import Cell from '../Cell/Cell';
import Row from '../Row/Row';

type TProps = BoatItemData;

const BoatItem: FunctionComponent<TProps> = ({
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
  <div className="boat-item">
    <p className="boat-item__label">Zizoo recommended</p>
    <Row>
      <Cell>
        <div>
          <img src={`${IMAGE_BASE_URL}${images[0]}`} alt={name}/>
        </div>
      </Cell>
    </Row>
    <Row highlighted>
      <Cell>
        <BoatItemName
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
  </div>
);

export default BoatItem;