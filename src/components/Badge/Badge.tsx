import React, { FunctionComponent } from 'react';

import BadgeWrapper from './BadgeWrapper';
import BadgeTitle from './BadgeTitle';
import BadgeWord from './BadgeWord';
import BadgeDescription from './BadgeDescription';

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