import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Travel Advisor
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Explore New Places
          </Typography>

          <Box
            sx={(theme) => ({
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginRight: theme.spacing(2),
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <SearchIcon />
            </Box>

            <InputBase
              placeholder="Search..."
              sx={(theme) => ({
                color: "inherit",
                width: "100%",
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                [theme.breakpoints.up("md")]: {
                  width: "20ch",
                },
              })}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
