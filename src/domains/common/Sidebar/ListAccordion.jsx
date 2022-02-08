import React, { useMemo, useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  parentListItem: {},
  childListItem: {},
  listItemText: {
    color: theme.colors.black.medium,
    textAlign: (props) => props.isRtl && "right",
  },
  subList: {
    marginLeft: 10,
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    margin: 0,
    width: "120%",
  },
  selectedText: {
    color: theme.colors.white.main,
  },
  marginLeftIcon: {
    marginLeft: 50,
  },
  hidden: {
    display: "none",
  },
}));

const ListAccordion = (props) => {
  const { content, isRtl } = props;
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return content.subList ? (
    <div>
      <ListItem
        button
        key={content.title}
        onClick={(e) => {
          setOpen(!open);
        }}
        disabled={content.disabled}
        className={clsx({
          [classes.selected]: location.pathname.includes(content.route),
          [classes.hidden]: content.disabled,
        })}
      >
        {content.icon && <ListItemIcon>{content.icon}</ListItemIcon>}
        <ListItemText
          className={classes.listItemText}
          primary={
            <Box
              fontWeight='bold'
              className={clsx(classes.listItemText, {
                [classes.selectedText]: location.pathname.includes(
                  content.route
                ),
              })}
            >
              {content.title}
            </Box>
          }
        />
        {open ? (
          <ArrowDropDownIcon />
        ) : (
          <ArrowLeftIcon
            className={clsx({
              [classes.selectedText]: location.pathname.includes(content.route),
            })}
          />
        )}
      </ListItem>
      {!content.disabled && <Divider style={{ marginLeft: -20 }} />}
      {open && (
        <List className={classes.subList}>
          {content.subList.map((content) => (
            <ListAccordion
              content={content}
              key={content.title}
              isRtl={isRtl}
            />
          ))}
        </List>
      )}
    </div>
  ) : (
    <>
      <ListItem
        className={classes.childListItem}
        component={Link}
        key={content.title}
        to={content.route}
        disabled={content.disabled}
        className={clsx({
          [classes.selected]: location.pathname.includes(content.keyWord),
          [classes.hidden]: content.disabled,
        })}
      >
        <ListItemIcon>{content.icon}</ListItemIcon>
        <ListItemText
          className={clsx(classes.listItemText, {
            [classes.selectedText]: location.pathname.includes(content.keyWord),
          })}
          primary={<Box>{content.title}</Box>}
        />
      </ListItem>
      {!content.disabled && <Divider style={{ marginLeft: -20 }} />}
    </>
  );
};

export default ListAccordion;
