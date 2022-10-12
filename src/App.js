import { Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { ThirdBar } from "./components/navbarComponents/ThirdBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./redux/AuthReducer/Actions";

function App() {
  const token = useSelector((store) => store.AuthReducer.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getUserData(token));
    }
  }, []);
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
