import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
<<<<<<< HEAD
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View, Image, HStack, Divider, Handle
=======
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal, Modal,
  ButtonIcon, Center, View, Image, HStack, Divider, Handle, FormControlLabel, FormControlLabelText, AlertText, AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  ButtonGroup,
  Alert, ModalBackdrop, toggleAlert,
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { useNavigation, Link } from "expo-router";
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
<<<<<<< HEAD
=======
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
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
        
        });
<<<<<<< HEAD
=======
    } else {
      setFormError('Harap isi form login dengan lengkap dan benar');
      toggleAlert("");
      setShowAlertDialog(true);
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
    }
  };

  const navigation = useNavigation();
  const Register = () => {
    navigation.navigate("register");
  };

  const [showAlertDialog, setShowAlertDialog] = useState(false);

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
<<<<<<< HEAD
        <Image role="img" alt="hello" w={80} h={80} mb={10} source={require('../assets/logotelport.png')} />
      </Box>
      <Text color="$text900" lineHeight="$lg"> Email</Text>
      <VStack space="md" marginTop={10}>
=======
            <Image role="img" alt="hello" w={117} h={121} mb={10} source={require('../assets/logotelport.png')} />
          </Box>
          
          {/* Email Input */}
          <FormControl minWidth="$80" isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <VStack space="md" marginTop={10}>
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
<<<<<<< HEAD
                marginBottom={10}
=======
                marginBottom={20}
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
                borderColor='#021C35'
              >
                <InputField value={email} type="text" placeholder="Masukkan Email" onChangeText={(value) => setEmail(value)} />
              </Input>
            </VStack>
<<<<<<< HEAD
            <Text color="$text900" lineHeight="$lg">Password</Text>
            <VStack space="md">
=======
          </FormControl>
          
          {/* Password Input */}
          <FormControl minWidth="$80" isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText>Pasword</FormControlLabelText>
            </FormControlLabel>
            <VStack space="md" marginTop={10}>
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
<<<<<<< HEAD
                borderColor='#021C35'>
                <InputField type={showPassword ? "text" : "password"} onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                  value={password}
                />
              <InputSlot pr="$3" onPress={handleState}>
=======
                marginBottom={20}
                borderColor='#021C35'>
                <InputField type={showPassword ? "text" : "password"} placeholder="Masukkan Password" onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                  value={password}
              />
                <InputSlot pr="$3" onPress={handleState}>
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color={'blue'}
                  />
                </InputSlot>
              </Input>
<<<<<<< HEAD
              <Divider color="gray" thickness={1} flex={1} />
            </VStack>
            <Button onPress={() => login()} action="negative">
              <Text bold color="white">Login </Text>
            </Button>
            <HStack alignItems="center" my={3}>
              <Divider color="gray" thickness={1} flex={1} />
              <Text color="gray" fontSize={16} px={3}>
                or
              </Text>
              <Divider color="gray" thickness={1} flex={1} />
            </HStack>
            <Button onPress={Register} action="negative">
              <Text bold color="white">Register</Text>
            </Button>
            <HStack alignItems="center" my={3}>
              <Divider color="gray" thickness={1} flex={1} />
              <Text color="gray" fontSize={16} px={3}>
                or
              </Text>
              <Divider color="gray" thickness={1} flex={1} />
            </HStack>
            <Button  onPress={() => 
            navigation.navigate("loginAdmin")}>
              <Text bold color="white">Login sebagai admin</Text>
            </Button>
          <Separator height={10} />
        </FormControl>
      </Box>
=======
            <Divider color="gray" thickness={1} flex={1} />
          </VStack>
          </FormControl>
          
          {/* Login Button */}
          <Button onPress={() => login()} action="negative"
            borderBottomWidth={3}
            borderEndWidth={3}
            borderTopWidth={1}
            borderStartWidth={2}
            rounded={7}
            borderColor='#000000'>
            <Text bold color="white">Login</Text>
          </Button>

                    {/* Divider and Register Button */}
                    <HStack alignItems="center" my={10}>
            <Divider color="gray" thickness={1} flex={1} />
            <Text color="gray" fontSize={16} px={3}>
              or
            </Text>
            <Divider color="gray" thickness={1} flex={1} />
          </HStack>
          
          {/* Register Button */}
          <Button onPress={Register} action="negative" borderBottomWidth={3}
            borderEndWidth={3}
            borderTopWidth={1}
            borderStartWidth={2}
            rounded={7}
            borderColor='#000000'>
            <Text bold color="white">Register</Text>
          </Button>
          <AlertDialog
              isOpen={showAlertDialog}
              onClose={() => {
                setShowAlertDialog(false)
              }}
            >
              <AlertDialogBackdrop />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <Heading size="lg">DATA TIDAK LENGKAP</Heading>
                </AlertDialogHeader>
                <AlertDialogBody>
                  <Text size="sm">
                    Tel-Utizen! Kamu harus isi email dan passwordnya! 
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <ButtonGroup space="lg">
                    <Button
                      variant="outline"
                      action="secondary"
                      onPress={() => {
                        setShowAlertDialog(false)
                      }}
                    >
                      <ButtonText>OK!</ButtonText>
                    </Button>
                  </ButtonGroup>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </FormControl>
        </Box>
      <Alert isOpen={showAlert} onClose={() => setShowAlert(false)}>
        <ModalBackdrop />
        <AlertText>{alertMessage}</AlertText>
      </Alert>
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
    </>
  );
};

export default Login;
