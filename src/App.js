import { Stack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { ThirdBar } from "./components/navbarComponents/ThirdBar";

function App() {
  return (
    <Stack direction="column" w="100%" h="auto" bg="white">
      <Navbar />
      <ThirdBar />
      <AllRoutes />
      <Footer />
    </Stack>
  );
}

export default App;
