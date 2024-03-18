import FadeSlider from '@/components/carousel'
import { contents } from '@/components/carousel/contents'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <FadeSlider
        contents={contents}
        contentType='video'
        overlayColor='rgba(0, 156, 194, 0.4)'
      >
        Home
      </FadeSlider>
    </Box>
  )
}

export default Home