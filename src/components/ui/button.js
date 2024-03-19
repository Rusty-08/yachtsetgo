import { Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const StyledButtton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  padding: '0.8rem 2.5rem !important',
  boxShadow: 'none',
  lineHeight: 1.5,
  letterSpacing: '1.5px',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '0.9rem',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    boxShadow: 'none',
  }
}))

const CustomButton = ({ color = 'light', children, ...props }) => {
  const theme = useTheme()

  return (
    <StyledButtton sx={{
      '&:hover': {
        bgcolor:
          props.variant !== 'text'
            ? color && color === 'dark'
              ? theme.palette.secondary.dark
              : theme.palette.primary.light
            : 'transparent',
        color:
          props.variant !== 'text'
            ? color && color === 'dark'
              ? theme.palette.primary.light
              : theme.palette.primary.main
            : theme.palette.primary.main
      },
    }}
      {...props}
    >
      {children}
    </StyledButtton>
  )
}

export default CustomButton