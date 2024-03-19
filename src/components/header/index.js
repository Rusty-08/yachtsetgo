import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionSubHeader = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  letterSpacing: '1px',
}))

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.marcellus.fontFamily,
  letterSpacing: '0.5rem',
  fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
  lineHeight: 1.3,
  color: theme.palette.secondary.dark
}))

export const Header = ({ subHeader, children }) => {
  return (
    <>
      <Box sx={{ display: 'flex', color: 'secondary.dark', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Icon icon="ion:boat-sharp" />
        <SectionSubHeader sx={{ lineHeight: '1rem' }} variant='overline'>{subHeader}</SectionSubHeader>
      </Box>
      <SectionHeader variant='h3'>{children}</SectionHeader>
    </>
  )
}