import { Center, Heading, Image, Text, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import React from "react";

const Sleep = () => {
    return (
        <ScrollView>
        <>
            <Header title={"Sleep Tech"} />
            <Center>
                <Heading>Sleep Tech</Heading>

                <Image
                    source={{ uri:
                    "https://www.verywellhealth.com/thmb/OivCHCtOdfCw9oSlhww8AHIYaQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-925426264-037019ccc1d5466288605ff6d9a1f023.jpg" }}
                    alt="Gambar Sleep Tech"
                    style={{ width: 500, height: 200, marginVertical: 20 }}
                />

                <Text>
                "Sleep tech" atau teknologi tidur merujuk pada berbagai inovasi
                teknologi yang dirancang untuk membantu memahami, meningkatkan, atau 
                mengoptimalkan kualitas tidur seseorang. Ini mencakup perangkat keras dan perangkat lunak yang
                 dirancang untuk memantau, menganalisis, dan memengaruhi pola tidur.
                </Text>
            </Center>
        </>
        </ScrollView>
    );
};

export default Sleep;
