import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import starSvg from '../../svg/star.svg';
import Label from '../Label/Label';

const RatingStars = styled.div`
  display: flex;
  margin-bottom: 0.4em;
`;

const RatingStar = styled.img`
  height: 16px;
`;

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