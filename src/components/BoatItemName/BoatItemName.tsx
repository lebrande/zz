import React, { FunctionComponent } from 'react';

import './boat-item-name.scss';

type TProps = {
  name: string;
  model: string;
  year: number;
  country: string;
  locality: string;
};

const BoatItemName: FunctionComponent<TProps> = ({
  name,
  model,
  year,
  country,
  locality,
}) => (
  <div className="boat-item-name">
    <p className="boat-item-name__title">
      {name} {model}
    </p>
    <div className="boat-item-name__subtitle">
      <p className="boat-item-name__year">
        {year}
      </p>
      <p className="boat-item-name__marina">
        {locality}, {country}
      </p>
    </div>
  </div>
);

export default BoatItemName;