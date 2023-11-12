import { Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon, 
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal, 
  ButtonIcon,Center, View } from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { Link } from 'expo-router';



const register = () => {
  return (
    <>
    <Box
    flex={1}
     alignContent="$center"
     justifyContent="$center">
    <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      sx={{
        _dark: {
          borderWidth: "$1",
          borderRadius: "$lg",
          borderColor: "$borderDark800",
        },
      }}
    >
      <VStack space="xl">
        <Center>
        <Heading color="$text900" lineHeight="$md" mb="$12">
          Register
        </Heading>
        </Center>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Nama:
          </Text>
          <Input>
            <InputField type="text" placeholder="Ketikan nama"/>
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Nim:
          </Text>
          <Input textAlign="center">
            <InputField type="text" placeholder="Ketikan nim" />
          </Input>
          <Separator height={10} />
          <Text color="$text500" lineHeight="$xs">
            Email:
          </Text>
          <Input textAlign="center" mb="$12">
            <InputField type="text" placeholder="Ketikan email" />
          </Input>
        </VStack>
       
      </VStack>
      <Separator height={10} />
      <Button size="md" variant="solid" action="negative" isDisabled={false} isFocusVisible={false} >
      <Link href="/login">
          <ButtonText>Register</ButtonText>
          </Link>
          <ButtonIcon/>
        </Button>
    </FormControl> 
    </Box>  
    </>
  );
};

export default register;