import { Button, Container, Heading, Input, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>

        <Heading>Welcome Back !</Heading>
        <Input placeholder={"Email"} type={"email"} required focusBorderColor='purple'/>
        <Input placeholder={"Password"} type={"password"} required focusBorderColor='purple'/>
      
        <Button  backgroundColor={"purple.500"} type={"submit"} >Login</Button>
        <Button variant={"link"} alignSelf={"flex-end"} >Forgot Password ?</Button>
        <Text textAlign={"right"}>New user ?{" "}
        
        <Button variant={"link"} colorScheme={"purple"}>
        <Link to={'/signup'}>
        Sign up</Link></Button>
        </Text>
        </VStack>
    </form>

    </Container>
  )
}

export default Login