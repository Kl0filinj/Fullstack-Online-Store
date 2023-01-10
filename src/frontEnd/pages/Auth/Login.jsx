import { NavLink } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Box,
  Heading,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = evt => {
    evt.preventDefault();
    console.log({ email, password });
  };
  return (
    <Center
      as="main"
      bg="brand.bg"
      color="white"
      py="24"
      display="flex"
      flexDirection="column"
    >
      <Heading as="h1" mb="6" size="2xl">
        Enter in your acc
      </Heading>
      <Box display="flex" flexDirection="column" alignItems="center" my="5">
        <form onSubmit={onLogin} style={{ width: '100%' }}>
          <FormControl autoComplete="false">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={evt => setPassword(evt.target.value)}
            />
            <FormHelperText>
              Password should contains min 7 simbols
            </FormHelperText>
          </FormControl>
          <Box textAlign="center" mt="3">
            <Button
              colorScheme="green"
              variant="solid"
              type="submit"
              mt="3"
              maxW="60%"
              w="60%"
            >
              Log in
            </Button>
          </Box>
        </form>

        <Link as={NavLink} to="/registration" color="teal.500" mt="3">
          Have no acc, NOOB, let`s create new one
          <ArrowForwardIcon mx="2" />
        </Link>
      </Box>
    </Center>
  );
};

export default Login;
