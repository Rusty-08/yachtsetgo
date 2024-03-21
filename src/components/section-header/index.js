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
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
  paddingBottom: '2rem'
}))

export const Header = ({ subHeader, position = 'flex-start', color = 'dark', children, ...props }) => {
  return (
    <StyledHeader
      sx={{
        alignItems: position,
        maxWidth: position == 'flex-start' ? '75vw' : '100%',
      }}
      {...props}
    >
      <Box sx={{
        display: 'flex',
        color: color !== 'light' ? 'secondary.dark' : 'primary.light',
        alignItems: 'center',
        gap: 1.5
      }}>
        {position == 'flex-start' && <Icon icon="ion:boat-sharp" />}
        <Typography
          sx={{ lineHeight: '1rem', fontSize: '0.8rem', letterSpacing: '2px' }}
          variant='overline'
        >
          {subHeader}
        </Typography>
      </Box>
      <SectionHeader
        variant='h3'
        sx={{
          color: color !== 'light' ? 'secondary.dark' : 'primary.light',
          textAlign: position == 'flex-start' ? 'start' : 'center',
        }}
      >
        {children}
      </SectionHeader>
    </StyledHeader>
  )
}