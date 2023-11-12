import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



const NotificationScreen = () => {
  const dummyNotifications = [
    { id: '1', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Lomba Desain Poster hanya sampai 2 November 2023 ' },
    { id: '2', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment Panitia PKKMB hanya sampai 7 Agustus 2023.' },
    { id: '3', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Seminar hanya sampai 12 Agustus 2023.' },
    { id: '4', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment UKM ECITTS hanya sampai 1 Januari 2024.' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifikasi</Text>
      <FlatList
        data={dummyNotifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notificationItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    color: 'gray',
  },
});

export default NotificationScreen;