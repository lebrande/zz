import styled from 'styled-components';

import { device } from '../../styled/breakpoints';

const BoatWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1em;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    border-bottom: 1px solid ${props => props.theme.colors.pinkishGrey};
  }
`;

export default BoatWrapper;