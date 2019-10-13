import styled from 'styled-components';

const BadgeWord = styled.span`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.paleRed};
  padding: 0.1em 0.4em;
  font-size: 10px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export default BadgeWord;