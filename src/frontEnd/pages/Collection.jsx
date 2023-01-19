import {
  Container,
  Heading,
  Box,
  Flex,
  Image,
  Divider,
  Text,
  Button,
  SimpleGrid,
  LinkBox,
} from '@chakra-ui/react';
import DeviceCard from 'frontEnd/components/DeviceCard';
import {
  fetchAllDevices,
  fetchAllTypes,
  fetchAllBrands,
} from 'frontEnd/redux/devices/devices-operations';
import {
  selectDevices,
  selectTypes,
  selectBrands,
} from 'frontEnd/redux/devices/devices-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Collection = () => {
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);
  const types = useSelector(selectTypes);
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchAllDevices({}));
    dispatch(fetchAllTypes());
    dispatch(fetchAllBrands());
  }, [dispatch]);
  return (
    <Container px="10" maxW="1440px" centerContent>
      <Heading as="h1" my="8">
        Collection
      </Heading>
      <Flex mb="8">
        {brands.map(({ _id, name, image }) => (
          <LinkBox
            as="article"
            bgColor="white"
            borderRadius="lg"
            color="black"
            p="5"
            mr="5"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            key={_id}
          >
            <Image
              src={`http://localhost:1488/static/${image}`}
              borderRadius="lg"
              maxW="130px"
              maxH="50px"
            />
            <Text ml="3" fontSize="xl" fontWeight="bold">
              {name}
            </Text>
          </LinkBox>
        ))}
      </Flex>
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
          {devices.map(item => (
            <DeviceCard cardInfo={item} key={item._id} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Collection;
