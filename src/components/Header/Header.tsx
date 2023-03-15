import styled from "@emotion/styled";
import Occtoo from "../../assets/Logo-Occtoo-dark.png";
import { Flex } from "../Layout/Layout.styles";

const Img = styled.img`
  width: 200px;
`;

export const Header = () => {
  return (
    <Flex
      width="100%"
      justifyContent={"center"}
      padding="20px 0"
      position={"fixed"}
      background="white"
    >
      <Img src={Occtoo} alt="Occtoo Logo" />
    </Flex>
  );
};
