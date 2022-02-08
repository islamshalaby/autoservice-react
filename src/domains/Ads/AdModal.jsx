import { makeStyles } from "@material-ui/core";
import React from "react";
import ImageDropField from "../common/Fields/ImageDropField";
import PlainForm from "../common/Fields/PlainForm";
import SelectField from "../common/Fields/SelectField";
import Modal from "../common/Modal";
import { AD_POSITIONS } from "./constants";

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

const AdModal = (props) => {
  const { open, onClose, ...rest } = props;

  const classes = useStyles(props);
  return (
    <Modal
      title={"اضافة اعلان"}
      open={open}
      onClose={onClose}
      onApprove={() => console.log("add")}
      approveText='اضف الاعلان'
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
        <SelectField name={"position"} options={AD_POSITIONS} fullWidth />
        <ImageDropField name='image' />
      </PlainForm>
    </Modal>
  );
};

export default AdModal;
