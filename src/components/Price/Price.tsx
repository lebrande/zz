import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Label from '../Label/Label';
import Text5 from '../../styled/typography/Text5';
import { device } from '../../styled/breakpoints';

type TProps = {
  price: string;
  period: string;
};

const PriceValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4em;
`;

const PriceAmount = styled(Text5)`
  margin-right: 0.4em;
`;

const PricePeriod = styled.span`
  font-size: 14px;
  margin-top: 2px;
`;

const DotButton = styled.button`
  background-color: ${props => props.theme.colors.pinkishGrey};
  color: #FFFFFF;
  border-radius: 50%;
  line-height: 1;
  padding: 0;
  width: 20px;
  height: 20px;
  margin: 0 14px;
`;

const PriceWrapper = styled.div`
  @media ${device.laptop} {
    display: flex;
    align-items: baseline;
  }
`;

const Price: FunctionComponent<TProps> = ({
  price,
  period,
}) => (
  <PriceWrapper>
    <Label>From</Label>
    <PriceValue>
      <PriceAmount>{price}</PriceAmount>
      <PricePeriod>{period}</PricePeriod>
      <DotButton>?</DotButton>
    </PriceValue>
  </PriceWrapper>
);

export default Price;