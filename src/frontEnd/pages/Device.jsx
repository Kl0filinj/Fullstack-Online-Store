import {
  Container,
  Heading,
  Box,
  Flex,
  Image,
  Text,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import DeviceCard from 'frontEnd/components/DeviceCard';
import {
  fetchAllDevices,
  fetchDeviceById,
} from 'frontEnd/redux/devices/devices-operations';
import {
  selectDevices,
  selectAddictionalDevices,
} from 'frontEnd/redux/devices/devices-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Device = () => {
  const { deviceId } = useParams();
  const dispatch = useDispatch();
  const { typeId, name, image, description } = {
    ...useSelector(selectDevices)[0],
  };
  const similDevices = useSelector(selectAddictionalDevices);

  useEffect(() => {
    dispatch(fetchDeviceById(deviceId));
    dispatch(
      fetchAllDevices({ newDevices: true, filter: [`typeId=${typeId}`] })
    );
  }, [dispatch, deviceId, typeId]);

  return (
    <Container px="10" maxW="1440px" centerContent>
      <Flex justifyContent="space-between" mt="8">
        <Box flexBasis="50%" px="8">
          <Image src={`http://localhost:1488/static/${image}`} />
        </Box>
        <Box flexBasis="50%" px="8">
          <Heading as="h1" textAlign="center" mb="3">
            {name}
          </Heading>
          <Text>{description}</Text>
          <Button>Add to card</Button>
        </Box>
      </Flex>
      <Box>
        <Heading>Similar Products</Heading>
        <SimpleGrid as="main" columns="3" spacing="10" ml="5">
          {similDevices.map(item => (
            <DeviceCard cardInfo={item} addictional={true} key={item._id} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Device;
