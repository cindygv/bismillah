import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const hmif = () => {
    return (
        <>
            <Header title={"hmif"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman hmif</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default hmif;
