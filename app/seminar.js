import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Link } from "expo-router";

const Seminar = () => {
    return (
        <>
            <Header title={"Seminar"} />
            <Center flex={1}>
                <Heading>Seminar</Heading>
            </Center>
        </>
    );
};

export default Seminar;