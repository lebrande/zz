import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

// @ts-ignore
import checkSvg from '../../svg/check.svg';
import { device } from '../../styled/breakpoints';

const CheckListWrapper = styled.ul`
  @media ${device.laptop} {
    display: flex;
  }
`;

type TCheckListItemProps = {
  image: string;
};

const CheckListItem = styled.li<TCheckListItemProps>`
  padding-left: 1.4em;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;
  font-size: 12px;
  margin-bottom: 0.6em;

  &:last-of-type {
    margin-bottom: 0;

    @media ${device.laptop} {
      margin-bottom: 0.6em;
    }
  }

  @media ${device.laptop} {
    padding-right: 1.4em;
  }
`;

type TProps = {
  items: string[];
};

const CheckList: FunctionComponent<TProps> = ({
  items,
}) => (
  <CheckListWrapper>
    {items.map((item) => (
      <CheckListItem
        key={item}
        image={checkSvg}
      >
        {item}
      </CheckListItem>
    ))}
  </CheckListWrapper>
);

export default CheckList;