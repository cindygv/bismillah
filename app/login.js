import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { useNavigation, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginUser } from "../actions/AuthAction"



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
      loginUser(email, password)
        .then((user) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.replace("(tabs)");
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
    navigation.navigate("register");
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
          <VStack space="xl">
            <Center>
              <Heading color="$text900" lineHeight="$md">
                Login User
              </Heading>
            </Center>
            <VStack space="xs">
              <Text color="$text500" lineHeight="$xs">
                Email
              </Text>
              <Input>
                <InputField type="text" onChangeText={(text) => setEmail(text)} // Set email ke dalam state
                  value={email} />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text color="$text500" lineHeight="$xs">
                Password
              </Text>
              <Input textAlign="center">
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
              <Text bold color="white">Login </Text>
            </Button>
            <Button onPress={Register} action="negative">
              <Text bold color="white">Register</Text>
            </Button>
            <Button onPress={() => 
            navigation.navigate("loginAdmin")}>
              <Text bold color="white">Login sebagai admin</Text>
            </Button>
          </VStack>
          <Separator height={10} />
        </FormControl>
      </Box>
    </>
  );
};

export default Login;