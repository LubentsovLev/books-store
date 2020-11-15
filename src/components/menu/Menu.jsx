import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [Show, setShow] = useState(false);
  const [Selected, setSelected] = useState("");

  return (
    <div>
      <MoreVertIcon onClick={handleClick}></MoreVertIcon>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            setShow(true);
            handleClose();
            setSelected("More info");
          }}
        >
          More info about the book
        </MenuItem>
        <MenuItem
          onClick={() => {
            setShow(true);
            handleClose();
            setSelected("To cart");
          }}
        >
          Add to cart
        </MenuItem>
        <MenuItem
          onClick={() => {
            setShow(false);
            handleClose();
          }}
        >
          Close
        </MenuItem>
      </Menu>
      {Show ? <div className="small_menu_sh_tx">{Selected}</div> : null}
    </div>
  );
}
