import styled from 'styled-components';

type TProps = {
  centeredV?: boolean;
  centeredH?: boolean;
};

const Cell = styled.div<TProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.centeredV ? 'center' : 'flex-start'};
  align-items: ${(props) => props.centeredH ? 'center' : 'flex-start'};
  padding: 10px;
  border-right: 1px solid ${props => props.theme.colors.pinkishGrey};

  &:last-of-type {
    border-right: none;
  }
`;

Cell.defaultProps = {
  centeredV: false,
  centeredH: false,
};

export default Cell;