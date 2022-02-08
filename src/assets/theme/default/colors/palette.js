import colors from './colors';
export default {
  primary: {
    main: '#191969',
    contrastText: colors.white.main,
  },
  secondary: {
    main: '#FC527E',
    contrastText: colors.white.main,
  },
  success: {
    ...colors.green,
    contrastText: colors.white.main,
  },
  warning: {
    ...colors.orange,
    contrastText: colors.white.main,
  },
  info: {
    ...colors.blue,
    contrastText: colors.white.main,
  },
  error: {
    ...colors.red,
    contrastText: colors.white.main,
  },
  grey: {
    light: '#F7FBFF',
    main: '#ACB5BD',
    dark: '#495057',
    contrastText: colors.white.main,
  },
};
