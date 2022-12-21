import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import { Link } from "react-router-dom";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Button } from "@material-ui/core";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const copyFn = (event) => {
    navigator.clipboard.writeText("0x25b133AA6D2116893b5e44507f7e40427191be54");
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
    <div className="sidebar">
      <div className="logo">
        <ListAltIcon className="sidebar__twitterIcon" />
        <h2>BitTweet</h2>
      </div>

      <Link to="/">
        <SidebarOption Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/per">
        <SidebarOption Icon={BookmarkBorderIcon} text="Personal" />
      </Link>
      <a
        href="https://goerli.etherscan.io/address/0x98c4FCB3C43b194AB8b277fBac1806B02968F3d2"
        target="_blank"
      >
        <SidebarOption Icon={FormatAlignCenterIcon} text="Live Working" />
      </a>
      <br />
      <Button variant="outlined" onClick={copyFn}>
        ERC-20 Wallet Address
      </Button>
      {/* <Button variant="outlined" onClick={copyFn}>
        BTC Wallet
      </Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied Address"
        action={action}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      />
    </div>
  );
};

export default Sidebar;
