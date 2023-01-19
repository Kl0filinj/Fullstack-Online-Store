import {
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  Text,
  ButtonGroup,
  Button,
  LinkBox,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const DeviceCard = ({
  cardInfo: { _id, title, description, price, image },
  addictional = false,
}) => {
  const addictionPrefix = addictional === true ? '/collection/' : '';
  return (
    <LinkBox as="article">
      <NavLink to={addictionPrefix + _id}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={`http://localhost:1488/static/${image}`}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
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
      </NavLink>
    </LinkBox>
  );
};

export default DeviceCard;
