import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";

const ActionContext = React.createContext();

export const useActionContext = () => {
  const context = React.useContext(ActionContext);
  if (!context) {
    // Error message should be more descriptive
    throw new Error("No context found for Actions");
  }
  return context;
};

const useStyles = makeStyles(
  (theme) => ({
    actionButton: {},
    actionButtonLabel: {},
  }),
  { name: "Actions" }
);

const Actions = (props = {}) => {
  const {
    children,
    disabled,
    menuAnchorOrigin,
    menuTransformOrigin,
    icon,
    menuClasses,
    iconButtonClasses = {},
  } = props;
  const classes = useStyles(props);

  const containsValidElements = React.useMemo(() => {
    if (children && Array.isArray(children)) {
      const validElements = children.filter((element) =>
        React.isValidElement(element)
      );
      return validElements.length > 0;
    }
    return true;
  }, [children]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ActionContext.Provider
      value={{
        anchorEl,
        setAnchorEl,
        open,
        handleClick,
        handleClose,
      }}
    >
      <IconButton
        aria-label='more'
        aria-controls='actions-menu'
        aria-haspopup='true'
        onClick={handleClick}
        className={classes.actionButton}
        classes={{
          label: classes.actionButtonLabel,
          ...iconButtonClasses,
        }}
        disabled={disabled || !containsValidElements}
      >
        {icon}
      </IconButton>
      <Menu
        variant={"menu"}
        elevation={1}
        id='actions-menu'
        anchorEl={anchorEl}
        classes={menuClasses}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={menuAnchorOrigin}
        transformOrigin={menuTransformOrigin}
      >
        {children}
      </Menu>
    </ActionContext.Provider>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Actions.defaultProps = {
  children: null,
  disabled: false,
  menuAnchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  menuTransformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  icon: <DotsVerticalIcon />,
};

export default Actions;
