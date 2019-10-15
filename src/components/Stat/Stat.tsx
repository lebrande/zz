import React, { FunctionComponent } from 'react';

import StatValue from './StatValue';
import Label from '../Label/Label';

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