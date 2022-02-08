import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { SIDEBAR_LINKS } from "./constants";
import ListAccordion from "./ListAccordion";
import { useUserSettingsContext } from "../../../Context/UserSettings/useUserSettingsContext";
import { Box } from "@material-ui/core";
import { DRAWER_WIDTH as drawerWidth } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    background: theme.colors.background.main,
    position: "fixed",
    height: 100,
    width: drawerWidth - 1,
    zIndex: 1,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.colors.background.main,
    overflowX: "hidden",
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: "24px",
  },
  mainList: {
    marginTop: 100,
  },
}));

export default function PermanentDrawerLeft(props) {
  const { isRtl } = useUserSettingsContext();
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={isRtl ? "right" : "left"}
      >
        <Box className={classes.logo}>
          <Box className={classes.logoContainer}>
            <img
              src={require("../../../assets/images/carServicesLogo.jpeg")}
              height='100px'
            />
          </Box>
        </Box>
        <List className={classes.mainList}>
          {SIDEBAR_LINKS.map((link) => (
            <ListAccordion
              content={link}
              key={link.title}
              isRtl={isRtl}
              addEnabled={link.add}
            />
          ))}
        </List>
      </Drawer>
      <main className={classes.mainBody}>{children}</main>
    </div>
  );
}
