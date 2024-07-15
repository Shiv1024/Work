import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold color
    },
  },
});

const FileIcon = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="px-6 cursor-pointer">
        <FolderIcon color="primary" style={{ fontSize: 30 }} />
      </div>
    </ThemeProvider>
  );
};

export default FileIcon;
