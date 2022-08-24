import logo from "../../logo.svg";
import {
  Box,
  Image,
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Button,
} from "native-base";

function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      minHeight="100vh"
      justifyContent="center"
      px={4}
    >
      <VStack space={5} alignItems="center">
        <Image
          source={{ uri: logo }}
          resizeMode="contain"
          size={220}
          alt="NativeBase logo"
        />
        <Heading size="lg">Welcome to QuizApp</Heading>
        <Text>
          Click to start your trivia
        </Text>
        <Button href="/question">START</Button>
      </VStack>
        <ToggleDarkMode />
    </Box>
  );
}

export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignSelf='center' marginY={0} marginTop={10}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default Home;