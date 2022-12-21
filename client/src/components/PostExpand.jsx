import React from "react";

import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../avatar";

import { useParams, Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./PostExpand.css";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const PostExpand = () => {
  const [open, setOpen] = React.useState(false);
  const params = useParams();

  const classes = useStyles();

  const copyFn = (event) => {
    navigator.clipboard.writeText(`${window.location.href}`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="container">
      <Sidebar />

      <div className="marger">
        <h4>{params.content}</h4>
        <br />
        <h4 className="author">
          <i>Author : {params.user}</i>
        </h4>
        <br />

        <Button
          variant="outlined"
          onClick={copyFn}
          startIcon={<FileCopyIcon />}
        >
          Copy Link
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied Text"
          action={action}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        />
        {/* <div className="post__avatar">
        <Avatar
          style={{ width: "100px", height: "100px" }}
          avatarStyle="Circle"
          {...generateRandomAvatarOptions()}
        />
      </div> */}
      </div>
    </div>
  );
};

export default PostExpand;
