import { Center, Container, Flex , HStack, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { CiSquarePlus} from "react-icons/ci"
import { TiWeatherNight , TiAdjustBrightness} from "react-icons/ti";
import { useColorMode } from "@chakra-ui/react";


const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Container maxW={"1140px"} px={4}>
    <Flex
    h={16}
    alignItems={"Center"}
    justifyContent={"space-between"}
    flexDir={{
      base: "column",
      md: "row"
    }}
    >  
      <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
        <HStack spacing={8} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <CiSquarePlus size={20} fontSize={40}/>
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ?  <TiAdjustBrightness size={20} /> : <TiWeatherNight size={20}/>}</Button>
        </HStack>
    </Flex>
  </Container>;
  
};

export default NavBar
