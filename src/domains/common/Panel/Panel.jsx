import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MuiCollapse from "@material-ui/core/Slide";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import ChevronUpIcon from "mdi-react/ChevronUpIcon";
import CardContent from "@material-ui/core/CardContent";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginBottom: theme.spacing(3),
      overflow: "visible",
      // transition: " border 500ms ease-out",
      margin: "32px",
    },
    expand: {
      // transform: "rotate(0deg)",
      marginLeft: "auto",
      // transition: theme.transitions.create("transform", {
      //   duration: theme.transitions.duration.shortest,
      // }),
    },
    headerBox: {
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing(2),
      lineHeight: 1,
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      rowGap: "5px",
      lineHeight: 1,
    },
    cardContent: {
      paddingTop: theme.spacing(0),
      paddingLeft: (props) => theme.spacing(props.px),
      paddingRight: (props) => theme.spacing(props.px),
    },
    cardHeader: {
      padding: theme.spacing(2, 3),
    },
    actionButton: {
      padding: theme.spacing(1),
      margin: theme.spacing(-1),
    },
  }),
  { name: "Panel" }
);

function Panel(props) {
  const classes = useStyles(props);
  const { title, collapsed, children, px } = props;

  const [expanded, setExpanded] = React.useState(!collapsed);

  return (
    <Card classes={{ root: classes.root }} variant='outlined'>
      <Paper elevation={2}>
        <CardHeader
          action={
            <>
              <IconButton
                className={classes.actionButton}
                onClick={() => setExpanded((state) => !state)}
              >
                {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </IconButton>
            </>
          }
          disableTypography
          classes={{
            root: classes.cardHeader,
          }}
          title={
            <Typography variant='subtitle1'>
              <Box fontWeight='bold' className={classes.headerBox}>
                <span className={classes.titleContainer}>{title}</span>
              </Box>
            </Typography>
          }
        />
        <MuiCollapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent classes={{ root: classes.cardContent }}>
            {children}
          </CardContent>
        </MuiCollapse>
      </Paper>
    </Card>
  );
}

Panel.propTypes = {
  title: PropTypes.node,
  collapsed: PropTypes.bool,
  px: PropTypes.number,
};

Panel.defaultProps = {
  title: null,
  collapsed: false,
  px: 2,
};

export default Panel;
