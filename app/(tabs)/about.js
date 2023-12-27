import { Heading, Box, Center, Text,  VStack, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@gluestack-ui/themed"

const About = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Box flex={1} bgColor='#CC2936' alignItems='center'>
        <Box flex={1} alignItems="center">
          <Heading marginTop={30}></Heading>
          <Image role="img" alt="20" width={120} height={120} rounded={50} marginTop={10} 
          source={require('../../assets/cnn.png')} />
        </Box>
        <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
          <Box alignItems="center" marginTop={20}>
            <Heading color="#CC2936" fontSize={30}>About Telport</Heading>
          </Box>
          <Box marginTop={30} >
            <VStack marginStart={20} >
              <Text fontSize={15}>Telport adalah sebuah aplikasi atau platform pengembangan bakat dan minat Mahasiswa/i IT Telkom Surabaya.
              
              </Text>
            </VStack>
            
          </Box>
        </Box>
      </Box>
    </ScrollView>


  )
}

export default About;