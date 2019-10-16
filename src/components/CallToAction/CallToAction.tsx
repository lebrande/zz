import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

// @ts-ignore
import boltSvg from '../../svg/bolt.svg';

type TProps = {
  label: string;
  buttonLabel: string;
};

type TCallToActionLabelProps = {
  image: string;
};

const CallToActionLabel = styled.p<TCallToActionLabelProps>`
  padding-left: 1.4em;
  padding-right: 0.7em;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;
  font-size: 12px;
  margin: 0.4em 0;
  text-transform: uppercase;
  font-weight: 600;
`;

const BUTTON_HEIGHT = 38;

const CallToActionButton = styled.button`
  background-color: ${props => props.theme.colors.paleRed};
  position: relative;
  height: ${BUTTON_HEIGHT}px;
  margin-bottom: 0.2em;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 10px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
  }

  &:after {
    border: ${BUTTON_HEIGHT/4}px solid transparent;
    border-top: ${BUTTON_HEIGHT/2}px solid ${props => props.theme.colors.paleRed};
    border-bottom: ${BUTTON_HEIGHT/2}px solid ${props => props.theme.colors.paleRed};
    left: -${BUTTON_HEIGHT/4}px;
  }

  &:before {
    border-left: ${BUTTON_HEIGHT/4}px solid ${props => props.theme.colors.paleRed};
    border-right: ${BUTTON_HEIGHT/4}px solid transparent;
    border-top: ${BUTTON_HEIGHT/2}px solid transparent;
    border-bottom: ${BUTTON_HEIGHT/2}px solid transparent;
    right: -${BUTTON_HEIGHT/2}px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const CallToAction: FunctionComponent<TProps> = ({
  label,
  buttonLabel,
}) => (
  <>
    <CallToActionLabel image={boltSvg}>
      {label}
    </CallToActionLabel>
    <CallToActionButton>{buttonLabel}</CallToActionButton>
  </>
);

export default CallToAction;