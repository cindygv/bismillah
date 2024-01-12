import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const ukkk = () => {
    return (
        <>
            <Header title={"DPM"} withBack="true" />
            <Center flex={1}>
                <Heading>Halaman DPM</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default ukkk;
