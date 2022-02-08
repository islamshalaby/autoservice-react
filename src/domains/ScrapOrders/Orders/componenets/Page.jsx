import React, { useMemo, useState } from "react";
import TableComponent from "../../../common/TableComponent/TableComponent";
import TableExport from "../../../common/TableComponent/TableExport/TableExport";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { nanoid } from "nanoid";
import Slideout from "../../../common/Slideout/Slideout";
import RHFTextField from "../../../common/Fields/RHFTextField";
import TrackOrder from "./TrackOrder";
import LoadingIndicator from "../../../common/LoadingIndicator";

const Page = (props) => {
  const { title, isRtl, data, csvData, columns, fetchItem, deleteItem } = props;
  const [open, setOpen] = useState(null);

  const handleClose = (e) => setOpen(null);

  const options = useMemo(
    () => [
      {
        title: "تعديل",
        callback: (item) => console.log(item),
        icon: EditIcon,
        id: nanoid(),
      },
      {
        title: "متابعة الطلب",
        callback: async (item) => {
          const inquiry = await fetchItem(item.id);
          setOpen(inquiry);
        },
        icon: EditIcon,
        id: nanoid(),
        // disabled: true,
      },
      {
        title: "حذف",
        callback: (item) => deleteItem(item.id),
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
      />

      {open !== null && (
        <Slideout
          placement={"left"}
          open={open !== null}
          onClose={handleClose}
          title={"متابعة الطلب"}
        >
          <TrackOrder inquiry={open} />
        </Slideout>
      )}
    </>
  );
};

export default Page;
