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
import Price from '../Price/Price';
import CallToAction from '../CallToAction/CallToAction';

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
      <Cell centeredV centeredH>
        <Badge />
      </Cell>
    </Row>
    <Row>
      <Cell centeredV centeredH>
        <Stat value={`${length}m`} name="length"/>
      </Cell>
      <Cell centeredV centeredH>
        <Stat value={`${cabins}`} name="cabins"/>
      </Cell>
      <Cell centeredV centeredH>
        <Stat value={`${nr_guests}`} name="guests"/>
      </Cell>
      <Cell centeredV centeredH>
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
      <Cell centeredV>
        <Price
          price="€1,094.00"
          period="weekly"
        />
      </Cell>
      <Cell centeredH centeredV>
        <CallToAction
          label="direct booking"
          buttonLabel= "view details"
        />
      </Cell>
    </Row>
  </BoatWrapper>
);

export default Boat;