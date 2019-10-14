import React from 'react';

// @ts-ignore
import starSvg from '../../svg/star.svg';

import RatingStars from './RatingStars';
import RatingStar from './RatingStar';
import StatName from '../Stat/StatName';

const Rating = () => (
  <>
    <RatingStars>
      {Array(5).fill(null).map((_, i) => (
        <RatingStar key={i} src={starSvg} />
      ))}
    </RatingStars>
    <StatName>
      3 reviews
    </StatName>
  </>
);

export default Rating;