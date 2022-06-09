import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { AuthModalState } from "../../../atoms/AuthModalAtom";
import Login from "./Login";
import Signup from "./SignUp";

type AuthInputProps = {};

const AuthInput: React.FC<AuthInputProps> = () => {
  const modalState = useRecoilValue(AuthModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <Signup />}
    </Flex>
  );
};
export default AuthInput;
