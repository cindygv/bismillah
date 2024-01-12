import React, { useState, useEffect } from "react";
import { Text, Image, Box, VStack, HStack, Heading, Input, InputField, Button, ScrollView, Select, SelectBackdrop, SelectContent, SelectTrigger, SelectDragIndicator, SelectItem, SelectInput, SelectIcon, Icon, SelectPortal, SelectDragIndicatorWrapper, } from "@gluestack-ui/themed";
import { AdminHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import FIREBASE from "../../config/FIREBASE";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminAddCat = () => {
    const [image, setImage] = useState(null);
    const [selectedCategory, setSelectedcategory] = useState('');
    const [Kegiatan, setKegiatan] = useState('');
    const [deadline, setDeadline] = useState("");
    const [contact, setContact] = useState("");
    const [link, setLink] = useState("");
    const [socialmedia, setSocialmedia] = useState("");
    const [isOrmawaSelected, setIsOrmawaSelected] = useState(false);
    const [allowedCategories, setAllowedCategories] = useState(["ORMAWA", "UKM", "KEPANITIAAN", "LOMBA"]);


    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false, // Disable cropping
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);
            if (!result.canceled && result.assets && result.assets[0]) {
                const fileNameArray = result.assets[0].uri.split('/');
                setKegiatan(fileNameArray[fileNameArray.length - 1]);
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error during image picking:', error);
            Alert.alert("Error", "Terjadi kesalahan saat memilih gambar");
        }
    };

    const uploadToFirebase = async () => {
        try {
            // Validation for required fields
            if (!Kegiatan || !sejarah || !visimisi || !strukturorganisasi || !instagram || !selectedCategory || !image) {
                Alert.alert("Peringatan", "Harap isi semua informasi");
                return;
            }
            const
                user = await AsyncStorage.getItem("admin");
            const userData = JSON.parse(user);


            // Assuming you have a 'category' node in your database
            const categoryRef = FIREBASE.database().ref('category');

            // Create a new unique key for the kegiatan
            const id = categoryRef.push().key;

            // Declare storage references
            const storageRef = FIREBASE.storage().ref();
            const imageRef = storageRef.child(`category/${id}`); // Use the same id generated for Realtime Database

            // Convert image to blob
            const response = await fetch(image);
            const blob = await response.blob();

            // Upload image to Firebase Storage
            await imageRef.put(blob);

            // Get the image download URL
            const downloadURL = await imageRef.getDownloadURL();

            // Push the kegiatan data to the database
            await categoryRef.child(id).set({
                categoryId: id,
                category: selectedCategory,
                deadline,
                contact,
                link,
                socialmedia,
                imageUrl: downloadURL,
                timestamp: new Date().toLocaleString('id-ID', {
                    timeZone: 'Asia/Jakarta',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                }),
                user: userData,
            });

            Alert.alert("Sukses", "Kegiatan berhasil ditambahkan");

            // Reset the form fields after successful submission
            setKegiatan('');
            setDeadline('');
            setContact('');
            setLink('');
            setSocialmedia('');
            setSelectedcategory('');
            setImage(null);
        } catch (error) {
            console.error('Error during upload to Firebase:', error);
            Alert.alert("Error", "Terjadi kesalahan saat mengunggah kegiatan");
        }
    };

    useEffect(() => {
        // Menetapkan kategori yang diizinkan berdasarkan kategori yang dipilih
        if (selectedCategory === "ORMAWA") {
            setAllowedCategories(["ORMAWA", "DPM", "BEM", "HMSI"]);
        } else {
            setAllowedCategories(["UKM", "LOMBA", "KEPANITIAAN", "SEMINAR", "PENELITIAN"]);
        }
    }, [selectedCategory]);

    return (
        <>
            <AdminHeader title={"TAMBAH KEGIATAN"} />
            <ScrollView>
                <Box w={"90%"} h={"80%"} alignSelf="center" mt={20}>
                    <Image alignSelf="center" role="img" mt={10} alt="hello" w={200} h={200} mb={1} source={require('../../assets/posteradd.png')} />
                    <Heading alignSelf="center" fontSize={20} mt={15}> MASUKAN INFORMASI KEGIATAN</Heading>
                    <Select>
                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                            <SelectInput placeholder="Pilih Kategori" value={selectedCategory} />
                            <SelectIcon mr="$3">
                                <Ionicons name="pencil" size={25} color="red" />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="ORMAWA" value="ORMAWA" onPress={() => { setSelectedcategory("ORMAWA"); setIsOrmawaSelected(true); }} />
                                <SelectItem label="UKM" value="UKM" onPress={() => setSelectedcategory("UKM")} />
                                <SelectItem label="LOMBA" value="LOMBA" onPress={() => setSelectedcategory("LOMBA")} />
                                <SelectItem label="KEPANITIAAN" value="KEPANITIAAN" onPress={() => setSelectedcategory("KEPANITIAAN")} />
                                <SelectItem label="SEMINAR" value="SEMINAR" onPress={() => setSelectedcategory("SEMINAR")} />
                                <SelectItem label="PENILITIAN" value="PENILITIAN" onPress={() => setSelectedcategory("PENELITIAN")} />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                    <Select>
                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                            <SelectIcon mr="$3">
                                <Ionicons name="pencil" size={25} color="red" />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                {/* Kategori ORMAWA */}
                                {selectedCategory === "ORMAWA" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="DPM" value="DPM" onPress={() => setSelectedcategory("DPM")} />
                                        <SelectItem label="BEM" value="BEM" onPress={() => setSelectedcategory("BEM")} />
                                        <SelectItem label="HMSI" value="HMSI" onPress={() => setSelectedcategory("HMSI")} />
                                    </>
                                )}

                                {/* Kategori UKM */}
                                {selectedCategory === "UKM" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="UKKI" value="UKKI" onPress={() => setSelectedcategory("UKKI")} />
                                        <SelectItem label="CODER" value="CODER" onPress={() => setSelectedcategory("CODER")} />
                                        <SelectItem label="ESPORT" value="ESPORT" onPress={() => setSelectedcategory("ESPORT")} />
                                    </>
                                )}

                                {/* Kategori LOMBA */}
                                {selectedCategory === "LOMBA" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="INFEST" value="INFEST" onPress={() => setSelectedcategory("INFEST")} />
                                        <SelectItem label="IOTTS" value="IOTTS" onPress={() => setSelectedcategory("IOTTS")} />
                                        <SelectItem label="PIM" value="PIM" onPress={() => setSelectedcategory("PIM")} />
                                        <SelectItem label="PKM" value="PKM" onPress={() => setSelectedcategory("PKM")} />
                                        <SelectItem label="INNOVILLAGE" value="INNOVILLAGE" onPress={() => setSelectedcategory("INNOVILLAGE")} />
                                    </>
                                )}

                                {/* Kategori KEPANITIAAN */}
                                {selectedCategory === "KEPANITIAAN" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="PKKMB" value="PKKMB" onPress={() => setSelectedcategory("PKKMB")} />
                                        <SelectItem label="DIESNAT" value="DIESNAT" onPress={() => setSelectedcategory("DIESNAT")} />
                                        <SelectItem label="RC" value="RC" onPress={() => setSelectedcategory("RC")} />
                                        <SelectItem label="PEMIRA" value="PEMIRA" onPress={() => setSelectedcategory("PEMIRA")} />
                                    </>
                                )}
                                {/* Kategori SEMINAR */}
                                {selectedCategory === "SEMINAR" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="QUBISA" value="QUBISA" onPress={() => setSelectedcategory("QUBISA")} />
                                        <SelectItem label="MSIB" value="MSIB" onPress={() => setSelectedcategory("MSIB")} />
                                    </>
                                )}
                                {/* Kategori PENELITIAN */}
                                {selectedCategory === "PENELITIAN" && (
                                    <>
                                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                                            <SelectInput placeholder="Pilih Sub-Kategori" value={selectedCategory} />
                                            <SelectIcon mr="$3">
                                                <Ionicons name="pencil" size={25} color="red" />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectItem label="FTIB" value="FTIB" onPress={() => setSelectedcategory("FTIB")} />
                                        <SelectItem label="FTEIC" value="FTEIC" onPress={() => setSelectedcategory("FTEIC")} />
                                    </>
                                )}
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                    <VStack alignSelf="center" mt={10}>

                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Sejarah" onChangeText={(text) => setDeadline(text)} value={deadline} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Visi Misi" onChangeText={(text) => setContact(text)} value={contact} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Struktur Organisasi" onChangeText={(text) => setLink(text)} value={link} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Instagram" onChangeText={(text) => setSocialmedia(text)} value={socialmedia} />
                        </Input>
                    </VStack>
                    <Button mt={20} bg={"$green400"} onPress={pickImage}>
                        <HStack>
                            <Ionicons name="cloud-upload-outline" size={25} color="black" />
                            <Text ml={10} mt={4} fontSize={17} bold color="black">Unggah Foto Kegiatan</Text>
                        </HStack>

                    </Button>
                    <Button mt={20} bg={"$blue400"} onPress={uploadToFirebase}>
                        <Text bold color="black"> Tambah Kegiatan</Text>
                    </Button>
                </Box>
            </ScrollView>
        </>
    )
}

export default AdminAddCat;