import React, { FunctionComponent } from 'react';

// @ts-ignore
import checkSvg from '../../svg/check.svg';

import CheckListItem from './CheckListItem';

type TProps = {
  items: string[];
};

const CheckList: FunctionComponent<TProps> = ({
  items,
}) => (
  <ul>
    {items.map((item) => (
      <CheckListItem
        key={item}
        image={checkSvg}
      >
        {item}
      </CheckListItem>
    ))}
  </ul>
);

export default CheckList;