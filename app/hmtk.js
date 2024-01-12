import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMTK = () => {
    return (
        <>
            <Header title={"HMTK"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HMTK</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMTK;
