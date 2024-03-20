import { Icon } from '@iconify/react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.marcellus.fontFamily,
  textTransform: 'uppercase',
  letterSpacing: '3px',
}))

export const SectionHeader = styled(HeaderTitle)(({ theme }) => ({
  letterSpacing: '0.5rem',
  fontSize: 'clamp(1.3rem, 4vw, 2.8rem)',
  lineHeight: 1.3,
  color: theme.palette.secondary.dark
}))

export const PageHeaderTitle = styled(SectionHeader)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
}))

export const Header = ({ subHeader, children, ...props }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }} {...props}>
      <Box sx={{ display: 'flex', color: 'secondary.dark', alignItems: 'center', gap: 1.5 }}>
        <Icon icon="ion:boat-sharp" />
        <Typography
          sx={{ lineHeight: '1rem', fontSize: '0.8rem', letterSpacing: '1px' }}
          variant='overline'
        >
          {subHeader}
        </Typography>
      </Box>
      <SectionHeader variant='h3'>{children}</SectionHeader>
    </Box>
  )
}