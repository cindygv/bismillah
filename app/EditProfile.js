import React, { useState, useEffect } from "react";
import { Alert } from 'react-native'; 
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Input, InputField, TouchableOpacity, } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getData, storeData } from '../utils/localStorage';
import { Header } from "../components";
import Separator from "../components/separator";

const EditProfile = ({ route }) => {
  
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    kegiatan: '',
  });

  // KODE UNTUK MENDAPATKAN DATA USER
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      if (data) {
        setProfile(data);
      }
    });
  }, []);

  const handleSave = () => {
    console.log("Data saved:", profile);

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
    <>
      <Header title={"Edit Profile"} withBack="true" />
      <ScrollView>
        <Box flex={1} bgColor='#ffffff' alignItems='center'>
          <Box flex={1} alignItems="center">
          <Heading color="red" fontSize={30} marginTop={20}>{profile?.nama}</Heading>
            <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10}
              source={require('../assets/logoprofile.png')} />
          </Box>
          <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
            </HStack>
            <Box marginTop={25} paddingBottom={25}>
              
              <VStack marginTop={20}>
                <Heading ml={20} color="white" fontWeight="bold">Email :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Email terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setProfile({ ...profile, nama: text })}
                >
                  <InputField placeholder="Ubah Email terbaru" />
                </Input>
              </VStack>

              <VStack marginTop={20}>
                <Heading ml={20} color="white" fontWeight="bold" fontSize={20}>Password :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Password terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setProfile({ ...profile, password: text })}
                >
                  <InputField placeholder="Ubah Password terbaru" />
                </Input>
              </VStack>

              <VStack marginTop={20} paddingBottom={20}>
                <Heading ml={20} color="white" fontWeight="bold">Riwayat Kegiatan:</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Riwayat Kegiatan terbaru"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setProfile({ ...profile, kegiatan: text })}
                >
                  <InputField placeholder="Ubah Riwayat Kegiatan terbaru" />
                </Input>
          
              <Button alignSelf={"center"} onPress={handleSave} bg={"#ffff"} mt={3} w={"90%"} h={50} rounded={10} marginTop={40} >
                <Heading color={"red"} fontSize={20}>Save</Heading>
              </Button>

                <Button alignSelf={"center"} onPress={async () => {
                  await editProfile(profile);
                  navigation.goBack();
                }} bg={"#ffffff"} mt={3} w={"90%"} h={50} rounded={10} marginTop={100} >
                  <Heading color={"green"} fontSize={20}>Save</Heading>
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView >
    </>
  );
}

export default EditProfile;
