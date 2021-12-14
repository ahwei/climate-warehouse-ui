import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import {
  SuccessIcon,
  InfoIcon,
  CloseIcon,
  ErrorIcon,
  WarningIcon,
  Body,
  ButtonText,
} from '..';

const NotificationCard = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0rem 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.05),
    0rem 0.375rem 1rem rgba(0, 0, 0, 0.08),
    0rem 0.1875rem 0.375rem -0.25rem rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: none;
  margin: 1.25rem;
  height: ${props => (props.buttonText ? '9rem' : '6.5rem')};
  width: 25.0625rem;
`;

const CloseButton = styled('div')`
height: fit-content;
  margin-top: 1.1587rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;

const ConfirmButton = styled('button')`
  font-family: ${props => props.theme.typography.primary.regular};
  width: 3.6875rem;
  height: 1.8125rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  align-self: flex-end;
  background-color: #1890ff;
  border-radius: 0.125rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const NotificationMessage = styled('div')`
  display: flex;
  word-wrap: break-word;
  flex-direction: column;
  justify-content: unset;
  width: 100%;
  height: 100%;
  margin-left: 1.2rem;
  margin-top:16px;
`;

const ShowIcons = styled('div')`
  margin-top: 1.0938rem;
  margin-left: 1.5938rem;
  ${props =>
    props.showIcon &&
    css`
      margin-left: 1.8438rem;
    `};
`;

const Notification = withTheme(
  ({
    showIcon,
    buttonText,
    title,
    body
  }) => {
    return (
      <>
        <NotificationCard buttonText={buttonText}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              height: '100%',
            }}>
            {showIcon === 'info' && (
              <ShowIcons showIcon={showIcon}>
                <InfoIcon height="21" width="21" />
              </ShowIcons>
            )}
            {showIcon === 'success' && (
              <ShowIcons showIcon={showIcon}>
                <SuccessIcon height="21" width="21" />
              </ShowIcons>
            )}
            {showIcon === 'error' && (
              <ShowIcons showIcon={showIcon}>
                <ErrorIcon height="21" width="21" />
              </ShowIcons>
            )}

            {showIcon === 'warning' && (
              <ShowIcons showIcon={showIcon}>
                <WarningIcon height="21" width="21" />
              </ShowIcons>
            )}
            <NotificationMessage>
              <Body showIcon={showIcon}>{title}</Body>
              <Body size="Small" showIcon={showIcon}>
                {body}
              </Body>
            </NotificationMessage>

            <CloseButton>
              <CloseIcon height="8.91" width="8.66" />
            </CloseButton>
          </div>
          {buttonText && (
            <ConfirmButton>
              <ButtonText color="#ffffff">{buttonText}</ButtonText>
            </ConfirmButton>
          )}
        </NotificationCard>
      </>
    );
  },
);

export { Notification };
