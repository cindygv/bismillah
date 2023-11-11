import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMSI = () => {
    return (
        <>
            <Header title={"HMSI"} />
            <Center flex={1}>
                <Heading>Halaman HMSI</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMSI;
