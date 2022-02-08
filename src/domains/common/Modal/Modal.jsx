import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    dialogActions: {
      backgroundColor: theme.colors.grey.light,
      borderTop: "1px solid " + theme.colors.grey.dark,
      padding: theme.spacing(2, 3),
    },
    modalContent: {
      minWidth: 150,
    },
    exitBtn: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
      padding: 0,
      borderRadius: 6,
    },
  }),
  { name: "Modal" }
);

function Modal(props) {
  const {
    open,
    onClose,
    title,
    children,
    onApprove,
    approveText,
    cancelText,
    showActions,
    showExit,
    isSubmitting,
    buttonProps,
    ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <Dialog
        style={{ direction: "rtl" }}
        open={open}
        maxWidth='md'
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        {...rest}
      >
        {title && <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>}
        <DialogContent className={classes.modalContent}>
          {children}
        </DialogContent>
        {showActions && (
          <DialogActions className={classes.dialogActions}>
            <Button onClick={onClose} variant='outlined'>
              {cancelText}
            </Button>
            {onApprove && (
              <Button
                onClick={onApprove}
                loading={isSubmitting}
                variant='contained'
                color='primary'
                autoFocus
                {...buttonProps}
              >
                {approveText}
              </Button>
            )}
          </DialogActions>
        )}
        {showExit && (
          <IconButton
            aria-label='delete'
            size='medium'
            className={classes.exitBtn}
            onClick={onClose}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Dialog>
    </React.Fragment>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  approveText: PropTypes.string,
  cancelText: PropTypes.string,
  showActions: PropTypes.bool,
  showExit: PropTypes.bool,
  isSubmitting: PropTypes.bool,
};

Modal.defaultProps = {
  onClose: () => null,
  title: "",
  approveText: "Submit",
  cancelText: "Cancel",
  showActions: true,
  showExit: false,
  isSubmitting: false,
};

export default Modal;
