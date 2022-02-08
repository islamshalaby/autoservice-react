import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = (props) =>
  makeStyles((theme) => {
    return {
      root: {
        position: props.position,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      },
      backdrop: {
        position: props.position,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(255,255,255, 0.4)",
      },
      loadingWrapper: {
        textAlign: "center",
      },
      loading: {
        marginBottom: theme.spacing(2),
      },
      message: {},
    };
  });

function LoadingIndicator(props) {
  const { loadingText, position, size, color, ...rest } = props;
  const classes = useStyles(props)();
  return (
    <div className={classes.root}>
      <div className={classes.backdrop}></div>
      <div className={classes.loadingWrapper}>
        <CircularProgress
          color={color}
          className={clsx({ [classes.loading]: loadingText !== "" })}
          size={size}
        />
        {loadingText && (
          <Typography variant='body1' className={classes.message}>
            {loadingText}
          </Typography>
        )}
      </div>
    </div>
  );
}

LoadingIndicator.propTypes = {
  loadingText: PropTypes.string,
  position: PropTypes.oneOf(["fixed", "sticky", "absolute"]),
  size: PropTypes.number,
  color: PropTypes.oneOf(["primary", "secondary", "success", "error"]),
};

LoadingIndicator.defaultProps = {
  loadingText: "تحميل...",
  position: "fixed",
  size: 50,
  color: "primary",
};

export default LoadingIndicator;
