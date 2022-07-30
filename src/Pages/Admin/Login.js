import { Box, Button, Container, Flex, FormControl, Input, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAdmin } from './../../context/AdminContext';

const Login = () => {
    const [password, setPassword] = useState('');
    const { admin, setAdmin } = useAdmin();
    useEffect(() => {
        console.log(admin)
    },[admin])

    const login = async(e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/admin', {
            headers: {
                password,
                secret:'true'
            }
        })
        // const data = await res.json();
        const data = await res.json();
        console.log('this is data', data);
        setAdmin(data);
        
    }
    return (
    <Container>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} as={'form'} onSubmit={login}>
            <FormControl id="password">
                                <Input type="password" value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
            </FormControl>
                            <Button
                                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
              </Button>
            </Stack>
        </Box>
      </Stack>
        </Flex>
        </Container>
  );
};

export default Login;