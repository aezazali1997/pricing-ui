import React from 'react'
import {Box,Button,Flex,Heading,HStack,Icon,StackProps,Text,Stack} from '@chakra-ui/react'
import {CheckIcon} from 'src/icons/checkIcon'

const ListItem = (props:StackProps)=>{
    const {children,...rest} = props
    return (
        <HStack as='li' spacing="20px" {...rest}>
            <Icon as={CheckIcon}  w="22px" h="22px" />
            <Text textAlign={["left","left",'center']}>{children}</Text>
        </HStack>
    )
}

const Pricing = () => {
  return (
    <Box px={6} maxW="994px" margin="auto" mt="-256px" bg="white" borderRadius="12px" overflow="hidden" boxShadow="5px -5px rgba(0,0,0,0.1),0px 10px 10px -5px rgba(0,0,0,.04)">
        <Flex direction={["column","column","row"]}>
        <Box bg='#F0EAFB' p="60px">
            <Text fontWeight="800" fontSize="24px">Premium pro</Text>

            <Heading as='h3' fontSize="60px" mt="16px">$329</Heading>
            <Text color="#171923" fontSize="18px" fontWeight={500} mt="8px">billed just once</Text>
            <Button colorScheme={'purple'} size='lg' w="282px" mt="24px">Get started</Button>

        </Box>
        <Box p="60px" fontSize="18px">


            <Text>Access these features when you get the pricing package for your business</Text>
            <Stack as='ul' spacing="20px" pt="24px">
            <ListItem >internation calling and messaging api</ListItem>
            <ListItem >additional phone numbers</ListItem>
            <ListItem >24/7 support and conultant</ListItem>
            <ListItem >dummy content for the ui</ListItem>
            
            </Stack>
        </Box>

        </Flex>

    </Box>
  )
}
export default Pricing;
