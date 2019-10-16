import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { device } from '../../styled/breakpoints';

import Label from '../Label/Label';

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const FeaturesList = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.charcoalGrey};
  margin-top: 0.4em;

  @media ${device.laptop} {
    margin-top: -2px;
  }
`;

type TProps = {
  label: string;
  list: string[];
};

const Features: FunctionComponent<TProps> = ({
  label,
  list,
}) => (
  <FeaturesWrapper>
    <Label>
      {label}
    </Label>
    <FeaturesList>
      {list.join(', ')}
    </FeaturesList>
  </FeaturesWrapper>
);

export default Features;