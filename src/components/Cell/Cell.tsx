import styled from 'styled-components';

type TProps = {
  centered?: boolean;
  noBorder?: boolean;
};

const Cell = styled.div<TProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.centered ? 'center' : 'flex-start'};
  align-items: ${(props) => props.centered ? 'center' : 'flex-start'};
  flex-grow: 1;
  padding: 10px;
  border-right: ${props => props.noBorder ? 'none' : `1px solid ${props.theme.colors.pinkishGrey}`};

  &:last-of-type {
    border-right: none;
  }
`;

Cell.defaultProps = {
  centered: false,
  noBorder: false,
};

export default Cell;