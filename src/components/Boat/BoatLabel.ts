import styled from 'styled-components';
import Text7 from '../../styled/typography/Text7';

const BoatLabel = styled(Text7)`
  color: #FFFFFF;
  text-transform: uppercase;
  padding: 8px 8px 8px 18px;
  background-color: ${props => props.theme.colors.charcoalGrey};
  position: absolute;
  top: 2em;
  left: 0;
`;

export default BoatLabel;