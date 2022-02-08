import {
  Box,
  Button,
  IconButton,
  Link,
  MenuItem,
  Popover,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link as NavLink } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import { useCountriesContext } from "../../../Context/Countries/useCountriesContext";
import { makeStyles } from "@material-ui/styles";
import { capitalizeFirstLetter } from "../utils/string";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import AdModal from "../../Ads/AdModal";
import NotificationModal from "../../Notifications/NotificationModal";

const useStyles = makeStyles((theme) => ({
  popoverItem: {
    padding: "10px",
  },
  actionGroup: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  adButton: {
    background: theme.colors.green.dark,
    width: "50%",
    color: "white",
    minHeight: "80%",
    marginLeft: theme.spacing(1),
    "& > span > span": {
      marginLeft: 5,
    },
    "& .MuiButton-startIcon": {
      marginRight: 0,
    },
    "&:hover": {
      background: theme.colors.green.dark,
    },
  },
  notificationButton: {
    background: theme.colors.yellow.dark,
    color: "white",
    minHeight: "80%",
    width: "50%",
    "& > span > span": {
      marginLeft: 5,
    },
    "& .MuiButton-startIcon": {
      marginRight: 0,
    },
    "&:hover": {
      background: theme.colors.yellow.dark,
    },
  },
  modalContent: {
    padding: "0 !important",
  },
}));

const HeaderActions = (props) => {
  const { countries, countryId, setCountryId } = useCountriesContext();
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAd, setOpenAd] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const handleOpenAd = () => setOpenAd(true);
  const handleCloseAd = () => setOpenAd(false);

  const handleOpenNotification = () => setOpenNotification(true);
  const handleCloseNotification = () => setOpenNotification(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!countryId) {
      setCountryId("6184aea034e78407518074e8");
    }
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box className={classes.actionGroup}>
        {/* <Button
          variant='contained'
          className={classes.adButton}
          startIcon={<FeaturedVideoIcon />}
          onClick={handleOpenAd}
        >
          اعلان جديد
        </Button>
        <Button
          variant='contained'
          className={classes.notificationButton}
          startIcon={<NotificationsActiveIcon />}
          onClick={handleOpenNotification}
        >
          اشعار جديد
        </Button> */}
      </Box>

      <Box className={classes.actionGroup}>
        <Select
          value={countryId}
          variant='outlined'
          onChange={(e) => setCountryId(e.target.value)}
          fullWidth
        >
          {countries.map((country) => (
            <MenuItem value={country.value} key={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
        <IconButton
          aria-describedby={id}
          variant='contained'
          onClick={handleClick}
        >
          <SettingsIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Link
            color='inherit'
            variant='body2'
            component={NavLink}
            to='/logout'
          >
            <Box className={classes.popoverItem}>Logout</Box>
          </Link>
        </Popover>
      </Box>
      {openAd && (
        <AdModal
          open={openAd}
          onClose={handleCloseAd}
          classes={{ modalContent: classes.modalContent }}
        />
      )}
      {openNotification && (
        <NotificationModal
          open={openNotification}
          onClose={handleCloseNotification}
          classes={{ modalContent: classes.modalContent }}
        />
      )}
    </>
  );
};

export default HeaderActions;
