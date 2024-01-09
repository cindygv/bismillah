import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View, Image,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { useNavigation, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginAdmin } from "../actions/AuthAction"



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    if (email && password) {
      loginAdmin(email, password)
        .then((admin) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.replace("kepanitiaan");
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };


  const navigation = useNavigation();
  const Register = () => {
    navigation.navigate("registerAdmin");
  };
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
          <Box alignItems="center"  >
        <Image role="img" alt="hello" size="lg"  source={require('../assets/logotelport.png')} />
      </Box>
      <VStack space="xl">
            <Center>
              <Heading color="$text900" lineHeight="$2xl">
                Login sebagai Admin
              </Heading>
            </Center>
            <VStack>
              <Text color="$text900" lineHeight="$lg">
                Email
              </Text>
              <Input
                  alignSelf="auto"
                  marginTop={10}
                  borderWidth={1}
                  backgroundColor="#EEEDED"
                  rounded={10}
                  w={"100%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Masukkan Email kamu" />
                </Input>
            </VStack>
            <VStack space="xs">
              <Text color="$text500" lineHeight="$xs">
                Password
              </Text>
              <Input alignSelf="auto"
                  marginTop={10}
                  borderWidth={1}
                  backgroundColor="#EEEDED"
                  rounded={10}
                  w={"100%"}textAlign="center">
                <InputField type={showPassword ? "text" : "password"} onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                  value={password}
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>

            <Button onPress={() => login()} action="negative">
              <Text bold color="white">Login</Text>
            </Button>
            <Button onPress={Register} action="negative" >
              <Text bold color="white">Register</Text>
            </Button>

            {/* <Link style={{ backgroundColor: "black", width: "100%", height: "15%" }} href="/home">
              <Center>
                <Text style={{ color: "white", width: "100%", height: "40px", justifyContent: "center" }}>Login</Text>
              </Center>
            </Link> */}

          </VStack>
          <Separator height={10} />
          {/* <Button size="md" variant="solid" action="negative" isDisabled={false} isFocusVisible={false} >
            <Link href="/register">
              <ButtonText>Register</ButtonText>
            </Link>
            <ButtonIcon />
          </Button> */}
        </FormControl>
      </Box>
    </>
  );
};

export default Login;