import { Box, Container, Heading } from '@chakra-ui/react';
import { fetchAllDevices } from 'frontEnd/redux/devices/devices-operations';
import { selectDevices } from 'frontEnd/redux/devices/devices-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const newDevices = useSelector(selectDevices);

  useEffect(() => {
    dispatch(fetchAllDevices(true));
  }, [dispatch]);

  return (
    <>
      <Container
        px="14"
        maxW="1440px"
        as="section"
        // bgImg="linear-gradient(to right, rgba(47,48,58,0.4), rgba(47,48,58,0.4)), url(http://localhost:1488/static/hero_bg.jpeg )"
        bgSize="cover"
        bgPos="center"
        py="64"
      >
        <Heading fontSize="8xl" width="xl">
          Fast Food Fast Delivery
        </Heading>
      </Container>
      <Container px="10" maxW="1440px" centerContent>
        <Container textAlign="center" my="14">
          <Heading>Last added meals</Heading>
          <Box>
            {newDevices.map(item => (
              <div></div>
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Home;
