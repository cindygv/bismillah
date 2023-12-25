import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@gluestack-ui/themed"
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from "../../components";

const Profile = () => {
  const navigation = useNavigation();

  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <>
      <Header title={"Profile"} />
      <ScrollView>
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
            <Heading marginTop={30}>Profile saya</Heading>
            <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10}
              source={require('../../assets/firli2.jpg')} />
          </Box>
          <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
              <Pressable onPress={EditProfile}>
                <Icon name="account-edit" size={50} color="#ffffff" />
              </Pressable>
            </HStack>
            <Box marginTop={-20} >
              <VStack marginStart={20} >
                <Heading color="white" fontWeight="bold">Nama Lengkap :</Heading>
                <Text color="white" fontSize={15}>Arda Allan Firli Cindy Tegar</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold" fontSize={20}>NIM :</Heading>
                <Text color="white" fontSize={15}>1204212001</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold" fontSize={20}>Angkatan :</Heading>
                <Text color="white" fontSize={15}>2021</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
              <Heading color="white" fontWeight="bold" fontSize={20}>Prodi :</Heading>
                <Text color="white" fontSize={15}>Sistem Informasi</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
              <Heading color="white" fontWeight="bold" fontSize={20}>No Telepon:</Heading>
                <Text color="white" fontSize={15}>0812123456789</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
              <Heading color="white" fontWeight="bold" fontSize={20}>Asal Kota :</Heading>
                <Text color="white" fontSize={15}>Surabaya</Text>
              </VStack>

              <VStack marginStart={20} marginTop={25} paddingBottom={25}>
              <Heading color="white" fontWeight="bold" fontSize={20}>Riwayat Kegiatan :</Heading>
                <Text color="white" fontSize={15}>Pernah mengikuti HIMA</Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  )
}

export default Profile;