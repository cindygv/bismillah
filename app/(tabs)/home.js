import {
    FlatList,
} from "react-native";
import { Box, Image, Text, Pressable } from "@gluestack-ui/themed";
import { Header } from "../../components";

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Open Recruitment Panitia PKKMB ITTelkom Surabaya",
        image:
            "https://pbs.twimg.com/media/E8ZqppRVkAMliJY?format=jpg&name=large",
    },
    {
        id: 2,
        title: "Lomba Diesnatalis ITTelkom Surabaya",
        image:
            "https://pbs.twimg.com/media/EeyfwHDX0AArN5t.jpg",
    },
    {
        id: 3,
        title:
            "Program Pelatihan ITTelkom Surabaya",
        image: 
            "https://ppm.ittelkom-sby.ac.id/wp-content/uploads/2023/06/ITTS-Academy-2023.jpg",
    },
    {
        id: 4,
        title: "Lomba Essay ITTelkom Surabaya",
        image:
            "https://1.bp.blogspot.com/-DeuF2gMjopM/YC9Du_ijhuI/AAAAAAAAXEU/41Tw_SIrQLIVrfh2-QTBkvrIvDoFxHcaQCLcBGAsYHQ/s600/1.png",
    },
];

// Functional Component
const Home = () => {
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <Pressable padding={50} borderBottomColor="#800000" borderBottomWidth={10} onPress={() => alert("Ayo segera join!")}>
                <Box>
                    <Image alt={"nama"} source={{ uri: item.image }} height={500} width={null} />
                    <Text fontSize={18} paddingTop={10} >{item.title}</Text>
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

export default Home;