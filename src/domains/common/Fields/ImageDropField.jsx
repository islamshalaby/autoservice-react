import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useMemo, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useCountriesContext } from "../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../LoadingIndicator";
import { post } from "./api";
import { UPLOAD_IMAGE_LINK } from "./constants";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
  clickText: {
    fontWeight: "600",
    cursor: "pointer",
  },
  uploadContainer: {
    width: "80%",
    height: "20vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    background: theme.colors.grey.alabaster,
    border: `2px dashed ${theme.colors.blueGrey.main}`,
    borderRadius: 6,
  },
  orText: {
    fontWeight: "600",
    fontSize: "12px",
    color: theme.colors.blueGrey.main,
  },
  clickBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "center",
    flexDirection: "column",
  },
}));

const UploadIcon = () => {
  return (
    <svg
      width='14'
      height='12'
      viewBox='0 0 14 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5742 1.60547H1.30078C1.18579 1.60547 1.0755 1.65115 0.994184 1.73247C0.91287 1.81378 0.867188 1.92407 0.867188 2.03906V9.84375C0.867188 9.95875 0.91287 10.069 0.994184 10.1503C1.0755 10.2317 1.18579 10.2773 1.30078 10.2773H12.5742C12.6892 10.2773 12.7995 10.2317 12.8808 10.1503C12.9621 10.069 13.0078 9.95875 13.0078 9.84375V2.03906C13.0078 1.92407 12.9621 1.81378 12.8808 1.73247C12.7995 1.65115 12.6892 1.60547 12.5742 1.60547ZM1.30078 0.738281C0.955793 0.738281 0.624934 0.875327 0.38099 1.11927C0.137046 1.36322 0 1.69407 0 2.03906L0 9.84375C0 10.1887 0.137046 10.5196 0.38099 10.7635C0.624934 11.0075 0.955793 11.1445 1.30078 11.1445H12.5742C12.9192 11.1445 13.2501 11.0075 13.494 10.7635C13.738 10.5196 13.875 10.1887 13.875 9.84375V2.03906C13.875 1.69407 13.738 1.36322 13.494 1.11927C13.2501 0.875327 12.9192 0.738281 12.5742 0.738281H1.30078Z'
        fill='#495057'
      />
      <path
        d='M9.23379 5.63438C9.29819 5.57016 9.38116 5.52781 9.47096 5.51334C9.56076 5.49886 9.65283 5.513 9.73415 5.55373L13.0095 7.24215V10.2773H0.868896V9.41012L3.16347 7.36876C3.23435 7.29814 3.32747 7.2542 3.42705 7.2444C3.52662 7.2346 3.62652 7.25954 3.7098 7.31499L6.01652 8.85251L9.23379 5.63525V5.63438Z'
        fill='#495057'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.90405 5.07422C4.07487 5.07422 4.24402 5.04057 4.40184 4.9752C4.55966 4.90983 4.70306 4.81402 4.82384 4.69323C4.94463 4.57244 5.04045 4.42904 5.10582 4.27122C5.17119 4.11341 5.20483 3.94426 5.20483 3.77344C5.20483 3.60262 5.17119 3.43347 5.10582 3.27565C5.04045 3.11783 4.94463 2.97443 4.82384 2.85365C4.70306 2.73286 4.55966 2.63704 4.40184 2.57167C4.24402 2.5063 4.07487 2.47266 3.90405 2.47266C3.55906 2.47266 3.22821 2.6097 2.98426 2.85365C2.74032 3.09759 2.60327 3.42845 2.60327 3.77344C2.60327 4.11843 2.74032 4.44929 2.98426 4.69323C3.22821 4.93717 3.55906 5.07422 3.90405 5.07422Z'
        fill='#495057'
      />
    </svg>
  );
};

const DropzoneArea = ({
  handleOnDrop,
  handleDragOver,
  handleClickToUpload,
  isUploading,
  classes,
}) => {
  return isUploading ? (
    <LoadingIndicator position='static' loadingText='' />
  ) : (
    <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <Box onClick={handleClickToUpload} className={classes.clickBox}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography className={classes.clickText}>
            اضغط او ضع صورة للتحميل
          </Typography>
          <Box mr={1}>
            <UploadIcon />
          </Box>
        </Box>
        <Typography className={classes.orText}>
          {"الحجم المفضل > ٣٠ ميجا"}
        </Typography>
      </Box>
    </div>
  );
};

const ImageDropField = (props) => {
  const { name, allowedFormats, ...rest } = props;
  const classes = useStyles(props);
  const { userId } = useUserSettingsContext();
  const { countryId } = useCountriesContext();
  const inputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const { control, watch, setValue } = useFormContext();

  const handleUpload = async (e) => {
    setIsUploading(true);
    try {
      await post(userId, countryId, e.target.files[0].name);
      setValue("imageField", `${UPLOAD_IMAGE_LINK}${e.target.files[0].name}`);
    } catch (e) {
      console.log(e);
    } finally {
      setIsUploading(false);
    }
  };
  const handleClickToUpload = () => inputRef.current.click();

  const imageValue = watch("imageField");

  return imageValue ? (
    <img src={imageValue} alt='image upload failed' />
  ) : (
    <Box className={classes.uploadContainer}>
      <Controller
        name={name}
        control={control}
        render={(props) => (
          <DropzoneArea
            classes={classes}
            handleOnDrop={handleUpload}
            handleClickToUpload={handleClickToUpload}
            isUploading={isUploading}
          />
        )}
      />
      <input
        type='file'
        name={"imageField"}
        ref={inputRef}
        onChange={handleUpload}
        className={classes.hidden}
      />
    </Box>
  );
};

export default ImageDropField;
