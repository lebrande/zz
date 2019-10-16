import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IMAGE_BASE_URL } from '../../constants';
import { BoatData } from '../../types/BoatData';
import { device } from '../../styled/breakpoints';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const CtaRow = styled(Row)`
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const DetailsRow = styled(Row)`
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const DetailsCell = styled(Cell)`
  @media ${device.laptop} {
    flex-grow: 0;
    padding-bottom: 6px;

    &:nth-of-type(1) {
      padding-top: 14px;
      padding-bottom: 0;
    }
  }
`;

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
    <div>
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
      <Container>
        <DetailsRow>
          <DetailsCell noBorder>
            <CheckList items={[
              'Sicherungsshein',
              'Luxury',
            ]} />
          </DetailsCell>
          <DetailsCell noBorder>
            <Features
              label="Sail type"
              list={['Rolling Mainsail']}
            />
          </DetailsCell>
          <DetailsCell noBorder>
            <Features
              label="Free extras"
              list={['AirCon', 'WiFi']}
            />
          </DetailsCell>
        </DetailsRow>
        <CtaRow>
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
        </CtaRow>
      </Container>
    </div>
  </BoatWrapper>
);

export default Boat;