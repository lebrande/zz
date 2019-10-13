import styled from 'styled-components';

type TProps = {
  highlighted?: boolean;
};

const Row = styled.div<TProps>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.pinkishGrey};
  border-bottom: none;
  background-color: ${({ highlighted, theme }) => highlighted ? theme.colors.white : '#FFFFFF'};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.pinkishGrey};
  }
`;

export default Row;