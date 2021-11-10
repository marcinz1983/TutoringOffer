import { useState } from "react";
import { Link } from "react-router-dom";

import { AppBar, IconButton, Toolbar, Menu, MenuItem } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Box } from "@mui/system";

import logo from "../../assets/logo.png";
import { appTopBarStyles as styles } from "./app-top-bar-styles";
import {HAMBURGER_LIST_ITEM_1, HAMBURGER_LIST_ITEM_2, HAMBURGER_LIST_ITEM_3 } from "../../utility/constants"

export const AppTopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.box}>
      <AppBar
        position="sticky"
        style={styles.appBar}
      >
        <Toolbar sx={styles.toolbar}>
          <Link to="/">
            <img src={logo} alt="DoIT" />
          </Link>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
            sx={styles.menuIconButton}
          >
            <MenuRoundedIcon sx={styles.menuRoundedIcon} />
          </IconButton>
          <Menu
            sx={styles.menu}
            PaperProps={{ style: styles.menuPaper }}
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
            <IconButton
              sx={styles.iconButton}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClose}
              color="primary"
            >
              <HighlightOffOutlinedIcon sx={styles.highlightOffOutlinedIcon} />
            </IconButton>
            <Box>
              <MenuItem sx={styles.menuItem}>{HAMBURGER_LIST_ITEM_1}</MenuItem>
              <MenuItem sx={styles.menuItem}>{HAMBURGER_LIST_ITEM_2}</MenuItem>
              <MenuItem sx={styles.menuItem}>{HAMBURGER_LIST_ITEM_3}</MenuItem>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
