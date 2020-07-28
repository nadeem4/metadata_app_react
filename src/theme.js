import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(22, 164, 216)",
    },
    secondary: {
      main: "rgb(0, 0, 0)"
    },
  },
  typography: {
    fontFamily: 'ProximaNova'
  }
});

export default theme