import { HeaderTitle } from '@/components/section-header'
import { PagesWrapper } from '..'
import PageHeader from './../../components/page-header/index'
import { Box, InputLabel, OutlinedInput } from '@mui/material'
import CustomButton from '@/components/ui/button'
import { StyledLink } from '@/components/footer'
import { styled } from '@mui/material/styles';
import { CustomImage } from '@/components/ui/image'

const StyledLoginWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: '5rem 0',
  width: '28rem',
  maxWidth: '95%',
  padding: '2rem',
  backgroundColor: theme.palette.primary.light,
}))

const Login = () => {
  return (
    <PagesWrapper>
      <PageHeader>login</PageHeader>
      <Box sx={{ width: '100%', bgcolor: 'rgba(0, 156, 194, 0.1)', display: 'flex', justifyContent: 'center' }}>
        <StyledLoginWrapper>
          <HeaderTitle variant='h5' sx={{ mb: '1rem', color: 'secondary.dark' }}>Login</HeaderTitle>
          <InputLabel htmlFor="username" sx={{ fontSize: '0.9rem' }}>Username</InputLabel>
          <OutlinedInput id="username" sx={{ mb: '1rem', borderRadius: 0 }} />
          <InputLabel htmlFor="password" sx={{ fontSize: '0.9rem' }}>Password</InputLabel>
          <OutlinedInput id="password" type="password" sx={{ mb: '1.5rem', borderRadius: 0 }} />
          <CustomButton color='dark' variant='contained'>LOGIN</CustomButton>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <StyledLink href='/login' sx={{ color: 'primary.main', fontSize: '0.9rem' }}>
              Forgot Password?
            </StyledLink>
          </Box>
        </StyledLoginWrapper>
      </Box>
    </PagesWrapper>
  )
}

export default Login