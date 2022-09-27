import { Stack } from "@chakra-ui/react";
import React from "react";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <Stack direction="column" w="100vw" h="auto">
      <AllRoutes />
    </Stack>
  );
}

export default App;
