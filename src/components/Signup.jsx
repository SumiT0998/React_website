import { Button, Container, Heading, Input, VStack ,Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"} >
    <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>

        <Heading alignSelf={"center"}>VIDEO HUB</Heading>
        <Avatar alignSelf={"center"} boxSize={"32"}/>
        <Input placeholder={"Name"} type={"text"} required focusBorderColor='purple'/>
        <Input placeholder={"Email"} type={"email"} required focusBorderColor='purple'/>
        <Input placeholder={"Password"} type={"password"} required focusBorderColor='purple'/>
       <Button  backgroundColor={"purple.500"} type={"submit"} >Sign up</Button>
       <Text textAlign={"right"}>Already sign up ?{" "}
        
        <Button variant={"link"} colorScheme={"purple"}>
        <Link to={'/login'}>
        Login</Link></Button>
        </Text>
        </VStack>
    </form>

    </Container>
  )
}

export default Signup ;