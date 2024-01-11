import { Center, Heading, Image, Text } from "@gluestack-ui/themed";
import { Header } from "../components";

const Sleep = () => {
    return (
        <>
            <Header title={"Sleep Tech"} />
            <Center>
                <Heading>Sleep Tech</Heading>

                <Image
                    source={{ uri:
                    "https://www.verywellhealth.com/thmb/OivCHCtOdfCw9oSlhww8AHIYaQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-925426264-037019ccc1d5466288605ff6d9a1f023.jpg" }}
                    alt="Gambar Sleep Tech"
                    style={{ width: 500, height: 200, borderRadius: 8, marginVertical: 20 }}
                />

                <Text>
                    Sleep Tech mengacu pada penggunaan teknologi dalam pemantauan dan
                    perbaikan kualitas tidur. Teknologi ini dapat mencakup perangkat keras
                    dan perangkat lunak yang dirancang untuk membantu individu tidur lebih nyenyak.
                </Text>
            </Center>
        </>
    );
};

export default Sleep;
