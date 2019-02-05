import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#e1eff7',
      main: '#44a6df',
      dark: '#2f749c',
      contrastText: '#fff',
    },
  },
  themeName: 'FlightTheme',
  typography: {
    useNextVariants: true,
  },
});

