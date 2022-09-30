import { Stack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <Stack direction="column" w="100%" h="auto" border="1px solid blue">
      <Navbar />
      {/* <AllRoutes /> */}
      {/* <Footer /> */}
    </Stack>
  );
}

export default App;
