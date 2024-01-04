import {
    FlatList,
    StyleSheet,
} from "react-native";
import { Box, Image, Text, Center, Heading, Pressable, HStack } from "@gluestack-ui/themed";
import { Header } from "../../components";

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Open Recruitment Panitia PKKMB ITTelkom Surabaya",
        image:
            "https://pbs.twimg.com/media/E8ZqppRVkAMliJY?format=jpg&name=large",
        alt: "gambar"
    },
    {
        id: 2,
        title: "Lomba Diesnatalis ITTelkom Surabaya",
        image:
            "https://pbs.twimg.com/media/EeyfwHDX0AArN5t.jpg",
        alt: "gambar"
    },
    {
        id: 3,
        title:
            "Program Pelatihan ITTelkom Surabaya",
        image:
            "https://ppm.ittelkom-sby.ac.id/wp-content/uploads/2023/06/ITTS-Academy-2023.jpg",
        alt: "gambar"
    },
    {
        id: 4,
        title: "Lomba Essay ITTelkom Surabaya",
        image:
            "https://1.bp.blogspot.com/-DeuF2gMjopM/YC9Du_ijhuI/AAAAAAAAXEU/41Tw_SIrQLIVrfh2-QTBkvrIvDoFxHcaQCLcBGAsYHQ/s600/1.png",
        alt: "gambar"
    },
];

// Functional Component
const List = () => {
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <Pressable padding={10} borderBottomColor="#800000" borderBottomWidth={10} onPress={() => alert("Pressed")}>
                <Box>
                    <Image source={{ uri: item.image }} style={styles.image} alt="gambar" />
                    <Text style={styles.text}>{item.title}</Text>
                </Box>
            </Pressable>
        );
    };

    return (
        <Box>
            <Header title={"Home"} />
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </Box>
    );
};

// Styles
const styles = StyleSheet.create({
    image: {
        height: 600,
        width: null,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
    },
});

export default List;
