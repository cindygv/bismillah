import React, { useState } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View, Alert, Modal, Image,
  Heading,
  FormControl,
  VStack,
  Text,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Button,
  ButtonText,
  Box,
  Alert,
  ModalBackdrop,
  AlertText,
  EyeIcon, EyeOffIcon,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  ButtonGroup,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { registerUser } from "../actions/AuthAction";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");
  const [kegiatan, setKegiatan] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (email && nim && nama && prodi && password) {
      const data = {
        email: email,
        nim: nim,
        nama: nama,
        prodi: prodi,
        kegiatan: kegiatan,
        password: password,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("(tabs)");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("");
    }
  };

  const [showAlertDialog, setShowAlertDialog] = React.useState(false)

  return (
    <>
      <Box
        flex={1}
        alignContent="$center"
        justifyContent="$center"
      >
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
        <Image role="img" alt="hello" w={80} h={80} mb={10} source={require('../assets/logotelport.png')} />
      </Box>
          <VStack space="xl">
            <Heading color="#010203" lineHeight="$md" mb="$12">
              Register
            </Heading>
            <VStack space="xs">
              <Text color="#010203" lineHeight="$xs">
                Nama:
              </Text>
              <Input >
                <InputField type="text" placeholder="Ketikan nama" value={nama}
                  onChangeText={(nama) => setNama(nama)} />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text color="#010203" lineHeight="$xs">
                Nim:
              </Text>
              <Input textAlign="center" >
                <InputField type="text" placeholder="Ketikan nim" value={nim}
                  onChangeText={(nim) => setNim(nim)} />
              </Input>
              <Separator height={10} />
              <Text color="#010203" lineHeight="$xs">
                Email:
              </Text>
              <Input >
                <InputField type="text" placeholder="Ketikan email" value={email}
                  onChangeText={(email) => setEmail(email)} />
              </Input>
              <Separator height={10} />
              <Text color="#010203" lineHeight="$xs">
                Prodi:
              </Text>
              <Input >
                <InputField type="text" placeholder="Ketikan prodi" value={prodi}
                  onChangeText={(prodi) => setProdi(prodi)} />
              </Input>
              <Separator height={10} />
              <Text color="#010203" lineHeight="$xs">
                Kegiatan yang pernah diikuti:
              </Text>
              <Input >
                <InputField type="text" placeholder="Kegiatan kampus yang pernah diikuti" value={kegiatan}
                  onChangeText={(kegiatan) => setKegiatan(kegiatan)} />
              </Input>
              <Separator height={10} />
              <Text color="#010203" lineHeight="$xs">
                Password:
              </Text>
              <Input textAlign="center" mb="$12" >
                <InputField type={showPassword ? "text" : "password" } placeholder="Ketikan password" value={password}
                  onChangeText={(password) => setPassword(password)} />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
          </VStack>
          <Separator height={10} />
          <Button onPress={() => { onRegister(); setShowAlertDialog(true); }}>
            <ButtonText color="#ffffff">Register</ButtonText>
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
                <Heading size="lg">Data tidak lengkap</Heading>
              </AlertDialogHeader>
              <AlertDialogBody>
                <Text size="sm">
                  Tel-Utizen! Isi data dirimu dengan lengkap ya! 
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

export default Register;
