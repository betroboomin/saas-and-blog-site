import { Flex, Img, Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import MagicIcon from '../../../assets/Icons/MagicIcon'
import { pink500, puple500 } from '../../../Component/Navbar'

// type Props = {
//     // Icons: React.ReactNode
// }

const Sidebar = () => {
  

    const [isIconActive, setIsIconActive] = useState<null | number>(null)

    const handleIsActive = (index:number)=>{
        setIsIconActive(index)
    }

  return (
    <Flex
        position="fixed"
        mt="0rem"
        py="1rem"
        flexDir="column"
        width="5rem"
        // bgColor='red'
        alignItems="center"
        style={{ height: "calc(100vh - 4rem)" }}
        justifyContent='space-between'
      >
        <Flex>

        </Flex>
        <Flex flexDir='column' alignItems='center' gap='1rem'>
            {
                numoficon.map((item,i)=>(
<Flex key={item} onClick={()=>handleIsActive(item)} h="3rem" fill='gray' w="3rem" border="0px" rounded="full" alignItems='center' borderColor='gray' justifyContent='center'
sx={isIconActive === i ? {
    bgColor:`${pink500}`, 
    fill:'white',
    border:'0px',
    transition:'.5s ease-in-out'

} : {} }
>
                <MagicIcon height="60%" width="60%"  />
            </Flex>
                ))
            }
            
        
        </Flex>
        <Flex flexDir='column' gap='.5rem'>
            <Flex bgColor={`${puple500}`} rounded='full' h="3rem" w="3rem"  border='0px'  alignItems='center' justifyContent='center'>
            <Text fontSize='2.5rem' color='white'>+</Text>
            </Flex>
            <Flex overflow='hidden' rounded='full' h="3rem" w="3rem"  alignItems='center' justifyContent='center'>
            <Img src='/imgs/woman1.webp' h="100%" w="100%" objectFit='cover' objectPosition='top' />
            </Flex>
            
        </Flex>
      </Flex>
  )
}

const numoficon= [0,1,2,3,4]
export default Sidebar