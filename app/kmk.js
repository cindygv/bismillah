import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const kmk = () => {
    return (
        <>
            <Header title={"kmk"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman kmk</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default kmk;
