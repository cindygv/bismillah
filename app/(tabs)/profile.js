import { Heading, Box, Center, Text,  VStack, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@gluestack-ui/themed"

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Box flex={1} bgColor='#CC2936' alignItems='center'>
        <Box flex={1} alignItems="center">
          <Heading marginTop={30}>Profile saya</Heading>
          <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10} 
          source={require('../../assets/firli2.jpg')} />
        </Box>
        <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
          <Box alignItems="center" marginTop={20}>
            <Heading color="#CC2936" fontSize={30}>Allan wibu tzy</Heading>
          </Box>
          <Box marginTop={30} >
            <VStack marginStart={20} >
              <Text fontWeight="bold" fontSize={20}>Nama Lengkap :</Text>
              <Text fontSize={15}>Allan Firli Cahyani Gracya Gare</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>NIM :</Text>
              <Text fontSize={15}>1204212001</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Angkatan :</Text>
              <Text fontSize={15}>2021</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Prodi :</Text>
              <Text fontSize={15}>Sistem Informasi</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>No Telepon :</Text>
              <Text fontSize={15}>08123456789</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Asal Kota :</Text>
              <Text fontSize={15}>Surabaya bagian tersakiti</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Hobi :</Text>
              <Text fontSize={15}>Membaca buku dan menonton anime</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Riwayat Kegiatan :</Text>
              <Text fontSize={15}>Pernah mengikuti oprec HIMA</Text>
            </VStack>
            
          </Box>
        </Box>
      </Box>
    </ScrollView>


  )
}

export default Profile;