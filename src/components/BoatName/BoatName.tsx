import React, { FunctionComponent } from 'react';

import BoatNameWrapper from './BoatNameWrapper';
import BoatNameTitle from './BoatNameTitle';
import BoatNameSubtitle from './BoatNameSubtitle';
import BoatNameYear from './BoatNameYear';
import BoatNameMarina from './BoatNameMarina';

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