import React from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import paths from "../Constants/paths";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

const AppRoute = () =>
  <Stack>
    <MyNavbar />
    <Routes>
      <Route path={paths.index} element={<HomePage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<Register />} />
    </Routes>
    <Footer />
  </Stack>;

export default AppRoute;
