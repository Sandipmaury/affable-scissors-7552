import React from 'react';
import "../css/EventPage.css";
import { Box, Heading, Text } from '@chakra-ui/react'

const EventPage = () => {
  return (
    <Box>
        <Box className='eventpage_firstbox_heading'>
            <Text fontSize='5xl' fontFamily='Playfair Display, serif' textAlign='center' color='#12284c' >BLUEMERCURY EXCLUSIVE EVENTS</Text>
        </Box>
        <Box className='eventpage_secondbox_heading'>
            <Text fontSize='4xl' fontFamily='Playfair Display, serif' textAlign='center' color='#12284c'>JOIN US IN STORE!</Text>
        </Box>
    </Box>
  )
}

export default EventPage