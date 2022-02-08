import { makeStyles } from "@material-ui/core";
import React from "react";
import PlainForm from "../common/Fields/PlainForm";
import Modal from "../common/Modal";
import NotificationsForm from "./NotificationsForm";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    minWidth: "40vw",
    minHeight: "30vh",
    padding: 0,
  },
  formCard: {
    minHeight: "29.8vh",
  },
  containerOverride: {
    margin: 0,
  },
}));

const NotificationModal = (props) => {
  const { open, onClose, ...rest } = props;

  const classes = useStyles(props);
  return (
    <Modal
      title={"اشعار جديد"}
      open={open}
      onClose={onClose}
      onApprove={() => console.log("add")}
      approveText='ارسل الاشعار'
      classes={{
        modalContent: classes.modalContent,
      }}
      cancelText='الغاء'
    >
      <PlainForm
        classes={{
          cardContainer: classes.formCard,
          container: classes.containerOverride,
        }}
        modal
      >
        <NotificationsForm />
      </PlainForm>
    </Modal>
  );
};

export default NotificationModal;
