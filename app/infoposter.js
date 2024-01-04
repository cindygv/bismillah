import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const INFO = () => {
    return (
        <>
            <Header title={"INFO POSTER"} withBack="true" />
            <Center flex={1}>
                <Heading>INFO POSTER</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default INFO;
