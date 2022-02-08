export default {
  root: {
    '& legend': {
      display: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#454AB8',
    },
  },
  notchedOutline: {
    top: 0,
  },
  input: {
    padding: '15px 16px',
    // 'label.shrink + $formControl &': {
    //   placeholder: { opacity: 0.5 }
    // },
    '&::placeholder': {
      display: 'inline-block',
      opacity: '0.5 !important',
      fontStyle: 'italic',
    },
  },
}