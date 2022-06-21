import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent.tsx/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex align="center" mr={2} width={{ base: "40px", md: "auto" }}>
        <Link href="/">
          <Image src="/images/redditFace.svg" height="30px" alt="Reddit" />
        </Link>
        <Link href="/">
          <Image
            src="/images/redditText.svg"
            alt="Reddit"
            height="46px"
            display={{ base: "none", md: "unset" }}
          />
        </Link>
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
