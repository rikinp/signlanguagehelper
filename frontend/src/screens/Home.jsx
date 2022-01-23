import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Webcam from "../components/Webcam";
import TextBox from "../components/TextBox";
import GenerateText from "../components/GenerateText";

const Home = () => {
	return (
		<Box
			m="1rem"
			d="flex"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
		>
			<Text fontSize="5xl">Sign Language to Text</Text>
			<Webcam />
			<TextBox />
			<GenerateText />
		</Box>
	);
};

export default Home;
