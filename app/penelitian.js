import {
    Image,
    HStack,
    VStack,
    Text,
    ScrollView,
  } from "@gluestack-ui/themed";
  import { Header } from "../components";
  import { Link } from "expo-router";
  
  const Penelitian = () => {
    return (
      <>
        <Header title={"PENELITIAN"} />

      <ScrollView
            vertical={true} 
            contentContainerStyle={{ paddingVertical: 1 }} >   
    <HStack space={"md"} backgroundColor="lightyellow">
        <Image
        source={require('../assets/sleep.jpeg')}
          alt="Gambar sleep"
          w="$40" 
          h="$40"
        />
        <Link
          href={{
           pathname: "/sleepscreen" 
          }}
        >
        <VStack space="md" >
          <Text>Sleep Tech</Text>
          <Text>Alat pengatur pola tidur</Text>
        </VStack>
      </Link>
    </HStack>
  
    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
       source={require('../assets/makan.jpeg')}
        alt="Gambar Makan"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Analisis Pola Makan</Text>
        <Text>Pola Makanan Manusia</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
        source={require('../assets/taman.jpeg')}
        alt="Gambar Taman"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Taman Teknologi</Text>
        <Text>Taman Masa Depan</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
       source={require('../assets/robot.jpeg')}
        alt="Gambar Robot"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Animal Robotic</Text>
        <Text>Hewan Robot</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow" >
      <Image
        source={require('../assets/cuaca.jpeg')}
        alt="Gambar Cuaca"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Perubahan Siklus Cuaca</Text>
        <Text>Teknologi Pengatur Cuaca</Text>
      </VStack>
    </HStack>
    </ScrollView>
      </>
    );
  };
  
  export default Penelitian;
  