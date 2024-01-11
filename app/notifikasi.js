import React from 'react';
import { VStack, Text, FlatList } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const dummyNotifications = [
    { id: '1', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Sitizen ikuti PEMIRA dilakukan pada tanggal 29-31 Desember 2023.', },
    { id: '2', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment ORMAWA KAHIMA&WAKAHIMA HMSI 2023-2024 pada tanggal 14-20 Desember 2023.', },
    { id: '3', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Kepanitiaan TANJIDOR pada tanggal 9-24 Januari 2024.', },
    { id: '4', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Sitizen ikuti Lomba New Years E-sport pada tanggal 30 Desember 2023.', },
    { id: '5', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment Kepanitiaan PKKMB pada tanggal 10 Juni 2025.' },
    { id: '6', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Seminar Tel-U IISMA WEEK 2024 pada tanggal 9 Januari 2024.', },

  ];

  const handleNotificationPress = (screen) => {
    // Navigasi ke halaman yang ditentukan
    navigation.navigate(screen);
  };

  const renderNotificationItem = ({ item }) => (
    <VStack
      marginBottom={16}
      padding={16}
      borderRadius={8}
      backgroundColor="#e0e0e0"
      onTouchEnd={() => handleNotificationPress('home')}
    >
      <Text fontSize={18} fontWeight="bold" marginBottom={8}>{item.title}</Text>
      <Text fontSize={16} color="gray">{item.message}</Text>
    </VStack>
  );

  return (
    <>
      <Header title={"Notifikasi"} withBack="true" />

      <VStack flex={1} padding={16} >
        <Text fontSize={24} fontWeight="bold" marginBottom={16}>Notifikasi</Text>
        <FlatList
          data={dummyNotifications}
          keyExtractor={item => item.id}
          renderItem={renderNotificationItem}
        />
      </VStack>
    </>
  );
}

export default NotificationScreen;
