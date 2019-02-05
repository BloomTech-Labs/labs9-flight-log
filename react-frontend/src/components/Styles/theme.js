import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#e1eff7',
      main: '#afbdc4',
      dark: '#808d94',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8bf6ff',
      main: '#4fc3f7',
      dark: '#0093c4',
      contrastText: '#000',
    },
  },
  themeName: 'FlightTheme',
  typography: {
    useNextVariants: true,
  },
});

