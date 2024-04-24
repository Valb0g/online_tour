'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { lightBlue, pink } from "@mui/material/colors";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: pink,
    secondary: lightBlue
  }
});

export default theme;
