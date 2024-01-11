import React, { useEffect } from 'react';
import { Box, Image } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(async () => {
            getUser();
        }, 2000);

        return () => clearTimeout(timeout);

    }, []);

    const getUser = async () => {
        try {
            const userData = await AsyncStorage.getItem("user");
            if (userData) {
                navigation.replace('(tabs)');
            } else {
                navigation.replace('login');
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="white">
            <Box width="100%" height={250}>
                <Image
                    role='img'
                    alt='gambar'
                    resizeMode='contain'
                    flex={1}
                    width={'100%'}
                    height={'100%'}
                    source={require('../assets/logotelport.png')}
                />
            </Box>
        </Box>
    );
};

export default Splash;