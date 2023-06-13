import React from 'react';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs as DateAdapter } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import styled, { css, withTheme } from 'styled-components';

import { formatDate, getISODate, getIsDateValid } from '../../utils/dateUtils';

const DateSelectVariantEnum = {
  error: 'error',
};

const StyledTextField = styled(TextField)`
  width: 100%;

  // set height depending on props
  .MuiOutlinedInput-root,
  .MuiInputBase-root {
    height: ${props => {
      if (props.size === 'large') return '40px';
      if (props.size === 'small') return '24px';
      return '32px';
    }};
    border-radius: 0.125rem;
    border: 0.0625rem solid #d9d9d9;
  }

  ${props => {
    if (props.disabled) {
      // disabled background color
      return css`
        .MuiOutlinedInput-root,
        .MuiInputBase-root {
          background-color: #f5f5f5;
        }
      `;
    } else if (props.dateselectvariant === DateSelectVariantEnum.error) {
      // error variant borders
      return css`
        .MuiOutlinedInput-root,
        .MuiInputBase-root {
          border: 1px solid ${props.theme.colors.default.status.error.primary};
        }

        .MuiOutlinedInput-root:focus-within,
        .MuiInputBase-root:focus-within {
          border: 1px solid #f5222d;
          box-shadow: 0px 0px 4px rgba(245, 34, 45, 0.5);
        }
      `;
    } else {
      // default borders
      return css`
        .MuiOutlinedInput-root:hover,
        .MuiInputBase-root:hover {
          border: 1px solid #40a9ff;
        }

        .MuiOutlinedInput-root:focus-within,
        .MuiInputBase-root:focus-within {
          border: 1px solid #1890ff;
          box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
        }
      `;
    }
  }}

  // remove inner mui border
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
`;

const DateSelect = withTheme(
  ({
    size = 'default',
    disabled,
    dateValue,
    setDateValue,
    variant,
    onBlur,
    name,
  }) => {
    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          inputFormat="YYYY-MM-DD"
          mask="____-__-__"
          RegExp="/^d{4}-d{2}-d{2}$/"
          views={['year', 'month', 'day']}
          value={getIsDateValid(dateValue) ? dayjs(new Date(dateValue)) : null}
          onChange={newValue =>
            getIsDateValid(newValue)
              ? setDateValue(formatDate(newValue))
              : setDateValue(newValue)
          }
          disabled={disabled}
          renderInput={params => (
            <StyledTextField
              {...params}
              disabled={disabled}
              size={size}
              dateselectvariant={variant}
              name={name}
              onBlur={onBlur}
            />
          )}
        />
      </LocalizationProvider>
    );
  },
);

export { DateSelect, DateSelectVariantEnum };
