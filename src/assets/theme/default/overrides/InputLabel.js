export default {
  outlined: {
    position: 'static',
    transform: 'translate(0, 0) scale(1)',
    marginBottom: '0.7rem',
    '&.Mui-focused': {
      position: 'static',
      transform: 'translate(0, 0) scale(1)',
    },
    '&$shrink': {
      position: 'static',
      transform: 'translate(0, 0) scale(1)',
    },
    '&[data-shrink="false"] + .MuiInputBase-formControl .MuiInputBase-input::placeholder': {
      opacity: [0.5, '!important'],
    },
  },
}