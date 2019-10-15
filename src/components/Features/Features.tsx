import React, { FunctionComponent } from 'react';

import Label from '../Label/Label';
import FeaturesList from './FeaturesList';

type TProps = {
  label: string;
  list: string[];
};

const Features: FunctionComponent<TProps> = ({
  label,
  list,
}) => (
  <>
    <Label>
      {label}
    </Label>
    <FeaturesList>
      {list.join(', ')}
    </FeaturesList>
  </>
);

export default Features;