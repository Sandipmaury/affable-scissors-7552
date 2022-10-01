import {
  Box,
  Flex,
  Text,
  Input,
  Icon,
  Show,
  Hide,
  Button,
  Stack,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";

import { footerData } from "../Utils/Constants";
import { FooterLeftBox } from "./footerComponents/FooterLeftBox";

export const Footer = () => {
  return (
    <Stack
      w="100%"
      borderTop="1px solid lightgray"
      alignItems="center"
      justifyContent="center"
      py={["0px", "0px", "30px", "30px"]}
      bg="white"
    >
      <Flex
        justifyContent="space-between"
        maxW="1350px"
        w="100%"
        fontSize="14px"
        color="#466788"
        fontWeight="300"
      >
        <FooterLeftBox />
        {/* ********************* */}
        <Show above="1024px">
          {footerData?.map((el, index) => (
            <Box lineHeight="30px" key={index}>
              <Text fontSize="16px" fontWeight="400">
                {el.header}
              </Text>
              {el?.data.map((item) => (
                <Link _hover={{ textDecoration: "none" }} href={item.link}>
                  <Text fontSize="12px">{item.title}</Text>
                </Link>
              ))}
            </Box>
          ))}
        </Show>
      </Flex>
      <Hide above="1024px">
        <Stack direction="column" w="100%">
          <Box fontSize="14px" fontWeight="500" color="#12284c" w="100%">
            <Accordion allowToggle allowMultiple>
              <Text marginLeft="1rem" fontSize="16px">
                BLUEMERCURY
              </Text>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box
                        fontWeight={isExpanded ? "medium" : "normal"}
                        textAlign="left"
                        flex="1"
                      >
                        BLUEMERCURY
                      </Box>
                      {isExpanded ? (
                        <Icon as={BiMinus} boxSize="25px" />
                      ) : (
                        <Icon as={BiPlus} boxSize="25px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel fontSize={13} fontWeight="bold" pb={4}>
                      <Link to="#">
                        <AccordionPanel pb={4}>OUR COMPANY</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>STORE LOCATOR</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          IN STORE & ONLINE EVENTS
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>SPA MENU</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>CAREERS</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          VENDOR SUBMISSIONS
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          DIVERSITY & INCLUSION
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
                        fontWeight={isExpanded ? "medium" : "normal"}
                        textAlign="left"
                        flex="1"
                      >
                        MY ACCOUNT
                      </Box>
                      {isExpanded ? (
                        <Icon as={BiMinus} boxSize="25px" />
                      ) : (
                        <Icon as={BiPlus} boxSize="25px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel fontSize={13} fontWeight="bold" pb={4}>
                      <Link to="#">
                        <AccordionPanel pb={4}>MY ACCOUNT</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>BLUEREWARDS</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          GIFT CARD BALANCE CHECKER
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
                        fontWeight={isExpanded ? "medium" : "normal"}
                        textAlign="left"
                        flex="1"
                      >
                        CUSTOMER SUPPORT
                      </Box>
                      {isExpanded ? (
                        <Icon as={BiMinus} boxSize="25px" />
                      ) : (
                        <Icon as={BiPlus} boxSize="25px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel fontSize={13} fontWeight="bold" pb={4}>
                      <Link to="#">
                        <AccordionPanel pb={4}>CONTACT US</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>HELP & FAQ</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          SHIPPING, RETURNS & EXCHANGES
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>GIFT CARDS</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          OFFERS & PROMOTIONS
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>KLARNA</AccordionPanel>
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
                        fontWeight={isExpanded ? "medium" : "normal"}
                        textAlign="left"
                        flex="1"
                      >
                        RESOURCES
                      </Box>
                      {isExpanded ? (
                        <Icon as={BiMinus} boxSize="25px" />
                      ) : (
                        <Icon as={BiPlus} boxSize="25px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel fontSize={13} fontWeight="bold" pb={4}>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          TERMS & CONDITIONS
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>PRIVACY NOTICE</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          DO NOT SELL MY PERSONAL INFORMATION
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>GIFT CARDS</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          CA PRIVACY RIGHTS
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>ACCESSIBILITY</AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>
                          AFFILIATE PROGRAM
                        </AccordionPanel>
                      </Link>
                      <Link to="#">
                        <AccordionPanel pb={4}>COVID-19 UPDATES</AccordionPanel>
                      </Link>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Link to="#">
                <Text marginLeft="1rem" fontSize="16px">
                  TERMS OF SERVICE
                </Text>
              </Link>
              <Link to="#">
                <Text marginLeft="1rem" fontSize="16px">
                  REFUND POLICY
                </Text>
              </Link>
            </Accordion>
          </Box>
        </Stack>
      </Hide>
    </Stack>
  );
};
