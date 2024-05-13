import { Box, Container,Text ,Tab,TabList,TabPanel,TabPanels,Tabs} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import Login from '../components/Authentification/Login';
import Signup from '../components/Authentification/Signup';


const HomePage = () => {
 
  useEffect (() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    

    if (user){
    <Navigate to="/chats" />} ;
  });

  return (
    <Container maxW='xl' centerContent>
      <Box
      d="flex"
      justifyContent="center"
      textAlign="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      // borderColor={"darkblue"} 
      >
        <Text fontSize="4xl" 
         fontFamily='Pacifico'
         color="black" >
          Chatty!
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"  font-family='Lobster'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" > 
            <Tab  width="50%" >Login</Tab>
            <Tab  width="50%" >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>


   
  )
}

export default HomePage