import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const SliderLeftButton = ({ className, onClick }) => {
  return (
    <Icon
      className={className}
      as={AiOutlineLeft}
      fontSize={["3rem", "3rem", "4rem", "4rem"]}
      _hover={{ color: "#1b3053" }}
      color="#1b3053"
      zIndex="5"
      onClick={onClick}
    />
  );
};
export const SliderRightButton = ({ className, onClick }) => {
  return (
    <Icon
      className={className}
      as={AiOutlineRight}
      _hover={{ color: "#1b3053" }}
      fontSize={["3rem", "3rem", "4rem", "4rem"]}
      color="#1b3053"
      zIndex="5"
      onClick={onClick}
    />
  );
};
