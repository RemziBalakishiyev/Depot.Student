import React from "react";
import Navbar from "../../components/headers/Navbar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "center",
      }}
    >
      <Navbar></Navbar>
      <Outlet />
    </Stack>
  );
}

export default Layout;
