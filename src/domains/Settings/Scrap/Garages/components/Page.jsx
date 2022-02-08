import React, { useMemo, useState } from "react";
import { useUserSettingsContext } from "../../../../../Context/UserSettings/useUserSettingsContext";
import TableComponent from "../../../../common/TableComponent/TableComponent";
import UpdateIcon from "@material-ui/icons/Update";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { nanoid } from "nanoid";
import TableExport from "../../../../common/TableComponent/TableExport/TableExport";
import { Box, makeStyles } from "@material-ui/core";
import Slideout from "../../../../common/Slideout/Slideout";
import FormContainer from "../FormContainer";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: 0,
  },
}));

const Page = (props) => {
  const { isRtl } = useUserSettingsContext();
  const { title, data, columns, csvData, onDelete, updateGarage, isUpdating } =
    props;
  const [open, setOpen] = useState(null);
  const classes = useStyles(props);

  const handleClose = () => setOpen(null);

  const options = useMemo(
    () => [
      {
        title: "تعديل",
        callback: (item) => setOpen(item),
        icon: EditIcon,
        id: nanoid(),
      },
      {
        title: "حذف",
        callback: (item) => onDelete(item.id),
        icon: DeleteForeverIcon,
        id: nanoid(),
      },
    ],
    []
  );

  return (
    <>
      <TableExport
        columns={columns}
        csvTableCells={csvData}
        fileName={`${title}.csv`}
      />
      <TableComponent
        data={data}
        columns={columns}
        options={options}
        firstColumnBold
        alignment={isRtl ? "right" : "left"}
        iconCallback={updateGarage}
        isUpdating={isUpdating}
      />
      {open !== null && (
        <FormContainer
          title={title}
          editObject={open}
          onClose={handleClose}
          classes={{ container: classes.formContainer }}
          buttonText={"تعديل البيانات"}
        />
      )}
    </>
  );
};

export default Page;
