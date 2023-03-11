import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export const Login = () => {
	return (
		<Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Acesse sua conta</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						Duda Doces 🧁
					</Text>
				</Stack>
				<Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>E-mail</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Senha</FormLabel>
							<Input type="password" />
						</FormControl>
						<Stack spacing={10}>
							<Button bg={"pink.400"} color={"white"} _hover={{ bg: "pink.500" }}>
								Entrar
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};
