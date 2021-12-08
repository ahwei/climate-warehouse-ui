import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
  SuccessIcon,
  SuccessIconSmall,
  InfoIcon,
  InfoIconSmall,
  CloseIcon,
  ErrorIcon,
  ErrorIconSmall,
  WarningIcon,
  WarningIconSmall,
} from '..';

const AlertCard = withTheme(styled('div')`
  display: flex;
  justify-content: space-between;
  border: none;
  margin: 1.25rem;
  ${props =>
    props.alertBody
      ? 'height: 6.375rem;  width: 24rem;'
      : 'height: 2.5rem;  width: 24rem;'}

  ${props =>
    (props.type === 'info' &&
      !props.banner &&
      `background-color: ${props.theme.colors.default.status.info.secondary}; border: 0.0625rem solid ${props.theme.colors.default.status.info.primary} `) ||
    (props.type === 'success' &&
      !props.banner &&
      `background-color: ${props.theme.colors.default.status.ok.secondary}; border: 0.0625rem solid ${props.theme.colors.default.status.ok.primary}`) ||
    (props.type === 'warning' &&
      !props.banner &&
      `background-color: ${props.theme.colors.default.status.warning.secondary}; border: 0.0625rem solid ${props.theme.colors.default.status.warning.primary}`) ||
    (props.type === 'error' &&
      !props.banner &&
      `background-color: ${props.theme.colors.default.status.error.secondary}; border: 0.0625rem solid ${props.theme.colors.default.status.error.primary} `)}

      ${props =>
    (props.type === 'info' &&
      props.banner &&
      `background-color: ${props.theme.colors.default.status.info.secondary};`) ||
    (props.type === 'success' &&
      props.banner &&
      `background-color: ${props.theme.colors.default.status.ok.secondary};`) ||
    (props.type === 'warning' &&
      props.banner &&
      `background-color: ${props.theme.colors.default.status.warning.secondary};`) ||
    (props.type === 'error' &&
      props.banner &&
      `background-color: ${props.theme.colors.default.status.error.secondary};`)}
`);

const CloseTextButton = withTheme(styled('button')`
  width: 6.25rem;
  height: 1.125rem;
  background-color: unset;
  border: none;
  color: #8C8C8C;

  ${props =>
    props.alertBody
      ? 'margin-right: 1rem; margin-top: 1rem;'
      : 'margin-right: 1rem; margin-top: 0.5625rem;'}
`);

const CloseButton = withTheme(styled('div')`
  ${props =>
    props.alertBody
      ? 'margin-right: 1.1675rem; margin-top: 1rem;'
      : 'margin-right: 1.1675rem; align-self: center'}
`);

const AlertTitle = withTheme(styled('div')`
font-size: 1rem;
  font-family: ${props => props.theme.typography.primary.regular};
  height: ${props => (props.alertBody ? '1.5rem;' : '1.375rem;')}
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.25rem;

  ${props => !props.showIcon && !props.alertBody && 'margin-top: 0.5625rem;'}
      ${props =>
        props.showIcon &&
        !props.alertBody &&
        'margin-left: 1rem;margin-top: 0.5625rem;'}

  ${props =>
    props.showIcon && props.alertBody
      ? 'margin-left: 1.0938rem;margin-top: 1rem;'
      : 'margin-left: 1rem;'}

      ${props =>
        !props.showIcon &&
        props.alertBody &&
        'margin-left: 1rem;margin-top: 1rem;'}


`);

const AlertBody = withTheme(styled('div')`
  font-family: ${props => props.theme.typography.primary.light};
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  margin-bottom: 1rem;
  ${props => (props.showIcon ? 'margin-left: 1.0938rem;' : 'margin-left: 1rem')}
`);

const ShowIcons = withTheme(styled('div')`
  ${props =>
    props.alertBody
      ? 'margin-left: 1.0938rem; margin-top: 1.0938rem;'
      : 'margin-left: 1.0625rem; margin-top: 0.75rem;'}
`);

const Alert = withTheme(
  ({ type, banner, alertTitle, alertBody, showIcon, closeable, closeText }) => {
    return (
      <>
        <AlertCard type={type} banner={banner} alertBody={alertBody}>
          {showIcon && !alertBody && type === 'info' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <InfoIconSmall height="14" width="14" />
            </ShowIcons>
          )}
          {showIcon && alertBody && type === 'info' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <InfoIcon height="21" width="21" />
            </ShowIcons>
          )}

          {showIcon && !alertBody && type === 'success' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <SuccessIconSmall height="14" width="14" />
            </ShowIcons>
          )}
          {showIcon && alertBody && type === 'success' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <SuccessIcon height="21" width="21" />
            </ShowIcons>
          )}

          {showIcon && !alertBody && type === 'error' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <ErrorIconSmall height="14" width="14" />
            </ShowIcons>
          )}
          {showIcon && alertBody && type === 'error' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <ErrorIcon height="21" width="21" />
            </ShowIcons>
          )}

          {showIcon && !alertBody && type === 'warning' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <WarningIconSmall height="14" width="14" />
            </ShowIcons>
          )}
          {showIcon && alertBody && type === 'warning' && (
            <ShowIcons showIcon={showIcon} type={type} alertBody={alertBody}>
              <WarningIcon height="21" width="21" />
            </ShowIcons>
          )}
          <div
            style={{
              width: '100%',
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}>
            <AlertTitle showIcon={showIcon} alertBody={alertBody}>
              {alertTitle}
            </AlertTitle>

            {alertBody && (
              <AlertBody showIcon={showIcon}>{alertBody}</AlertBody>
            )}
          </div>
          {closeText && !closeable && (
            <CloseTextButton
              closeText={closeText}
              closeable={closeable}
              alertBody={alertBody}>
              {closeText}
            </CloseTextButton>
          )}
          {closeable && !closeText && (
            <CloseButton
              closeable={closeable}
              closeText={closeText}
              alertBody={alertBody}>
              <CloseIcon height="8.91" width="8.66" />
            </CloseButton>
          )}
        </AlertCard>
      </>
    );
  },
);

export { Alert };
