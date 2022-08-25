import React from "react";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Text,
  Heading,
  Box,
  VStack,
  Button,
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        minHeight="100vh"
        justifyContent="center"
        px={4}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Welcome to QuizApp</Heading>
          <Text>Click to start your trivia</Text>
          <Button href="/questions">START</Button>
        </VStack>
      </Box>
      <ColorModeSwitch />
    </Center>
  );
}
// Color Switch Component
export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
