import React from 'react'
import {HStack,Icon,StackProps,Text,Box, Flex} from '@chakra-ui/react'
import {HasleFree,MoneyBack,NoMoneySub} from 'src/icons/checkIcon'
interface FeatureProps extends StackProps {
    icon:any
}
const Feature = (props:FeatureProps) => {
  const {icon,children,...rest} = props
    return (
    <HStack {...rest} spacing="6">
        <Icon as={icon} boxSide="12" color={"purple"} />
        <Text fontSize="lg" fontWeight='bold'>{children}</Text>
    </HStack>
  )
}
const Features = ()=>{
    return <Box px={6} maxW="1024px"  m="auto" pt="60px" pb="8" >
        <Flex direction={["row","column","column"]}>
        <HStack spacing={5} >
            
            <Feature icon={MoneyBack} >30 days money back gurrantee</Feature>
            <Feature icon={HasleFree} >dummy for the hassle free</Feature>
            <Feature icon={NoMoneySub} >dummy 3 for the no money</Feature>
        </HStack>
        </Flex>
    </Box>
}
export default Features;