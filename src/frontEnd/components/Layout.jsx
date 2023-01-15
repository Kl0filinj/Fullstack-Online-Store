import { Outlet, NavLink } from 'react-router-dom';
// import { Link as ReachLink } from '@reach/router';
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  IconButton,
  useColorMode,
  Avatar,
  Text,
  Link,
} from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
} from 'frontEnd/redux/auth/auth-selector';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box px="4">
        <Flex px="6" py="5" maxW="6xl" mx="auto">
          <Box>
            <Heading
              as="span"
              color="red.700"
              fontWeight="700"
              fontFamily="Libre Baskerville"
            >
              MeelDeel
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              variant="ghost"
              onClick={toggleColorMode}
              icon={<SunIcon />}
            ></IconButton>
          </Box>
          {!isLoggedIn ? (
            <Box>
              <Button colorScheme="red" variant="outline">
                <NavLink to="login">Sign In</NavLink>
              </Button>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                mr="2"
                w="8"
                h="8"
                src="https://bit.ly/broken-link"
                name={user.name}
              />
              <Text
                fontSize="xl"
                fontWeight="medium"
                letterSpacing="wide"
                color="white"
                mr="2"
              >
                Hello, <Text as="b">{user.name}</Text>
              </Text>
              {/* <Button
                colorScheme="blackAlpha"
                color="white"
                variant="ghost"
                mr="2"
                onClick={() => dispatch(logOutUser())}
              >
                Sign Out
              </Button> */}
            </Box>
          )}
        </Flex>
      </Box>
      <Box px="4" bg="red.700">
        <Flex px="6" py="3" maxW="6xl" mx="auto" justifyContent="center">
          <Button variant="link" fontSize="xl" mr="5">
            <Link as={NavLink} to="/">
              Home
            </Link>
          </Button>
          <Button variant="link" fontSize="xl" mr="5">
            <Link as={NavLink} to="collection/brands">
              Brands
            </Link>
          </Button>
          <Button variant="link" fontSize="xl" mr="5">
            <Link as={NavLink} to="collection/types">
              Types
            </Link>
          </Button>
          <Button variant="link" fontSize="xl">
            <Link as={NavLink} to="collection">
              Products
            </Link>
          </Button>
        </Flex>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
