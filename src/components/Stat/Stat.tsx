import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Label from '../Label/Label';

const StatValue = styled.p`
  font-weight: 600;
  color: ${props => props.theme.colors.charcoalGrey};
  margin-bottom: 0.4em;
`;

type TProps = {
  value: string;
  name: string;
};

const Stat: FunctionComponent<TProps> = ({
  value,
  name,
}) => (
  <>
    <StatValue>{value}</StatValue>
    <Label>{name}</Label>
  </>
);

export default Stat;