import {
  alpha,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography
} from '@mui/material';
import { useRef, useState } from 'react';
import ThemeModeIcon from '@mui/icons-material/LightModeTwoTone';
import { styled } from '@mui/material/styles';

function HeaderNotifications() {

  return (
    <>
      <Tooltip arrow title="Theme">
        <IconButton color="primary">
          <ThemeModeIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default HeaderNotifications;
