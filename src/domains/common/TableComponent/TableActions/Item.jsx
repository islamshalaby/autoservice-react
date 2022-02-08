import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useActionContext } from "./Actions";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > span:first-child": {
      marginRight: "16px",
    },
  },
  hidden: {
    display: "none",
  },
}));

const ToolTipWrap = ({ message, content }) => {
  return message ? (
    <Tooltip title={message} arrow placement='right'>
      <div>{content}</div>
    </Tooltip>
  ) : (
    content
  );
};

function ActionItem(props) {
  const {
    children,
    icon: Icon,
    loading: loadingProp,
    disabled,
    hidden,
    disabledMessage,
    confirmMessage: confirm,
    confirmDialogProps,
    ...rest
  } = props;
  const [loading, setLoading] = React.useState(loadingProp);
  const { handleClose } = useActionContext();

  const classes = useStyles(props);

  const handleClick = async () => {
    if (props.onClick && typeof props.onClick === "function") {
      setLoading(true);
      try {
        await props.onClick();
      } catch (e) {}
      setLoading(false);
    }
    handleClose();
  };

  return (
    <ToolTipWrap
      message={disabledMessage}
      content={
        <MenuItem
          className={clsx(classes.root, {
            [classes.hidden]: hidden,
          })}
          {...rest}
          disabled={disabled || loading}
          onClick={handleClick}
        >
          <Typography variant='inherit' color='primary'>
            {children}
          </Typography>
          {loading && <CircularProgress size={18} />}
          {React.isValidElement(Icon) &&
            !loading &&
            React.cloneElement(Icon, { size: 18 })}
        </MenuItem>
      }
    />
  );
}

ActionItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  disabledMessage: PropTypes.string,
  confirmMessage: PropTypes.string,
  confirmDialogProps: PropTypes.shape({}),
};

ActionItem.defaultProps = {
  loading: false,
  icon: null,
  children: null,
  disabled: false,
  hidden: false,
  disabledMessage: "",
  confirmMessage: null,
  confirmDialogProps: {},
};

export default ActionItem;
