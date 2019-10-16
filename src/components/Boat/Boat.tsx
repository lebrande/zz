import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IMAGE_BASE_URL } from '../../constants';
import { BoatData } from '../../types/BoatData';
import { device } from '../../styled/breakpoints';

import Text7 from '../../styled/typography/Text7';
import BoatName from '../BoatName/BoatName';
import Cell from '../Cell/Cell';
import Row from '../Row/Row';
import Badge from '../Badge/Badge';
import Stat from '../Stat/Stat';
import Rating from '../Rating/Rating';
import CheckList from '../CheckList/CheckList';
import Features from '../Features/Features';
import Price from '../Price/Price';
import CallToAction from '../CallToAction/CallToAction';

type TProps = BoatData;

const BoatWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1em;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    border-bottom: 1px solid ${props => props.theme.colors.pinkishGrey};
  }
`;

const BoatLabel = styled(Text7)`
  color: #FFFFFF;
  text-transform: uppercase;
  padding: 8px 8px 8px 18px;
  background-color: ${props => props.theme.colors.charcoalGrey};
  position: absolute;
  top: 2em;
  left: 0;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const CtaRow = styled(Row)`
  flex-grow: 1;

  @media ${device.laptop} {
    flex-direction: column;
    border-left: none;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const DetailsRow = styled(Row)`
  flex-grow: 1;

  @media ${device.laptop} {
    flex-direction: column;
    width: 324px;
  }
`;

const DetailsCell = styled(Cell)`
  border-right: none;
  width: 140px;

  &:nth-of-type(1) {
    flex-grow: 1;
  }

  @media ${device.laptop} {
    flex-grow: 0;
    padding-bottom: 6px;
    width: auto;

    &:nth-of-type(1) {
      flex-grow: 0;
      padding-top: 14px;
      padding-bottom: 0;
    }
  }
`;

const ImageRow = styled(Row)`
  @media ${device.laptop} {
    border-right: none;
  }
`;

const PriceCell = styled(Cell)`
  flex-grow: 1;

  @media ${device.laptop} {
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colors.pinkishGrey};
  }
`;

const BoatNameCell = styled(Cell)`
  flex-grow: 1;
`;

const RatingCell = styled(Cell)`
  flex-grow: 1;
`;

const StatCell = styled(Cell)`
  width: 90px;

  @media ${device.laptop} {
    width: 110px;
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
    <ImageRow>
      <Cell>
        <div>
          <img src={`${IMAGE_BASE_URL}${images[0]}`} alt={name}/>
        </div>
      </Cell>
    </ImageRow>
    <Content>
      <Row highlighted>
        <BoatNameCell>
          <BoatName
            name={name}
            model={model}
            year={year}
            country={country}
            locality={locality}
          />
        </BoatNameCell>
        <Cell centeredV centeredH>
          <Badge />
        </Cell>
      </Row>
      <Row>
        <StatCell centeredV centeredH>
          <Stat value={`${length}m`} name="length"/>
        </StatCell>
        <StatCell centeredV centeredH>
          <Stat value={`${cabins}`} name="cabins"/>
        </StatCell>
        <StatCell centeredV centeredH>
          <Stat value={`${nr_guests}`} name="guests"/>
        </StatCell>
        <RatingCell centeredV centeredH>
          <Rating />
        </RatingCell>
      </Row>
      <Container>
        <DetailsRow>
          <DetailsCell>
            <CheckList items={[
              'Sicherungsshein',
              'Luxury',
            ]} />
          </DetailsCell>
          <DetailsCell>
            <Features
              label="Sail type"
              list={['Rolling Mainsail']}
            />
          </DetailsCell>
          <DetailsCell>
            <Features
              label="Free extras"
              list={['AirCon', 'WiFi']}
            />
          </DetailsCell>
        </DetailsRow>
        <CtaRow>
          <PriceCell centeredV>
            <Price
              price="€1,094.00"
              period="weekly"
            />
          </PriceCell>
          <Cell centeredH centeredV>
            <CallToAction
              label="direct booking"
              buttonLabel= "view details"
            />
          </Cell>
        </CtaRow>
      </Container>
    </Content>
  </BoatWrapper>
);

export default Boat;