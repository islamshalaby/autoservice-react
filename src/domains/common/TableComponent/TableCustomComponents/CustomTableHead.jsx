import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    background: theme.colors.background.main,
    padding: "29px 15px",
  },
  tableRow: {
    background: theme.colors.white.main,
    "&:hover > td": {
      background: theme.colors.grey.darkAlabaster,
    },
  },
  tableHeadCell: {
    padding: "14px 24px 14px 24px",
    border: "none",
    textTransform: "uppercase",
    color: theme.colors.black.medium,
    fontWeight: 600,
    minWidth: 80,
    maxWidth: 100,
  },
  visuallyHidden: {
    display: "none",
  },
}));

function CustomTableHead(props) {
  const {
    order,
    orderBy,
    columns,
    onRequestSort,
    alignment,
    firstColumnBold,
    options,
  } = props;
  const classes = useStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((col, index) => {
          if (firstColumnBold && index === 0) {
            return (
              <TableCell
                component='th'
                key={col.title}
                align={alignment}
                sortDirection={orderBy === index ? order : false}
                className={clsx(classes.tableHeader, classes.tableHeadCell)}
                style={{ width: 0 }}
              >
                <TableSortLabel
                  active={orderBy === index}
                  direction={orderBy === index ? order : "asc"}
                  onClick={createSortHandler(index)}
                >
                  {col.title}
                  {orderBy === index ? (
                    <span className={classes.visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          } else {
            return (
              <TableCell
                key={col.title}
                align={"center"}
                sortDirection={orderBy === index ? order : false}
                className={clsx(classes.tableHeader, classes.tableHeadCell)}
              >
                {options && index !== columns.length - 1 ? (
                  <TableSortLabel
                    active={orderBy === index}
                    direction={orderBy === index ? order : "asc"}
                    onClick={createSortHandler(index)}
                  >
                    {col.title}
                    {orderBy === index ? (
                      <span className={classes.visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                ) : (
                  col.title
                )}
              </TableCell>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  firstColumnBold: PropTypes.bool,
};

CustomTableHead.defaultProps = {
  firstColumnBold: true,
};

export default CustomTableHead;
