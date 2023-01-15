import {
  Box,
  Container,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { fetchAllDevices } from 'frontEnd/redux/devices/devices-operations';
import { selectDevices } from 'frontEnd/redux/devices/devices-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const newDevices = useSelector(selectDevices);
  // const publicUrl = process.env.PUBLIC_URL;

  useEffect(() => {
    dispatch(fetchAllDevices(true));
  }, [dispatch]);

  return (
    <>
      <Container
        px="14"
        maxW="1440px"
        as="section"
        bgImg="linear-gradient(to right, rgba(47,48,58,0.4), rgba(47,48,58,0.4)), url(http://localhost:1488/static/hero_bg.jpeg )"
        bgSize="cover"
        bgPos="center"
        py="64"
      >
        <Heading fontSize="8xl" width="xl">
          Fast Food Fast Delivery
        </Heading>
      </Container>
      <Container px="10" maxW="1440px" centerContent>
        <Box textAlign="center" my="14">
          <Heading mb="5">Last added meals</Heading>
          <SimpleGrid columns="4" spacing="10">
            {newDevices.map(({ _id, name, description, image }) => (
              <Card maxW="sm" key={_id}>
                <CardBody>
                  <Image
                    src={`http://localhost:1488/static/${image}`}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>
                    <Text noOfLines="3">{description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
