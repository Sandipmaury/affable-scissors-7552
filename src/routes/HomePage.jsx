import { Stack } from "@chakra-ui/react";
import React from "react";
import { Section1 } from "../components/homePageSections/Section1";
import { Section2 } from "../components/homePageSections/Section2";
import { Section3 } from "../components/homePageSections/Section3";
import { Section4 } from "../components/homePageSections/Section4";
import { Section5 } from "../components/homePageSections/Section5";
import { Section6 } from "../components/homePageSections/Section6";
import { Section7 } from "../components/homePageSections/Section7";
import { Section8 } from "../components/homePageSections/Section8";
import { ThirdBar } from "../components/navbarComponents/ThirdBar";

export const HomePage = () => {
  return (
    <Stack direction="column" alignItems="center" style={{ zIndex: 5 }}>
      <ThirdBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </Stack>
  );
};
