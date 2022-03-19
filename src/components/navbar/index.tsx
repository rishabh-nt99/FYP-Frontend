import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

import Link from "react-router-dom";

const useStyles = makeStyles({
  menuIcon: {
    // border: "solid red 1px",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box margin={0} padding={0} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ padding: "0", margin: "0" }}>
          <Typography variant="caption" sx={{ flexGrow: 1 }}>
            FL.
          </Typography>
          <Box
            justifyContent="center"
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Typography variant="body1" style={{ marginRight: "16px" }}>
              Home
            </Typography>
            <Typography variant="body1" style={{ marginRight: "16px" }}>
              About
            </Typography>
            <Typography variant="body1" style={{ marginRight: "16px" }}>
              Background
            </Typography>
            <Typography variant="body1">Join</Typography>
          </Box>
          <Box
            className={classes.menuIcon}
            sx={{ display: { md: "none", xs: "block" } }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">Try Helper</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
