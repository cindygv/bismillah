import React, { useState, useEffect } from "react";
import { Alert } from 'react-native'; // Tambahkan import Alert
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Input, InputField } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getData, storeData } from '../utils/localStorage';
import { Header } from "../components";

const EditProfile = ({ route }) => {
  
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    nim: '',
    prodi: '',
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
            <Box marginTop={-20}>
              <VStack marginTop={25}>
                <Heading ml={20} color="white" fontWeight="bold">Nama Lengkap :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  placeholder="Ubah Nama Lengkap"
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                  onChangeText={(text) => setProfile({ ...profile, nama: text })}
                >
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
                  onChangeText={(text) => setProfile({ ...profile, nim: text })}
                >
                  <InputField placeholder="Ubah Nim terbaru" />
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
                  onChangeText={(text) => setProfile({ ...profile, prodi: text })}
                >
                  <InputField placeholder="Ubah Prodi terbaru" />
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
                  onChangeText={(text) => setProfile({ ...profile, kegiatan: text })}
                >
                  <InputField placeholder="Ubah Riwayat Kegiatan terbaru" />
                </Input>
              </VStack>

              <Button alignSelf={"center"} onPress={handleSave} bg={"#38bdf8"} mt={3} w={"90%"} h={10} borderRadius={10}>
                <Heading color={"white"} fontSize={20}>Save</Heading>
              </Button>
            </Box>
          </Box>
        </Box>
      </ScrollView >
    </>
  );
}

export default EditProfile;
