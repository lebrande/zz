import React, { ReactNode, FunctionComponent } from 'react';

import './cell.scss';

type TProps = {
  children: ReactNode;
};

const Cell: FunctionComponent<TProps> = ({
  children,
}) => (
  <div className="cell">
    {children}
  </div>
);

export default Cell;