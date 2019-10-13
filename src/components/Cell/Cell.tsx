import styled from 'styled-components';

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.colors.pinkishGrey};

  &:last-of-type {
    border-right: none;
  }
`;

export default Cell;