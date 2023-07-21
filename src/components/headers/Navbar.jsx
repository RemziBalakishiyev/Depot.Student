import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FavoriteBorder, PersonOutline } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { styled, Stack } from "@mui/material";

const AppDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Catamaran", sans-serif;
  color: "#000";
  text-align: center;
  margin-left: 1.4rem;
  font-size: 1rem;
  font-weight: 200;
  text-transform: uppercase;
`;

const PriceSpan = styled("span")`
  font-size: 0.8rem;
  font-family: "Catamaran", sans-serif;
`;

function Navbar() {
  const pages = ["home", "about", "contact"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: "60px" }}>
      <Box
        sx={{
          background: "#fff",
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:active": {
                  background: "#000",
                },
              }}
            >
              <NavLink
                to={`/${page == "home" ? "" : page}`}
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "#000" }
                }
              >
                {page}
              </NavLink>
            </Button>
          ))}
        </Box>
        <Box color={"AppWorkspace"}>
          <Typography
            varaint="h5"
            sx={{
              letterSpacing: "10px",
            }}
          >
            DEPOT
          </Typography>
        </Box>

        <Box sx={{ width: "400px" }}>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AppDiv sx={{ color: "#000" }}>
              cart <PriceSpan sx={{ color: "#d4d4d4" }}>(123)</PriceSpan>
            </AppDiv>
            <AppDiv sx={{ color: "#000" }}>
              <FavoriteBorder sx={{ fontSize: "1rem" }} />
              <PriceSpan sx={{ color: "#d4d4d4" }}>(123)</PriceSpan>
            </AppDiv>
            <AppDiv sx={{ color: "#000" }}>
              <PersonOutline sx={{ fontSize: "1rem" }} />
              LOGIN
            </AppDiv>
          </Stack>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
