import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      contrastText: 'rgba(255, 255, 255, 0.8)'
    },
    secondary: {
      main: '#33b65d'
    },
    error: {
      main: '#ff0000'
    }
  },
});
