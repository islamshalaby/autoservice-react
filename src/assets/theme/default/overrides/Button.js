import { palette } from '../colors';

export default {
  label: {
    textTransform: 'none',
    fontWeight: 700,
  },
  root: {
    minHeight: '50px',
  },
  contained: {
    fontSize: '1rem',
    boxShadow: ['none'],
    borderRadius: 5,
    '&:hover': {
      boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    },
    '&:focus': {
      boxShadow: ['none'],
    },
    '&:disabled': {
      opacity: '0.8',
    },
  },
  containedSizeLarge: {
    fontSize: '1rem',
  },
  outlinedSizeSmall: {
    minHeight: 34,
    minWidth: 34,
  },
  outlinedSecondary: {
    borderWidth: 2,
    borderColor: palette.secondary.main,
  },
};
