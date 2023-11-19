import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { pink500 } from "../../Component/Navbar";
import NavbarDashboard from "./components/navbar";
import Sidebar from "./components/sidebar";
import MagicIcon from "../../assets/Icons/MagicIcon";
import { Route, Routes } from "react-router-dom";
import DashLayout from "./layouts";

type Props = {
  component: React.ReactNode;
};

const DashboardHome = (props: Props) => {
  const { component } = props;
  return (
    <Box position="relative">
      {/* ===================nav==================== */}
      <NavbarDashboard navlist={navlist} />
      <Sidebar />
      <Flex
        border="4px"
        borderColor="white"
        bgColor="gray.200"
        rounded={"1.5rem"}
        mt="4rem"
        ml="5rem"
        style={{ height: "calc(100vh - 4rem)", width: "calc(100vw - 5rem)" }}
        p='1rem'
        pos='fixed'
        overflowY={"auto"}
      >
       <Routes>
        <Route path="/" element={<DashLayout />} />
       </Routes>
      </Flex>
    </Box>
  );
};

const navlist = [
  {
    name: "all products",
    link: "",
  },
  {
    name: "sellers",
    link: "",
  },
  {
    name: "designers",
    link: "",
  },
  {
    name: "programmers",
    link: "",
  },
];

export default DashboardHome;
