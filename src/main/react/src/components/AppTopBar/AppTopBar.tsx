import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {LoginFormDialog} from "../forms/LoginFormDialog/LoginFormDialog";
import {appTopBarStyles as styles} from "./app-top-bar-styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {HAMBURGER} from "../../utility/constants";
import {getAuth, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import {Box} from "@mui/system";
import {AppBar, IconButton, Menu, MenuItem, Toolbar,} from "@mui/material";
import {ROUTER_CONSTANTS} from "../../utility/router-constants";

export const AppTopBar = () => {
  const history = useHistory();
  const auth = getAuth();

  const [currentUserEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  });

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //logic for hamburger menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logic for login modal
  const [open, setOpen] = useState<boolean>(false);

  const handleModalClickOpen = () => {
    setOpen(true);
    handleClose();
  };

  const handleModalClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={styles.box}>
      <AppBar position="sticky" style={styles.appBar}>
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
              <MenuItem 
              component={Link}
              to={ROUTER_CONSTANTS.SEARCH}
              sx={styles.menuItem}
              onClick={handleClose}>
                {HAMBURGER.LIST_ITEM_1}
              </MenuItem>
              {currentUserEmail ? (
                <>
                  <MenuItem onClick={handleLogOut} sx={styles.menuItem}>
                    Wyloguj się
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleModalClickOpen} sx={styles.menuItem}>
                    {HAMBURGER.LIST_ITEM_2}
                  </MenuItem>
                  <MenuItem  
                    component={Link}
                    to="/register"
                    sx={styles.menuItem}
                    onClick={handleClose}
                    >
                    {HAMBURGER.LIST_ITEM_3}
                  </MenuItem>
                </>
              )}
              
            </Box>
          </Menu>
        </Toolbar>
        <LoginFormDialog onClose={handleModalClose} open={open} />
      </AppBar>
    </Box>
  );
};
