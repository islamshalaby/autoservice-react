import { createTheme as createMuiTheme } from '@material-ui/core/styles';

// Colors
import { palette, colors } from './colors';

// Components
import MuiButton from './overrides/Button';
import MuiInputLabel from './overrides/InputLabel';
import MuiOutlinedInput from './overrides/OutlinedInput';
import MuiFormHelperText from './overrides/FormHelperText';
import MuiAutocomplete from './overrides/Autocomplete';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans'].join(','),
    fontSize: 14,
    title: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 13,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          backgroundColor: '#fff',
          width: '6px',
          height: '6px' /* height of horizontal scrollbar ← You're missing this */,
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(255,255,255, 0.5)',
          transition: 'background-color 0.2s linear, width 0.2s ease-in-out',
          WebkitTransition: 'background-color 0.2s linear, width 0.2s ease-in-out',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#999',
          borderRadius: '5px',
          transition: 'background-color 0.2s linear, width 0.2s ease-in-out',
          WebkitTransition: 'background-color 0.2s linear, width 0.2s ease-in-out',
          border: `4px solid transparent`,
        },
        '*::-webkit-scrollbar-button': {
          display: 'none',
        },
        '*::-webkit-scrollbar-thumb:hover': { background: '#AAA' },
        '*::-webkit-scrollbar:vertical': {
          height: 6,
        },
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#FFF',
          fontSize: 14,
          '& code': {
            lineHeight: 1,
            padding: '2px 4px',
            whiteSpace: 'normal',
            color: '#d14',
            backgroundColor: '#f7f7f9',
            border: '1px solid #e1e1e8',
            borderRadius: 4,
          },
        },
      },
    },
    MuiButton,
    MuiInputLabel,
    MuiOutlinedInput,
    MuiFormHelperText,
    MuiAutocomplete,
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.black.main,
        padding: '4px 8px',
        textTransform: 'uppercase',
      },
      arrow: {
        color: colors.black.main,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 14,
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: 14,
        color: '#495057',
        fontWeight: 600,
        '&.Mui-focused': {
          color: '#454AB8',
        },
      },
    },
  },
  palette,
  colors,
});

export default theme;
