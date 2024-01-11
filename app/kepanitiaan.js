import React from 'react';
import { Center, Heading, Image, Box, Text } from "@gluestack-ui/themed";
import { Header } from "../components";
import { View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

const kepanitiaan = () => {
    return (
        <>
            <Header title={"KEPANITIAAN"} />
            <Center flex={1}>
                {/* Baris 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 35, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ukki">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logopkkmb.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">PKKMB</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 2 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 25, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logodies.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">DIESNAT</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
                {/* Baris 3 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 25, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logorc.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">RC</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
                {/* Baris 4 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 25, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logopemira.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">PEMIRA</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default kepanitiaan;
