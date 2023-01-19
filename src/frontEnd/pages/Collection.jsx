import {
  Container,
  Heading,
  Box,
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  Text,
  ButtonGroup,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  fetchAllDevices,
  fetchAllTypes,
} from 'frontEnd/redux/devices/devices-operations';
import {
  selectDevices,
  selectTypes,
} from 'frontEnd/redux/devices/devices-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Collection = () => {
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);
  const types = useSelector(selectTypes);

  useEffect(() => {
    dispatch(fetchAllDevices());
    dispatch(fetchAllTypes());
  }, [dispatch]);
  return (
    <Container px="10" maxW="1440px" centerContent>
      <Heading as="h1" my="8">
        Collection
      </Heading>
      <Flex>
        <Box as="aside" minW="300px" flexGrow="1">
          <Heading as="h2">Filter by:</Heading>
          <Box
            bgColor="gray.800"
            borderRadius="lg"
            display="flex"
            flexDirection="column"
            color="black"
          >
            <Box mt="8">
              <Heading as="h3" color="red.500" mb="3">
                Type
              </Heading>
              {types.map(({ _id, name }) => (
                <Box key={_id}>
                  <Button colorScheme="red" w="100%" mb="3">
                    {name}
                  </Button>
                </Box>
              ))}
            </Box>
            <Divider />
          </Box>
        </Box>
        <SimpleGrid as="main" columns="3" spacing="10" ml="5">
          {devices.map(({ _id, name, description, image, price }) => (
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
                  <Text color="red.600" fontSize="2xl">
                    ${price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Add to card
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Collection;
