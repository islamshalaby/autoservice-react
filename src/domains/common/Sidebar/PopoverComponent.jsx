import { Box, List, makeStyles, Popover, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  // popover: {
  //   overflowX: "unset",
  //   overflowY: "unset",
  //   backgroundColor: "#212429",
  //   marginLeft: theme.spacing(1),
  //   "&::before": {
  //     content: '""',
  //     position: "absolute",
  //     marginLeft: theme.spacing(1),
  //     top: 10,
  //     left: 0,
  //     width: 10,
  //     height: 10,
  //     backgroundColor: "#15181E",
  //     boxShadow: theme.shadows[1],
  //     transform: "translate(-120%, 100%) rotate(225deg)",
  //     clipPath:
  //       "polygon(-5px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + 5px))",
  //     transition:
  //       "opacity 253ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 168ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
  //   },
  // },
}));

const PopoverComponent = (props) => {
  const { id, list, open, anchorEl, onClose } = props;
  const classes = useStyles(props);

  return (
    <Popover
      open={open}
      id={id}
      anchorEl={anchorEl}
      onClose={onClose}
      classes={{ paper: classes.popover }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List>
        {list.map((linkContent) => (
          <ListItem
            key={linkContent.to}
            button
            component={Link}
            className={classes.listItem}
            to={linkContent.to}
            onClick={onClose}
          >
            {linkContent.title}
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};

export default PopoverComponent;
