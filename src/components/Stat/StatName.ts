import styled from 'styled-components';

import ParagraphSmall from '../../styled/typography/ParagraphSmall';

const StatName = styled(ParagraphSmall)`
  color: ${props => props.theme.colors.charcoalGrey50};
  text-transform: uppercase;
  margin-top: 0.4em;
`;

export default StatName;