import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { SelectSizeEnum, SelectTypeEnum } from '..';
import { setLocale } from '../../store/actions/app';
import { LANGUAGE_CODES } from '../../translations';

const Container = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .MuiSelect-root,
  .MuiSvgIcon-root,
  .MuiInputBase-inputSizeSmall {
    color: ${props => props.theme.colors[props.selectedTheme].black};
  }

  .MuiSelect-root:hover,
  .MuiSvgIcon-root:hover,
  .MuiInputBase-inputSizeSmall:hover {
    color: ${props => props.theme.colors[props.selectedTheme].black};
  }

  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
`;

const LocaleSwitcher = withTheme(() => {
  const dispatch = useDispatch();
  const appStore = useSelector(state => state.app);

  const handleLocaleChange = event => {
    dispatch(setLocale(event.target.value));
  };

  return (
    <Container selectedTheme={appStore.theme}>
      <Select
        size={SelectSizeEnum.small}
        type={SelectTypeEnum.basic}
        value={appStore.locale}
        onChange={handleLocaleChange}>
        {Object.keys(LANGUAGE_CODES).map(key => (
          <MenuItem key={LANGUAGE_CODES[key]} value={LANGUAGE_CODES[key]}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
});

export { LocaleSwitcher };
