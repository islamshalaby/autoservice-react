import React, { useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TablePagination,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import Actions from "./TableActions";
import UpdateIcon from "@material-ui/icons/Update";
import { itemRender } from "./utils";
import CustomPagination from "./TableCustomComponents/CustomPagination";
import { getComparator, descendingComparator, stableSort } from "./utils";
import CustomTableHead from "./TableCustomComponents/CustomTableHead";
import CustomHeader from "./TableCustomComponents/CustomHeader";
import { DRAWER_WIDTH } from "../Sidebar/constants";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    margin: 32,
  },
  root: {
    minWidth: 650,
    maxWidth: `calc(100vw - 400px)`,
    border: `1px solid ${theme.colors.grey.dark}`,
    borderRadius: 6,
    tableLayout: "fixed",
    boxShadow: theme.shadows[0],
  },
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
  tableBodyCell: {
    padding: "10px 24px 10px 24px",
    border: "none",
    minWidth: 80,
    maxWidth: 90,
  },
  paginationContainer: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    margin: "16px 16px 0px 16px",
  },
  paginationContent: {},
  paginationCounter: {
    position: "absolute",
    right: 0,
  },
  paginationActions: {
    margin: 0,
  },
  paginationToolbar: {
    padding: 0,
  },
  forceLtr: {
    direction: "ltr",
  },
  filtersTitle: {
    fontWeight: 600,
    fontSize: 16,
  },
  filters: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "30%",
    padding: "16px 0px 16px 0px",
  },
  tablePagination: {
    width: "230%",
  },
}));

const TableComponent = (props) => {
  const {
    columns,
    data,
    alignment,
    firstColumnBold,
    options,
    initRows = 25,
    iconCallback,
    isUpdating,
  } = props;
  const classes = useStyles(props);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCol, setSelectedCol] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initRows);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(0);
  const [open, setOpen] = useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const readyTableColumns = options
    ? [
        ...columns,
        {
          Header: "",
          id: "options-header",
          accessor: "options",
          width: 80,
          align: "right",
          sticky: "right",
        },
      ]
    : columns;

  const searchData = (searchText) =>
    setFilteredData((prevState) =>
      data.filter((row) =>
        row.cells[selectedCol].data.toLowerCase().includes(searchText)
      )
    );

  useEffect(() => setFilteredData(data), [data]);

  // const filterColumn = (index) =>

  return (
    <div className={classes.tableContainer}>
      <Paper elevation={2}>
        <Card className={classes.root} variant='outlined'>
          <CustomHeader setOpen={setOpen} open={open} />
          {open && (
            <Box className={classes.filters}>
              <TextField
                name='searchText'
                onChange={(e) => searchData(e.target.value)}
                placeholder='  بحث...'
                variant='outlined'
              />
              <Select
                name='selectedCol'
                onChange={(e) => setSelectedCol(e.target.value)}
                defaultValue={0}
                value={selectedCol}
                variant='outlined'
              >
                {columns.map((col, idx) => (
                  <MenuItem value={idx} key={`${col.title}-select`}>
                    {col.title}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
          <Table className={classes.table} aria-label='simple table'>
            <CustomTableHead
              classes={classes}
              columns={readyTableColumns}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              options={!!options}
              alignment={alignment}
            />

            <TableBody key={"table-body"}>
              {(rowsPerPage > 0
                ? stableSort(filteredData, getComparator(order, orderBy)).slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredData
              ).map((row) => (
                <TableRow
                  hover
                  key={`table-body-${row.id}`}
                  className={classes.tableRow}
                >
                  {row.cells.map((cellData, index) => {
                    if (firstColumnBold && index === 0) {
                      return (
                        <TableCell
                          scope='row'
                          className={classes.tableBodyCell}
                          align={alignment}
                          key={cellData.id}
                        >
                          <Box fontWeight='bold'>{cellData.data}</Box>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        align={"center"}
                        className={clsx(classes.tableBodyCell, {
                          [classes.forceLtr]:
                            typeof cellData.data === "string" &&
                            cellData.data.includes("+"), //must return to this
                        })}
                        key={cellData.id}
                      >
                        {typeof cellData.data === "boolean" ? (
                          <IconButton
                            disabled={isUpdating}
                            onClick={(e) =>
                              iconCallback(!cellData.data, row.id)
                            }
                          >
                            {cellData.data ? (
                              <UpdateIcon color='primary' />
                            ) : (
                              <UpdateIcon color='secondary' />
                            )}{" "}
                          </IconButton>
                        ) : (
                          cellData.data
                        )}
                      </TableCell>
                    );
                  })}
                  {options && options.length > 0 && (
                    <TableCell
                      align={alignment}
                      className={classes.tableBodyCell}
                      key={"options-cell"}
                    >
                      <Actions>
                        {options.map(
                          ({ callback, icon: Icon, title, ...rest }) => {
                            return (
                              <Actions.Item
                                icon={<Icon color='primary' />}
                                onClick={() => callback(row)}
                                key={rest.id}
                                // disabled={Boolean(
                                //   row.disabledOptions?.find(
                                //     (item) => item === title
                                //   )
                                // )}
                                // hidden={Boolean(
                                //   row.hiddenOptions?.find((item) => item === title)
                                // )}
                                {...rest}
                              >
                                {title}
                              </Actions.Item>
                            );
                          }
                        )}
                      </Actions>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
            <TablePagination
              classes={{ root: classes.tablePagination }}
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={filteredData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              backIconButtonText={"الصفحة السابقة"}
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} من ${count}`
              }
              labelRowsPerPage={"عدد الصفوف في الصفحة"}
              nextIconButtonText={"الصفحة التالية"}
              ActionsComponent={CustomPagination}
            />
          </Table>
        </Card>
      </Paper>
    </div>
  );
};

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  alignment: PropTypes.string,
  firstColumnBold: PropTypes.bool,
};

TableComponent.defaultProps = {
  alignment: "left",
  firstColumnBold: false,
};

export default TableComponent;
