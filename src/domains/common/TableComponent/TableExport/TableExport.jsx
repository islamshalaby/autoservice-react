import React, { useEffect, useRef, useState } from "react";
import Panel from "../../Panel/Panel";
import { Box, Button, makeStyles } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CheckboxField from "../../Fields/CheckboxField";
import { CSVLink } from "react-csv";
import { exportToCsv } from "../../utils/export";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
  formContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  checkboxesContainer: {},
  submitButton: {
    minHeight: 30,
    maxHeight: 30,
    borderRadius: 6,
    width: 150,
  },
}));

const TableExport = (props) => {
  const { columns, csvTableCells, fileName } = props;
  const classes = useStyles(props);
  const [csvData, setCsvData] = useState([]);
  const formRef = useRef(null);

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (values) => {
    const data = exportToCsv(
      Object.entries(values),
      csvTableCells,
      Object.keys(values)
    );
    setCsvData(data);
  };

  useEffect(() => {
    if (csvData.length) {
      formRef.current.link.click();
      setCsvData([]);
    }
  }, [csvData]);

  return (
    <Panel title='اختار الاعمدة لتحميل البيانات'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.formContainer}>
            <Box className={classes.checkboxesContainer}>
              {columns.map((col) => (
                <CheckboxField
                  name={col.title}
                  label={col.title}
                  key={col.title}
                />
              ))}
            </Box>
            <Button
              className={classes.submitButton}
              variant='contained'
              color='primary'
              type='submit'
            >
              حمّل البيانات
            </Button>
          </Box>
          <CSVLink
            filename={fileName}
            className={classes.hidden}
            ref={formRef}
            data={csvData}
          ></CSVLink>
        </form>
      </FormProvider>
    </Panel>
  );
};

export default TableExport;
