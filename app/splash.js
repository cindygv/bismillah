import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { getData } from '../utils/localStorage';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getData("user");
            if (userData) {
                navigation.replace('(tabs)');
            } else {
                navigation.navigate('login');
            }
        };

        const timer = setTimeout(fetchData, 3000);

        return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }, [navigation]); // Make sure to include navigation in the dependency array

    return (
        <View style={styles.pages}>
            {/* Your component content */}
        </View>
    );
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
