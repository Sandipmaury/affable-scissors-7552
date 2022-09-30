import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, SimpleGrid, Text } from '@chakra-ui/react';
import {MinusIcon , AddIcon, } from '@chakra-ui/icons'
import React from 'react'



const FilterNew = () => {
  return (
    <div style={{fontFamily:"Montserrat Medium, sans-serif", fontSize:"14px", fontWeight:"500", color:" rgb(18, 40, 76)", lineHeight:"24px"}}>
 
      <Accordion allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text color="#12284C">Category</Text>
            <Text fontSize='xs'>5Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
          <Checkbox  >Bath and Body</Checkbox><br></br>
          <Checkbox >Hair</Checkbox><br></br>
          <Checkbox >Mackup</Checkbox><br></br>
          <Checkbox >Skin Care</Checkbox><br></br>
          <Checkbox >Tools and Accessories</Checkbox><br></br>

        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Type</Text>
            <Text fontSize='xs'>23Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
          <Checkbox >Body Creams</Checkbox><br></br>
          <Checkbox >Body Lotions</Checkbox><br></br>
          <Checkbox >Body oils</Checkbox><br></br>
          <Checkbox >Cleaning oil</Checkbox><br></br>
          <Checkbox >Conditioners</Checkbox><br></br>
          <Checkbox >Essences</Checkbox><br></br>
          <Checkbox >Eye Creams</Checkbox><br></br>
          <Checkbox >Eye serums</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Benifit</Text>
            <Text fontSize='xs'>15Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
          <Checkbox >Anti Anging</Checkbox><br></br>
          <Checkbox >Anti pollution</Checkbox><br></br>
          <Checkbox >Brightning</Checkbox><br></br>
          <Checkbox >Detox</Checkbox><br></br>
          <Checkbox >exfloating</Checkbox><br></br>
          <Checkbox >Fast Drying</Checkbox><br></br>
          <Checkbox >Firming</Checkbox><br></br>
          <Checkbox >Fullness</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Concern</Text>
            <Text fontSize='xs'>18Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
          <Checkbox >Black Headers</Checkbox><br></br>
          <Checkbox >Breakage</Checkbox><br></br>
          <Checkbox >Damange and Split ends</Checkbox><br></br>
          <Checkbox >Dark Circles</Checkbox><br></br>
          <Checkbox >Dullness</Checkbox><br></br>
          <Checkbox >Fine Lines And Wrinkels</Checkbox><br></br>
          <Checkbox >DullNess</Checkbox><br></br>
          <Checkbox >Fullness</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Ingredint Preference</Text>
            <Text fontSize='xs'>18Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
           <Checkbox >Anti Oxidents</Checkbox><br></br>
          <Checkbox >Biton</Checkbox><br></br>
          <Checkbox > Free grance Free</Checkbox><br></br>
          <Checkbox >Gulten Free</Checkbox><br></br>
          <Checkbox >Hyluronic Acid</Checkbox><br></br>
          <Checkbox>Mindfull</Checkbox><br></br>
          <Checkbox >Natural dilvery</Checkbox><br></br>
          <Checkbox >Fullness</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Formulation</Text>
            <Text fontSize='xs'>9Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
        <Checkbox >Balm</Checkbox><br></br>
          <Checkbox >Cream</Checkbox><br></br>
          <Checkbox > Gel</Checkbox><br></br>
          <Checkbox >Lequid</Checkbox><br></br>
          <Checkbox >OIl  </Checkbox><br></br>
          <Checkbox> Pill</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>Skin Type </Text>
            <Text fontSize='xs'>9Avaaible</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#7D899D" pb={4}>
        <Checkbox >All</Checkbox><br></br>
          <Checkbox >Combian</Checkbox><br></br>
          <Checkbox > Dry</Checkbox><br></br>
          <Checkbox >Mature</Checkbox><br></br>
          <Checkbox >Normal  </Checkbox><br></br>
          <Checkbox> Oily</Checkbox><br></br>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>     
</Accordion>

    </div>
  )
}

export default FilterNew