import { Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon, 
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal, 
  ButtonIcon,Center, View } from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { Link } from 'expo-router';
import { TouchableOpacity } from "react-native-gesture-handler";



const Login = () => {
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
        <Heading color="$text900" lineHeight="$md">
          Login
        </Heading>
        </Center>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Email
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Password
          </Text>
          <Input textAlign="center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot pr="$3" onPress={handleState}>
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                color="$darkBlue500"
              />
            </InputSlot>
          </Input>
        </VStack>
        <TouchableOpacity>
        <Button action="negative" ml="null">
          <View>
          <Link href="/(tabs)/home">
          <ButtonText color="$white" >Login</ButtonText>
          </Link>
          </View>
        </Button>
        </TouchableOpacity>
       
      </VStack>
      <Separator height={10} />
      <Button size="md" variant="solid" action="negative" isDisabled={false} isFocusVisible={false} >
      <Link href="/register">
          <ButtonText>Register</ButtonText>
          </Link>
          <ButtonIcon/>
        </Button>
    </FormControl> 
    </Box>  
    </>
  );
};

export default Login;