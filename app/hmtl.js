import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMTL = () => {
    return (
        <>
            <Header title={"HMTL"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HMTL</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMTL;
