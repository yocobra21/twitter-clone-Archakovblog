import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         // main: 'rgb(29, 161, 242)',
    //     },
    // }
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          "'Ubuntu'",
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})