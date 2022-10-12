import styles from "./UserPage.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { Box, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logOut } from "../../redux/AuthReducer/Actions";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const UserComponent = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const token = useSelector((store) => store.AuthReducer.token);
  const user = useSelector((store) => store.AuthReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(getUserData(token));
  }, []);
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <Box borderBottom="2px" borderColor="lightgray" pb="20px" pt="20px">
          <Heading size="lg" fontWeight="400">
            My ACOUNT
          </Heading>
        </Box>
        <Box display="flex" gap="40px" mt="60px">
          <Box w="35%">
            <HStack>
              <Box mr="10px">
                <FaRegUserCircle className={styles.usericon} />
              </Box>
              <Box>
                <Heading size="md">
                  {user?.firstName} {user?.lastName}
                </Heading>
                <Text
                  textDecoration="underline"
                  _hover={{ cursor: "pointer" }}
                  mt="5px"
                  onClick={() => dispatch(logOut)}
                >
                  Logout
                </Text>
              </Box>
            </HStack>
            <Box backgroundColor="#12284C" color="white" p="10px" mt="30px">
              Acount Overview
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor="lightgray"
              mt="15px"
              w="90%"
              color="gray"
            >
              My Purchases
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor="lightgray"
              mt="15px"
              w="90%"
              color="gray"
            >
              My BlueRewards
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor="lightgray"
              mt="15px"
              w="90%"
              color="gray"
            >
              My Wishlist
            </Box>
            <Box
              p="10px"
              border="1px"
              borderColor="lightgray"
              mt="15px"
              w="90%"
              color="gray"
            >
              Account Details + Preferences
            </Box>
          </Box>

          <Box w="60%">
            <Heading size="lg" fontWeight="400" mb="60px">
              ACOUNT OVERVIEW
            </Heading>
            <Box>
              <Text color="#12284C" fontWeight="bold">
                MY BLUEREWARDS
              </Text>
            </Box>

            <Box
              p="25px 30px"
              border="1px"
              borderColor="lightgray"
              mt="15px"
              backgroundColor="rgb(247, 244, 244) "
            >
              <Text color="gray" size="md">
                Earn $10 for every $250 you spend, plus free birthday gifts &
                treatments
              </Text>
              <Button
                mt="20px"
                backgroundColor="#12284C"
                borderRadius="0px"
                color="white"
                p="25px 30px"
              >
                JOIN NOW
              </Button>
            </Box>

            <Box mt="50px">
              <Text color="#12284C" fontWeight="bold">
                MY PURCHASES
              </Text>
            </Box>

            <Box p="25px 30px" border="1px" borderColor="lightgray" mt="15px">
              <Text color="gray" size="md">
                You have not placed any orders.
              </Text>
            </Box>

            <Box mt="50px">
              <Text color="#12284C" fontWeight="bold">
                MY WISHLIST
              </Text>
            </Box>

            <Box p="25px 30px" border="1px" borderColor="lightgray" mt="15px">
              <Text color="gray" size="md">
                There are no products in your wishlist
              </Text>
            </Box>

            <Box mt="50px">
              <Text color="#12284C" fontWeight="bold">
                MY ACCOUNT INFORMATION
              </Text>
            </Box>

            <Box p="25px 30px" border="1px" borderColor="lightgray" mt="15px">
              <Text color="#12284C" fontWeight="bold">
                DEFAULT SHIPPING ADDRESS
              </Text>
              <Text color="gray" size="md">
                {user?.firstName} {user?.lastName}
              </Text>
              <Text color="#12284C" fontWeight="bold" mt="20px">
                EMAIL
              </Text>
              <Text color="gray" size="md">
                {user?.email}
              </Text>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default UserComponent;
