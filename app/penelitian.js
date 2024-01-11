import { ScrollView, Box, VStack, Text, Image, Heading, Button, HStack, } from "@gluestack-ui/themed";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import React from 'react';
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reservation = () => {

  const handleBoxPress = (screenName) => {
    router.push(screenName);
  };

  return (
    <>
      <Header title={"Penelitian"} />
        <Heading lineHeight={"$5xl"} color="$black" ml={"$5"}>
          Pendaftaran Penelitian
        </Heading>
        <TouchableOpacity onPress={() => handleBoxPress('formpenelitian')}>
          <Box
            w={110}
            h="$100"
            mr="$10"
            bg="$coral"
            ml={19}
            borderRadius="$3xl"
            borderWidth={2}
            alignItems="center"
            softShadow=""
          >
            <Link
              href={{
                pathname: "/formpenelitian"
              }}
            >
              <HStack>
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color="floralwhite"
                  paddingBottom="3"
                />
                <Text color="floralwhite" fontWeight="bold" size="md" pt="$1.5">
                  Form
                </Text>
              </HStack>
            </Link>
          </Box>
        </TouchableOpacity>
        <ScrollView flex={1} backgroundColor="fwhite">
        <TouchableOpacity onPress={() => handleBoxPress('/formspenelitian')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },
              "_dark": {
                bg: "$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../assets/firli2.jpg')}
              />
            </Box>
            <Box>
              <VStack px='$6' pt='$4' pb='$6'>
                <Heading _dark={{ color: "$textLight200" }} size='sm'>
                  Seminar Coding
                </Heading>
                <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
                Seminar coding ini merupakan kesempatan luar biasa bagi para pengembang perangkat lunak, mahasiswa IT, dan para profesional teknologi untuk 
                menjelajahi dunia yang terus berkembang dalam pengodingan dan pemrograman. Dengan fokus pada tren terkini, alat-alat mutakhir, dan praktik terbaik, 
                seminar ini dirancang untuk memberikan wawasan mendalam dan inspirasi kepada peserta.
                </Text>
              </VStack>
            </Box>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBoxPress('DetailPenitipan')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },
              "_dark": {
                bg: "$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../assets/firli2.jpg')}
              />
            </Box>
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{ color: "$textLight200" }} size='sm'>
                Paket Penitipan Hewan
              </Heading>
              <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
                Menyediakan layanan penitipan hewan dengan beberapa kamar pilihan
              </Text>
            </VStack>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Reservation;
