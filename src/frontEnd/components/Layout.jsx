import { Outlet } from 'react-router-dom';
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';

const Layout = () => {
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
          <Box>
            <Button colorScheme="red" variant="outline">
              Sign In
            </Button>
          </Box>
        </Flex>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
