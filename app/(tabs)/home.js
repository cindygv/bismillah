import {
    FlatList,
} from "react-native";
import React, { useState } from "react";
import {
    Box,
    Image,
    Text,
    Pressable,
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    Heading,
    ModalCloseButton,
    Icon,
    CloseIcon,
    ModalBody,
    ModalFooter,
    Button,
    ButtonText,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Link } from "expo-router";

const datas = [
    {
        id: 1,
        link: "/infoposter",
        title: "Lomba Diesnatalis ITTelkom Surabaya",
        image: "https://pbs.twimg.com/media/EeyfwHDX0AArN5t.jpg",
    },
    {
        id: 2,
        link: "/infoposter",
        title: "Program Pelatihan ITTelkom Surabaya",
        image:
            "https://ppm.ittelkom-sby.ac.id/wp-content/uploads/2023/06/ITTS-Academy-2023.jpg",
    },
    {
        id: 3,
        link: "/infoposter",
        title: "Lomba Essay ITTelkom Surabaya",
        image:
            "https://1.bp.blogspot.com/-DeuF2gMjopM/YC9Du_ijhuI/AAAAAAAAXEU/41Tw_SIrQLIVrfh2-QTBkvrIvDoFxHcaQCLcBGAsYHQ/s600/1.png",
    },
];

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <Box>
                <Pressable
                    alignItems="center"
                    padding={10}
                    borderBottomColor="#800000"
                    borderBottomWidth={10}
                    onPress={() => {
                        setSelectedItem(item);
                        setShowModal(true);
                    }}
                >
                    <Box>
                        <Image source={{ uri: item.image }} alt="home" height={500} width={300} />
                        <Text fontSize={16} paddingTop={10}>
                            {item.title}
                        </Text>
                    </Box>
                </Pressable>
            </Box>
            
        );
    };

    const ModalComponent = ({ selectedItem, onClose }) => {
        return (
            <Modal isOpen={showModal} onClose={onClose}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size="lg">{selectedItem.title}</Heading>
                        <ModalCloseButton onPress={onClose}>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Image source={{ uri: selectedItem.image }} alt="home" height={500} width={300} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            onPress={onClose}
                        >
                            <ButtonText>Cancel</ButtonText>
                        </Button>

                        <Button size="sm" action="positive" borderWidth="$0" >
                            <Link href={selectedItem.link}>
                                <ButtonText>Go</ButtonText>
                            </Link>
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    };

    return (
        <Box>
            <Header title={"Home"} />
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            {selectedItem && (
                <ModalComponent selectedItem={selectedItem} onClose={() => setShowModal(false)} />
            )}
        </Box>
    );
};

export default Home;