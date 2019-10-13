import React, { ReactNode, FunctionComponent } from 'react';
import cx from 'classnames';

import './row.scss';

type TProps = {
  highlighted?: boolean;
  children: ReactNode;
};

const Row: FunctionComponent<TProps> = ({
  highlighted = false,
  children,
}) => (
  <div className={cx('row', {
    'row--highlighted': highlighted,
  })}>
    {children}
  </div>
);

export default Row;