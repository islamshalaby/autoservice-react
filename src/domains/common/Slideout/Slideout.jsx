import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import clx from "clsx";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "mdi-react/CloseIcon";
import { Button } from "@material-ui/core";

const DEFAULT_WIDTH = 500;
const HEADER_HEIGHT = 138;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      // overflow: 'hidden',
      width: (props) => props.width,
    },
    paper: {
      width: (props) => props.width,
    },
    header: (props) => ({
      height: props.headerHeight || HEADER_HEIGHT,
      padding: theme.spacing(3),
      boxShadow: ["0px 4px 15px rgba(224, 224, 224, 0.25)"],
      position: "relative",
    }),
    closeButton: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
    title: (props) => ({
      fontSize: 16,
      color: "#495057",
      marginTop: props.backable && theme.spacing(4),
    }),
    subTitle: {},
    subTitleWrapper: {
      marginTop: theme.spacing(2),
    },
    content: {
      padding: theme.spacing(3),
      // overflow: 'scroll',
      minHeight: (props) =>
        `calc(100% - ${props.headerHeight || HEADER_HEIGHT}px)`,
    },
    backContainer: {
      position: "absolute",
      left: 20,
      top: 0,
      zIndex: 10,
      "& button:hover": {
        background: "#FFFFFF",
      },
      background: "#FFFFFF",
    },
    backText: {
      fontWeight: 600,
      fontSize: 12,
      color: "#ACB5BD",
      paddingLeft: theme.spacing(1),
    },
  }),
  { name: "SlideOut" }
);

function Slideout(props) {
  const {
    backable,
    backOnClick,
    open,
    title,
    subTitle,
    children,
    placement,
    width,
    onClose,
    icon,
    ...rest
  } = props;

  const classes = useStyles(props);

  useEffect(() => {
    try {
      if (window.drift) {
        open ? window.drift.hide() : window.drift.show();
      }
    } catch (e) {
      console.log(e);
    }
  }, [open]);

  return (
    <Drawer
      {...rest}
      anchor={placement}
      open={open}
      onClose={onClose}
      className={clx({ [classes.open]: open })}
      classes={{
        root: classes.root,
        paper: classes.root,
      }}
    >
      <header className={classes.header}>
        <Box className={classes.closeButton}>
          <IconButton onClick={onClose} size='small'>
            <CloseIcon />
          </IconButton>
        </Box>
        {Boolean(icon) && (
          <Box mt={4} mb={2}>
            {icon}
          </Box>
        )}
        <Typography variant='h6' color='initial' className={classes.title}>
          <Box fontWeight='bold'>{title}</Box>
        </Typography>

        <div className={classes.subTitleWrapper}>
          {React.isValidElement(subTitle) ? (
            subTitle
          ) : (
            <Typography
              variant='body2'
              className={clx(classes.subTitle, rest.subTitleClassName)}
              color='textSecondary'
            >
              <Box fontWeight='bold'>{subTitle}</Box>
            </Typography>
          )}
        </div>
      </header>
      <main className={classes.content}>{children}</main>
    </Drawer>
  );
}

Slideout.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.node,
  children: PropTypes.node,
  placement: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.number,
  onClose: PropTypes.func,
  icon: PropTypes.node,
};

Slideout.defaultProps = {
  open: false,
  title: null,
  subTitle: null,
  children: null,
  placement: "right",
  width: DEFAULT_WIDTH,
  onClose: () => null,
  icon: null,
};

export default Slideout;
