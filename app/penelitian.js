import { ScrollView, Box, VStack, Text, Image, Heading, Button, HStack, } from "@gluestack-ui/themed";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import React from 'react';
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Penelitian = () => {

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
        <TouchableOpacity onPress={() => handleBoxPress('detailiot')}>
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
                source={require('../assets/penelitian1.jpeg')}
              />
            </Box>
            <Box>
              <VStack px='$6' pt='$4' pb='$6'>
                <Heading _dark={{ color: "$textLight200" }} size='sm'>
                "Pengaruh Implementasi Teknologi Internet of Things (IoT) terhadap Efisiensi Energi di Lingkungan Rumah Tangga"
                </Heading>
                <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
                Penelitian ini bertujuan untuk mengevaluasi dan menganalisis dampak implementasi teknologi Internet of Things (IoT) terhadap efisiensi energi di lingkungan rumah tangga. Melibatkan survei dan pemantauan langsung di sejumlah rumah tangga, penelitian ini akan menilai bagaimana perangkat yang terhubung ke IoT, seperti thermostat pintar, lampu pintar, dan perangkat lainnya, dapat mengoptimalkan penggunaan energi. Data akan dikumpulkan selama beberapa bulan untuk mengidentifikasi pola penggunaan energi sebelum dan setelah penerapan teknologi IoT. Hasil penelitian diharapkan dapat memberikan wawasan tentang potensi penghematan energi dan dampak positifnya terhadap keberlanjutan di rumah tangga modern.
                </Text>
              </VStack>
            </Box>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBoxPress('detailkecemasan')}>
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
                source={require('../assets/penelitian2.jpeg')}
              />
            </Box>
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{ color: "$textLight200" }} size='sm'>
              "Pengaruh Kecemasan Sosial pada Kesejahteraan Mental Remaja: Sebuah Kajian Longitudinal"
              </Heading>
              <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
              Penelitian ini memiliki tujuan untuk menyelidiki dampak kecemasan sosial pada kesejahteraan mental remaja dalam jangka waktu yang lebih panjang. Dengan menggunakan pendekatan longitudinal, penelitian ini akan mengumpulkan data dari kelompok remaja yang mengalami tingkat kecemasan sosial yang berbeda-beda selama beberapa tahun. 
              </Text>
            </VStack>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Penelitian;
