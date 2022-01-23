import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GenerateText = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	if (loading) {
		return <Spinner />;
	}

	return (
		<Box>
			<Text>Hello my name is ...</Text>
		</Box>
	);
};

export default GenerateText;
