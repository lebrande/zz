import styled from 'styled-components';

import { device } from '../../styled/breakpoints';

const BoatWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1em;
  max-width: 430px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    max-width: 1000px;
  }
`;

export default BoatWrapper;