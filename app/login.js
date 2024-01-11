import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal, Modal,
  ButtonIcon, Center, View, Image, HStack, Divider, Handle, FormControlLabel, FormControlLabelText, AlertText, AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  ButtonGroup,
  Alert, ModalBackdrop, toggleAlert,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { useNavigation, Link } from "expo-router";
import { loginUser } from "../actions/AuthAction"
import { storeData } from "../utils/localStorage";
import Toast from 'react-native-toast-message'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const login = () => {
    if (email && password) {
      loginUser(email, password)
        .then(async (user) => {
          // Check if the user is an admin
          if (user.status === 'admin') {
            // Save the admin status to AsyncStorage
            await storeData('adminStatus', true);
            // Navigate to the admin page
            navigation.replace('(AdminTabs)');
          } else {
            // Save the admin status to AsyncStorage (optional, for future reference)
            await storeData('adminStatus', false);
            // Navigate to the regular user page
            navigation.replace('(tabs)');
          }
        })
        .catch((error) => {
          console.log("Error", error.message);
          setFormError("Email atau Password salah, Harap masukan Email atau Password dengan benar");
          toggleModal();
        });
    } else {
      setFormError('Harap isi form login dengan lengkap dan benar');
      toggleAlert("");
      setShowAlertDialog(true);
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
        >
          <Box alignItems="center"  >
            <Image role="img" alt="hello" w={117} h={121} mb={10} source={require('../assets/logotelport.png')} />
          </Box>
          
          {/* Email Input */}
          <FormControl minWidth="$80" isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <VStack space="md" marginTop={10}>
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
                marginBottom={20}
                borderColor='#021C35'
              >
                <InputField value={email} type="text" placeholder="Masukkan Email" onChangeText={(value) => setEmail(value)} />
              </Input>
            </VStack>
          </FormControl>
          
          {/* Password Input */}
          <FormControl minWidth="$80" isRequired={true}>
            <FormControlLabel>
              <FormControlLabelText>Pasword</FormControlLabelText>
            </FormControlLabel>
            <VStack space="md" marginTop={10}>
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
                marginBottom={20}
                borderColor='#021C35'>
                <InputField type={showPassword ? "text" : "password"} placeholder="Masukkan Password" onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                  value={password}
              />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color={'blue'}
                  />
                </InputSlot>
              </Input>
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
            <Text bold color="#FFFFFF">Login</Text>
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
            <Text bold color="#FFFFFF">Register</Text>
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
    </>
  );
};

export default Login;
