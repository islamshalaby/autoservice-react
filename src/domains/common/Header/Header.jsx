import {
  Avatar,
  Box,
  Grow,
  Paper,
  Tab,
  Tabs,
  withStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useUserSettingsContext } from "../../../Context/UserSettings/useUserSettingsContext";
import HeaderActions from "./HeaderActions";
import { Link as NavLink, useLocation } from "react-router-dom";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    background: theme.colors.white.main,
    width: `calc(100vw - ${drawerWidth}px)`,
    padding: "10px 0 30px 10px",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    padding: 15,
    paddingRight: (props) => props.isRtl && 50,
    paddingLeft: (props) => !props.isRtl && 50,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: 15,
    width: "60%",
    "& > div": {
      margin: theme.spacing(1),
    },
  },
  selected: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: theme.spacing(1) / 2,
    "& > span": {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: 2,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.colors.blueGrey.main,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(14),
    minWidth: "auto",
    marginRight: theme.spacing(3),
    paddingBottom: 20,
    "&.active": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      // borderBottomWidth: 4solid',
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  selected: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}))((props) => <Tab disableRipple {...props} />);

const Header = (props) => {
  const { isRtl } = useUserSettingsContext();
  const { tabs, title = "" } = props;
  const classes = useStyles((props = { ...props, isRtl }));

  const location = useLocation();

  const selectedLocation = React.useMemo(() => {
    if (!tabs || tabs.length === 0) {
      return null;
    }

    const currentTab = tabs.find((tab) => location.pathname.includes(tab.to));
    return currentTab || null;
  }, [location.pathname]);

  return (
    <Paper elevation={3}>
      <Box className={classes.headerWrapper}>
        <Box className={classes.title}>
          {tabs && tabs.length ? selectedLocation.title : title}
        </Box>
        <Box className={classes.actions}>
          <HeaderActions />
        </Box>
      </Box>
      {tabs && tabs.length > 0 && (
        <Grow in={true}>
          <StyledTabs textColor='primary' value={selectedLocation.to}>
            {tabs.map((tab) => (
              <StyledTab
                classes={{ selected: classes.selected }}
                label={tab.title}
                value={tab.to}
                key={tab.title}
                activeClassName={classes.selected}
                component={NavLink}
                to={tab.to}
              />
            ))}
          </StyledTabs>
        </Grow>
      )}
    </Paper>
  );
};

export default Header;
