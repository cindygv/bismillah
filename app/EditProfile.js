import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Input, InputField } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@gluestack-ui/themed"
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from "../components";
import { TouchableOpacity } from "react-native";

const EditProfile = () => {
  const [fullName, setFullName] = useState("Arda Allan Firli Cindy Tegar");
  const [address, setAddress] = useState("Surabaya");
  const [phoneNumber, setPhoneNumber] = useState("08123456789");
  const navigation = useNavigation();

  const handleSave = () => {

    console.log("Data saved:", { fullName, address, phoneNumber });


    Alert.alert(
      "Profile Telah diganti !",
      "Profile Anda telah di update.",
      [
        { text: "OK", onPress: () => navigation.navigate('profile') }
      ],
      { cancelable: false }
    );
  };

  return (
    // <>
    // <ScrollView>
    //   <Box flex={1} backgroundColor='#021C35'>
    //     <Box flex={1} alignItems="center">
    //     {/* <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10} 
    //         source={require('../../assets/firli2.jpg')}/> */}
    //       <Heading color='white' fontSize={25}>{fullName}</Heading>
    //     </Box>
    //     <Box flex={1} padding={20} marginTop={50} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
    //       <Input
    //         marginTop={20}
    //         borderWidth={0}
    //         placeholder="Nama Lengkap"
    //         backgroundColor="#f3f3f3"
    //         rounded={10}
    //         onChangeText={(text) => setFullName(text)}
    //       >
    //         <InputField placeholder="Username"  />
    //       </Input>
    //       <Input
    //         marginTop={20}
    //         borderWidth={0}
    //         onChangeText={(text) => setAddress(text)}
    //         backgroundColor="#f3f3f3"
    //         rounded={10}
    //       >
    //         <InputField placeholder="Alamat Lengkap"  />
    //       </Input>
    //       <Input
    //         placeholder="Nomor Hp"
    //         marginTop={20}
    //         borderWidth={0}
    //         backgroundColor="#f3f3f3"
    //         rounded={10}
    //         onChangeText={(text) => setPhoneNumber(text)}
    //       >
    //         <InputField  placeholder="Nomor Hp" />
    //       </Input>
    //       <Button marginTop={50} backgroundColor="#DF9B52" rounded={10} onPress={handleSave}>
    //         <Heading color="white">Save</Heading>
    //       </Button>
    //     </Box>
    //   </Box>
    //   </ScrollView>
    //   </>
    <>
      <Header title={"Edit Profile"} withBack="true" />
      <ScrollView>
        
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
            <Heading marginTop={30}>Profile saya</Heading>
            <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10}
              source={require('../assets/firli2.jpg')} />
          </Box>
          <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
              <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.goBack()}
                            >
                                <Box mr={"$3"}>
                                  <Icon name="account-cancel" size={50} color="#ffffff" />
                                </Box>
                            </TouchableOpacity>
            </HStack>
            <Box marginTop={-20}  >
              <VStack >
                <Heading ml={20} color="white" fontWeight="bold">Nama Lengkap :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Nama Lengkap"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah Nama Lengkap terbaru" />
                </Input>
              </VStack>
              <VStack marginTop={25}>
                <Heading ml={20} color="white" fontWeight="bold" fontSize={20}>NIM :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Nim terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah Nim terbaru" />
                </Input>
              </VStack>
              <VStack marginTop={25}>
                <Heading ml={20} color="white" fontWeight="bold">Angkatan :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Angkatan terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah Angkatan terbaru" />
                </Input>
              </VStack>
              <VStack marginTop={25}>
              <Heading ml={20} color="white" fontWeight="bold">Prodi :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Prodi terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah Prodi terbaru" />
                </Input>
              </VStack>
              <VStack marginTop={25}>
              <Heading ml={20} color="white" fontWeight="bold">No Telepon :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah No Telepon terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah No Telepon terbaru" />
                </Input>
              </VStack>
              <VStack marginTop={25}>
              <Heading ml={20} color="white" fontWeight="bold">Asal Kota :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah No Asal kota terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah No Asal kota terbaru" />
                </Input>
              </VStack>

              <VStack marginTop={25} paddingBottom={25}>
              <Heading ml={20} color="white" fontWeight="bold">Riwayat Kegiatan:</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Riwayat Kegiatan terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setFullName(text)}>
                  <InputField placeholder="Ubah Riwayat Kegiatan terbaru" />
                </Input>
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView >
    </>
  );
}

export default EditProfile;