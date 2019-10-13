import React, { FunctionComponent } from 'react';

import StatValue from './StatValue';
import StatName from './StatName';

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
    <StatName>{name}</StatName>
  </>
);

export default Stat;