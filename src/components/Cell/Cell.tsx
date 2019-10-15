import styled from 'styled-components';

type TProps = {
  centeredV?: boolean;
  centeredH?: boolean;
  noBorder?: boolean;
};

const Cell = styled.div<TProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.centeredV ? 'center' : 'flex-start'};
  align-items: ${(props) => props.centeredH ? 'center' : 'flex-start'};
  flex-grow: 1;
  padding: 10px;
  border-right: ${props => props.noBorder ? 'none' : `1px solid ${props.theme.colors.pinkishGrey}`};

  &:last-of-type {
    border-right: none;
  }
`;

Cell.defaultProps = {
  centeredV: false,
  centeredH: false,
  noBorder: false,
};

export default Cell;