import React from 'react';
import { Center, Heading, Image, Box, Text } from "@gluestack-ui/themed";
import { Header } from "../components";
import { View } from "react-native";
import { Link } from 'expo-router';

const seminar = () => {
    return (
        <>
            <Header title={"SEMINAR"} />
            <Center flex={1}>
                {/* Baris 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 150, height: 150, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 35, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ukki">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logomsib.png')}   
                                style={{ width: 135, height: 135, resizeMode: 'contain' }}
                                />
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 2 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 150, height: 150, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 25, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoqubisa.png')}   
                                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                />
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default seminar;