import { Icon } from '@iconify/react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.marcellus.fontFamily,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  textAlign: 'start',
}))

export const SectionHeader = styled(HeaderTitle)(({ theme }) => ({
  letterSpacing: '0.5rem',
  fontSize: 'clamp(1.3rem, 4vw, 2.8rem)',
  lineHeight: 1.3,
}))

export const PageHeaderTitle = styled(SectionHeader)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
}))

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  maxWidth: '75vw',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  }
}))

export const Header = ({ subHeader, color = 'dark', children, ...props }) => {
  return (
    <StyledHeader {...props}>
      <Box sx={{
        display: 'flex',
        color: color !== 'light' ? 'secondary.dark' : 'primary.light',
        alignItems: 'center',
        gap: 1.5
      }}>
        <Icon icon="ion:boat-sharp" />
        <Typography
          sx={{ lineHeight: '1rem', fontSize: '0.8rem', letterSpacing: '2px' }}
          variant='overline'
        >
          {subHeader}
        </Typography>
      </Box>
      <SectionHeader
        variant='h3'
        sx={{ color: color !== 'light' ? 'secondary.dark' : 'primary.light' }}
      >
        {children}
      </SectionHeader>
    </StyledHeader>
  )
}