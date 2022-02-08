import React from "react";
import {
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));

const CustomHeader = (props) => {
  const classes = useStyles();
  const { setOpen, open } = props;

  return (
    <Toolbar>
      <Tooltip title='وسائل البحث'>
        <IconButton aria-label='filter list' onClick={(e) => setOpen(!open)}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

CustomHeader.propTypes = {
  title: PropTypes.string,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default CustomHeader;
