import AboutTheFirm from "@/components/home/about-us"
import HeroSlider from "@/components/home/hero-slider"
import { Box } from "@mui/material"

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <AboutTheFirm />
    </Box>
  )
}

export default Home