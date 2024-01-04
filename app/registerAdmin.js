import React, { useState } from "react";
import {
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
  Center,
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

const register = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState("");
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

  const onRegisterAdmin = async () => {
    if (email && nama && password) {
      const data = {
        email: email,
        nama: nama,
        password: password,
        status: "admin",
      };

      console.log(data);

      try {
        const admin = await registerAdmin(data, password);
        navigation.replace("loginAdmin");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  const [showAlertDialog, setShowAlertDialog] = React.useState(false)

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
              <Heading color="#010203" lineHeight="$md" mb="$12">
                Register admin
              </Heading>
            </Center>
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
                Email:
              </Text>
              <Input >
                <InputField type="text" placeholder="Ketikan email" value={email}
                  onChangeText={(email) => setEmail(email)} />
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
          <Button onPress={() => {onRegisterAdmin(); setShowAlertDialog(true);}}>
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
                  Isi data diri mu dengan lengkap min! 
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
    </>
  );
};

export default register;