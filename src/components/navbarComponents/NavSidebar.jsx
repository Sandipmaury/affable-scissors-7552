import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NavSidebar = ({ onToggle, isOpen }) => {
  return (
    <Stack
      direction="column"
      boxShadow={
        isOpen ? "rgba(136, 165, 191, 0.48) 0px 0px 50px 40px" : "none"
      }
      bg="white"
      w="90%"
      marginTop="-10px"
      h="auto"
    >
      <Flex
        borderBottom="1px solid gray"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
      >
        <Flex gap="10px">
          <span onClick={onToggle} className="material-symbols-outlined">
            account_circle
          </span>
          <Text>SIGN IN/UP</Text>
        </Flex>
        <span onClick={onToggle} className="material-symbols-outlined">
          close
        </span>
      </Flex>
      {/* ************************** */}
      <Box p="10px" overflowY="auto" scrollBehavior="smooth" h="93vh">
        <Accordion allowMultiple>
          <Link to="#">
            <Text marginLeft="1rem">HISPANIC HERITAGE MONTH</Text>
          </Link>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    flex="1"
                    fontWeight={isExpanded ? "medium" : "normal"}
                    textAlign="left"
                  >
                    BRANDS
                  </Box>
                  {isExpanded ? (
                    <Icon as={BiMinus} boxSize="25px" />
                  ) : (
                    <Icon as={BiPlus} boxSize="25px" />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Link to="#">
                    <AccordionPanel pb={4}>ALL BRANDS</AccordionPanel>
                  </Link>
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            BEST SELLERS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Augustinus Bader
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Chantecaille</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Dr. Barbara Sturm
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>diptyque</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Dyson</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>La Mer</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lune+Aster</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>M-61</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>NARS</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Olaplex</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Oribe</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Sisley-Paris</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              SkinCeuticals
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Tom Ford</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Trish McEvoy</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>VIRTUE</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {/* ***************** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            #NEWATBLUE
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>BalmLabs</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Boucleme</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>EltaMD</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Holy Curls</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>L'AVANT</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lake & Skye</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>NETTE</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Ogee</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>PCA Skin</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>RevitaLash</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Sana Jardin</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Sunday II Sunday
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              The Laundress
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>The Maker</AccordionPanel>
                          </Link>

                          <Link to="#">
                            <AccordionPanel pb={4}>
                              WELLinsulated
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>ZitSticka</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            CONSCIOUS BEAUTY
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Hum Nutrition
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Fur</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Indie Lee</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Kjaer Weis</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>lilah b.</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Odacité</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>OSEA</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Tata Harper</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>WelleCo</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <Link to="#">
            <Text marginLeft="1rem">NEW!</Text>
          </Link>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    flex="1"
                    fontWeight={isExpanded ? "medium" : "normal"}
                    textAlign="left"
                  >
                    BEST SELLERS
                  </Box>
                  {isExpanded ? (
                    <Icon as={BiMinus} boxSize="25px" />
                  ) : (
                    <Icon as={BiPlus} boxSize="25px" />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Link to="#">
                    <AccordionPanel pb={4}>SHOP ALL</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>SKIN CARE</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>MAKEUP</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>HAIR</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>BATH & BODY</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>FRAGRANCE</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>TOOLS & ACCESSORIES</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>MEN'S</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>SUN CARE</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>MINI & TRAVEL</AccordionPanel>
                  </Link>
                  <Link to="#">
                    <AccordionPanel pb={4}>GIFTS</AccordionPanel>
                  </Link>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    flex="1"
                    fontWeight={isExpanded ? "medium" : "normal"}
                    textAlign="left"
                  >
                    SKINCARE
                  </Box>
                  {isExpanded ? (
                    <Icon as={BiMinus} boxSize="25px" />
                  ) : (
                    <Icon as={BiPlus} boxSize="25px" />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Link to="#">
                    <AccordionPanel pb={4}>ALL SKINCARE</AccordionPanel>
                  </Link>

                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            CLEANSERS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Cleansers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Wash</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Wipes</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Makeup Removers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Mists & Essences
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Toners</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {/* ***************** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            EXFOLIATORS & PEELS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Exfoliators & Peels
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Facial Peels</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Scrubs & Exfoliators
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            EYE CARE
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All Eye Care</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Cream</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Serums</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            LIP CARE
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All Lip Care</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Balms</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Oils</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Lip Sunscreen
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            MASKS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Hand & Foot Masks
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>LED Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Masks</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Sheet Masks</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            MOISTURIZERS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Moisturizers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              BB & CC Creams
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Daily SPF</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Decollete & Neck Creams
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Face Moisturizers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Oils</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Mists & Essences
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Night Creams</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Tinted Moisturizers
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            SUN CARE
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All Sun Care</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Body Sunscreen
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Face Sunscreen
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Lip Sunscreen
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Self Tanning & Bronzing
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            TOOLS & DEVICES
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Tools & Devices
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Cleansing & Exfoliation Brushes
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Facial Rollers & Massage
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              High-Tech Tools
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            TREATMENT & SERUMS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Treatments & Serums
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Oils</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Serums</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Facial Peels</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Scrubs & Exfoliators
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Spot Treatments
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Toners</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <Link to="#">
                    <AccordionPanel pb={4}>
                      {" "}
                      VITAMINS & SUPPLEMENTS
                    </AccordionPanel>
                  </Link>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box
                    flex="1"
                    fontWeight={isExpanded ? "medium" : "normal"}
                    textAlign="left"
                  >
                    MAKEUP
                  </Box>
                  {isExpanded ? (
                    <Icon as={BiMinus} boxSize="25px" />
                  ) : (
                    <Icon as={BiPlus} boxSize="25px" />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Link to="#">
                    <AccordionPanel pb={4}>ALL MAKEUP</AccordionPanel>
                  </Link>

                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            BRUSHES & TOOLS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All Brushes & Tools
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Brow Brushes</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Brush Cleansers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Brush Sets</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Brushes</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Eyelash Curlers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Face Brushes</AccordionPanel>
                          </Link>

                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Brushes</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Sharpeners</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Sponges & Applicators
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Tweezers & Eyebrow Tools
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {/* ***************** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            EYES
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All EYES</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Primer</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eyebrow</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eye Liner</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eyeshadow</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Eyelash</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Mascara</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Under Eye Concealer
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            FACE & CHEEK
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All FACE & CHEEK
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              BB & CC Creams
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Blush</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Bronzer</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Concealer</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Countour</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Face Palettes
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Foundation</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Highlighters & Luminizers
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Primer</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Setting Spray & Powders
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Tinted Moisturizers
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            LIPS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All LipS</AccordionPanel>
                          </Link>

                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Balms</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Gloss</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Liner</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Oils</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lip Stains</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Lipstick</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            MAKEUP BAGS & ACCESSORIES
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              All MAKEUP BAGS & ACCESSORIES
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Makeup Accessories
                            </AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>
                              Makeup Bags & Cases
                            </AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <Link to="#">
                    <AccordionPanel pb={4}>Makeup Bags & Cases</AccordionPanel>
                  </Link>

                  {/* ********** */}
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            fontWeight={isExpanded ? "medium" : "normal"}
                            textAlign="left"
                          >
                            NAILS
                          </Box>
                          {isExpanded ? (
                            <Icon as={BiMinus} boxSize="25px" />
                          ) : (
                            <Icon as={BiPlus} boxSize="25px" />
                          )}
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          <Link to="#">
                            <AccordionPanel pb={4}>All NAILS</AccordionPanel>
                          </Link>

                          <Link to="#">
                            <AccordionPanel pb={4}>Nail Care</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Nail Polish</AccordionPanel>
                          </Link>
                          <Link to="#">
                            <AccordionPanel pb={4}>Nail Sets</AccordionPanel>
                          </Link>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  {/* ********** */}
                  <Link to="#">
                    <AccordionPanel pb={4}>PALETTES & SETS</AccordionPanel>
                  </Link>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Stack>
  );
};
