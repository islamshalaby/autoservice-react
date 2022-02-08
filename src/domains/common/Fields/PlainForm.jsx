import { Box, Button, Card, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import LoadingIndicator from "../LoadingIndicator";
import Modal from "../Modal";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4),
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    "& > div": {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    maxWidth: 200,
    maxHeight: 40,
    marginTop: 10,
  },
  modalForm: {
    margin: 0,
  },
  // slideoutContent: {
  //   margin: 0,
  // },
  cardContainer: {},

  modalContent: {
    minWidth: "40vw",
    minHeight: "30vh",
    padding: 10,
    "& div": {
      width: "100% !important",
      margin: "0px !important",
    },
    "&::-webkit-scrollbar": {
      width: "5px !important",
    },
  },
  formCard: {
    minHeight: "29.8vh",
  },
  containerOverride: {
    margin: 0,
  },
}));

const PlainForm = (props) => {
  const {
    children,
    onSubmit,
    defaultValues,
    buttonText,
    modal,
    isLoading,
    ...rest
  } = props;
  const classes = useStyles(props);
  const methods = useForm({ defaultValues });
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const submitHandler = async (values) => {
    try {
      await onSubmit(values);
      enqueueSnackbar("تمت العملية بنجاح", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("فشلت العملية", { variant: "error" });
    } finally {
      // reset();
    }
  };

  return (
    <Paper
      elevation={2}
      className={clsx({
        [classes.container]: !rest.editObject,
        [classes.containerOverride]: rest.editObject,
      })}
    >
      <Card
        className={clsx({
          [classes.cardContainer]: !rest.editObject,
          [classes.formCard]: rest.editObject,
        })}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className={classes.formContainer}
          >
            {rest.editObject ? (
              <Modal
                title={rest.title}
                open={rest.editObject !== null}
                onClose={rest.onClose}
                onApprove={handleSubmit(submitHandler)}
                approveText='تعديل البيانات'
                classes={{ modalContent: classes.modalContent }}
                cancelText='الغاء'
              >
                <Box className={classes.modalForm}>
                  {isLoading || isSubmitting ? (
                    <LoadingIndicator position='static' loadingText='' />
                  ) : (
                    children
                  )}
                </Box>
              </Modal>
            ) : (
              <>{children}</>
            )}
            {isSubmitting ? (
              <LoadingIndicator position='static' loadingText='حفظ البيانات' />
            ) : (
              !modal && (
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                >
                  حفظ البيانات
                </Button>
              )
            )}
          </form>
        </FormProvider>
      </Card>
    </Paper>
  );
};

PlainForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  buttonText: PropTypes.string,
  modal: PropTypes.bool,
};

PlainForm.defaultProps = {
  defaultValues: {},
  modal: false,
  buttonText: "",
};

export default PlainForm;
