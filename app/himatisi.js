import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const himatisi = () => {
    return (
        <>
            <Header title={"himatisi"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HIMATISI</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default himatisi;
