import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BadgeWrapper = styled.div`
  color: ${props => props.theme.colors.paleRed};
  font-size: 12px;
  text-align: center;
`;

const BadgeTitle = styled.div`
  font-weight: 600;
`;

const BadgeDescription = styled.p`
  margin-top: 0.4em;
`;

const BadgeWord = styled.span`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.paleRed};
  padding: 0.1em 0.4em;
  font-size: 10px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

type TProps = {};

const Badge: FunctionComponent<TProps> = () => (
  <BadgeWrapper>
    <BadgeTitle>
      <BadgeWord>hot</BadgeWord> 69 views
    </BadgeTitle>
    <BadgeDescription>
      in the last 24h
    </BadgeDescription>
  </BadgeWrapper>
);

export default Badge;