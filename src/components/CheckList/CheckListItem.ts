import styled from 'styled-components';

type TProps = {
  image: string;
};

const CheckListItem = styled.li<TProps>`
  padding-left: 1.4em;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;
  font-size: 12px;
  margin-bottom: 0.6em;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default CheckListItem;