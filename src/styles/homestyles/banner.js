import { styled, Box, Typography } from "@mui/material";
import { colors } from "../themes/theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  width: "94%",
  height: "500px",
  marginTop: "100px",
  background: colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerSection = styled(Box)(({ theme }) => ({
  width: "100%",

  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}));

export const BannerImage = styled("img")(({ theme, src }) => ({
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  marginBottom: "40px",
  marginTop: "auto",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Catamaran",
  fontSize: "2.4rem",
  color: colors.md_black,
  letterSpacing: "4px",
  fontWeight: "900",
}));

export const BannerBody = styled(Typography)(({ theme }) => ({
  fontFamily: "Catamaran",
  fontSize: "1.2rem",
  color: colors.md_light_gray,
  width: "70%",
}));
