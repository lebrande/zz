import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Paragraph from '../../styled/typography/Paragraph';
import ParagraphSmall from '../../styled/typography/ParagraphSmall';
import Text5 from '../../styled/typography/Text5';

const BoatNameWrapper = styled.div`
  color: ${props => props.theme.colors.charcoalGrey};
`;

const BoatNameYear = styled(Paragraph)`
  margin-right: 0.7em;
`;

const BoatNameTitle = styled(Text5)`
  margin-bottom: 0.5em;
`;

const BoatNameSubtitle = styled.div`
  display: flex;
  align-items: center;
`;

const BoatNameMarina = styled(ParagraphSmall)`
  margin-top: 0.2em;
`;

type TProps = {
  name: string;
  model: string;
  year: number;
  country: string;
  locality: string;
};

const BoatName: FunctionComponent<TProps> = ({
  name,
  model,
  year,
  country,
  locality,
}) => (
  <BoatNameWrapper>
    <BoatNameTitle>
      {name} {model}
    </BoatNameTitle>
    <BoatNameSubtitle>
      <BoatNameYear>
        {year}
      </BoatNameYear>
      <BoatNameMarina>
        {locality}, {country}
      </BoatNameMarina>
    </BoatNameSubtitle>
  </BoatNameWrapper>
);

export default BoatName;