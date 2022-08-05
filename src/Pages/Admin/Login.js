import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { updateStatus, verifyPassword } from "../../Hooks/Helper/Admin";
// import { useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Login = () => {
  const [password, setPassword] = useState("");
  const { status, refetch } = useAdmin();
  const navigate = useNavigate();
  useEffect(() => {
    if (status) {
      navigate("/");
    }
  });
  const login = async (e) => {
    e.preventDefault();
    const { matched } = await verifyPassword(password);
    if (matched) {
      await updateStatus(true);
      sessionStorage.setItem("admin", true);
      refetch();
    } else {
      await updateStatus(false);
      refetch();
    }
  };
  return (
    <Container>
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} as={"form"} onSubmit={login}>
              <FormControl id="password">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              ></Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Login;
