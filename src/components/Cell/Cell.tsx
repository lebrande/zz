import styled from 'styled-components';

type TProps = {
  centered?: boolean;
};

const Cell = styled.div<TProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.centered ? 'center' : 'flex-start'};
  align-items: ${(props) => props.centered ? 'center' : 'flex-start'};
  flex-grow: 1;
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.colors.pinkishGrey};

  &:last-of-type {
    border-right: none;
  }
`;

Cell.defaultProps = {
  centered: false,
};

export default Cell;