import React from 'react';
import { Center, Heading, Text } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Link } from 'expo-router';

const categories = [
  { name: 'ormawa', icon: 'school-outline', label: 'ORMAWA', description: 'Organisasi Mahasiswa' },
  { name: 'ukm', icon: 'people-outline', label: 'UKM', description: 'Unit Kegiatan Mahasiswa' },
  { name: 'lomba', icon: 'trophy-outline', label: 'Lomba', description: 'Kompetisi dan Perlombaan' },
  { name: 'kepanitiaan', icon: 'briefcase-outline', label: 'Kepanitiaan', description: 'Kegiatan Acara Kepanitiaan' },
  { name: 'seminar', icon: 'megaphone-outline', label: 'Seminar', description: 'Kegiatan Diskusi dan Pengetahuan' },
  { name: 'penelitian', icon: 'flask-outline', label: 'Penelitian', description: 'Kegiatan Riset dan Eksplorasi ilmiah' },
];

const Box = ({ children, label, description }) => {
  return (
    <View style={{
      width: '45%',
      aspectRatio: 1,
      borderRadius: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      backgroundColor: 'lightyellow',
      borderStyle: 'solid',
      borderColor: 'yellow',
      borderWidth: 2,
      elevation: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    }}>
      <View style={{ alignItems: 'center' }}>
        {children}
        <Heading mb="$1">{label}</Heading>
      </View>
      <Text textAlign="center" color="#555">{description}</Text>
    </View>
  );
};

const Kategori = () => {
  return (
    <>
      <Header title={"Kategori"} />
      <Center flex={1}>
        {/* Baris 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {categories.slice(0, 2).map((category) => (
            <Box key={category.name} label={category.label} description={category.description}>
              <Link href={`/${category.name}`}>
                <Ionicons name={category.icon} size={40} color="black" />
              </Link>
            </Box>
          ))}
        </View>

        {/* Baris 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {categories.slice(2, 4).map((category) => (
            <Box key={category.name} label={category.label} description={category.description}>
              <Link href={`/${category.name}`}>
                <Ionicons name={category.icon} size={40} color="black" />
              </Link>
            </Box>
          ))}
        </View>

        {/* Baris 3 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {categories.slice(4).map((category) => (
            <Box key={category.name} label={category.label} description={category.description}>
              <Link href={`/${category.name}`}>
                <Ionicons name={category.icon} size={40} color="black" />
              </Link>
            </Box>
          ))}
        </View>
      </Center>
    </>
  );
};

export default Kategori;
