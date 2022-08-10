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
    <Container maxW={"container.lg"}>
      <Flex minH={"80vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
            className="shadow-xl text-gray-500 dark:shadow-gray-700"
          >
            <Stack spacing={4} as={"form"} onSubmit={login}>
              <FormControl id="password">
                <Input
                  className="dark:shadow-gray-700 shadow border-gray-200 dark:border-gray-700"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <Button
                className="dark:shadow-gray-700 shadow border-gray-200 dark:border-gray-700 dark:bg-red-500 bg-yellow-500"
                type="submit"
              ></Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Login;
