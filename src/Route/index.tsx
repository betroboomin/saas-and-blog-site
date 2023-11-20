import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/home/Home";
import About from "../Pages/about/About";
import BasicLayout from "../Layouts/BasicLayout";
import AuthRoute from "./authRoute";
import Login from "../Pages/auth/Login";
import PagesWithNav from "./pagesWithNav";
import DashboardRoute from "./dashboardRoute";

// type Props = {}
export const navbool = false;
const Routing = () => {
  const [isNav, setIsNav] = useState(navbool);
  console.log(isNav);
  const location = useLocation();

  console.log(location.pathname);
  return (
    <Box>
      {/* {
        isNav && <PagesWithNav isNav={setIsNav} />
      } */}

      <Routes>
        <Route
          path="en/*"
          element={
            <BasicLayout>
              <PagesWithNav isNav={setIsNav} />
            </BasicLayout>
          }
        ></Route>
        <Route path="ENo/*" element={<AuthRoute isNav={setIsNav} />}></Route>
        <Route path="dashboard/*" element={<DashboardRoute />} />
      </Routes>

     
    </Box>
  );
};

export default Routing;
