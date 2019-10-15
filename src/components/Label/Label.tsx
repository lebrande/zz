import styled from 'styled-components';

import ParagraphSmall from '../../styled/typography/ParagraphSmall';

const Label = styled(ParagraphSmall)`
  color: ${props => props.theme.colors.charcoalGrey50};
  text-transform: uppercase;
`;

export default Label;