import { Heading, Box, Center, Text,  VStack, ScrollView, HStack } from "@gluestack-ui/themed";
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
          source={require('../../assets/talent.png')} />
        </Box>
        <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
          <Box alignItems="center" marginTop={20}>
            <Heading color="#CC2936" fontSize={30}>About Telport</Heading>
          </Box>
          <Box marginTop={30} >
            <VStack marginStart={20} >
              <Text fontSize={15}>Telport adalah sebuah aplikasi
               atau platform pengembangan bakat 
               dan minat Mahasiswa/i       ITTelkom Surabaya.
              </Text>
              <Center><Text>PROFIL DEVELOPER</Text></Center>
              <Text fontSize={15}></Text>
              <HStack>
              <Image
                source={{
                uri: "https://elearning.ittelkom-sby.ac.id/pluginfile.php/39271/user/icon/eguru/f1?rev=3552863",
                }}
              />
              <Text>arda</Text>
              </HStack>
              <HStack>
              <Image
                source={{
                uri: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/363840845_1029861898425637_3235367240204175090_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=q36Zgf9QvqYAX_TR2TS&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzE2NzY5NTgwNzg3OTQzMjk5Mw%3D%3D.2-ccb7-5&oh=00_AfBP_50NnzS9yUGd4Z28wi0didQCWJBvNU3U0vL2fJVjFA&oe=65563AEA&_nc_sid=fc8dfb1080w",
                }}
              />
              <Text>alan</Text>
              </HStack>
              <HStack>
              <Image
                source={{
                uri: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/241005498_916654708929208_8344366143053612299_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=104&_nc_ohc=f001Tj6X28UAX_04VTm&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjY1MzU4OTEyNjcyMDY0ODk0MA%3D%3D.2-ccb7-5&oh=00_AfB86MEkDNT6LOxoXzbDkJruhwqO553rybbwG9bXkWj0BQ&oe=65549EBC&_nc_sid=ee9879",
                }}
              />
              <Text>firli</Text>
              </HStack>
              <HStack>
              <Image
                source={{
                uri: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/311977143_144874321602958_3057741652907914098_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=110&_nc_ohc=ZLlDjvAp7tIAX9lgm-K&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk1MTc1ODQ2NTE2MzA0MjQxNQ%3D%3D.2-ccb7-5&oh=00_AfCcnb3nM9B0y0L4SvVRREY14i8iDWqpfWhwrYN29dSOHg&oe=65554928&_nc_sid=ee98791080w",
                }}
              />
              <Text>tegar</Text>
              </HStack>
              <HStack>
              <Image
                source={{
                uri: "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/397341004_658752963026079_6488552820332666790_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Px5GMuMbDkkAX_CpsA_&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfBoUTCe1iCfOuk_xi-88RgtQwfPt8Oly-EmZROvq-NQbQ&oe=65565232&_nc_sid=982cc7",
                }}
              />
              <Text>cindy</Text>
              </HStack>
              
            </VStack>
          </Box>
        </Box>
      </Box>
    </ScrollView>


  )
}

export default About;