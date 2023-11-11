import { Box } from '@chakra-ui/react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

type Props = {
    children: React.ReactNode
}

const BasicLayout = ({children}: Props) => {
  return (
    <Box>
        <Navbar />
        {children}
        <Footer />
    </Box>
  )
}

export default BasicLayout