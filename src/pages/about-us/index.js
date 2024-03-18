import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '6rem',
}))

const AboutUs = () => {
  return (
    <StyledBox>AboutUs</StyledBox>
  )
}

export default AboutUs