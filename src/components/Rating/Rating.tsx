import React from 'react';

// @ts-ignore
import starSvg from '../../svg/star.svg';

import RatingStars from './RatingStars';
import RatingStar from './RatingStar';
import Label from '../Label/Label';

const Rating = () => (
  <>
    <RatingStars>
      {Array(5).fill(null).map((_, i) => (
        <RatingStar key={i} src={starSvg} />
      ))}
    </RatingStars>
    <Label>
      3 reviews
    </Label>
  </>
);

export default Rating;