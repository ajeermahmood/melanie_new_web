"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AllDialogs = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="nav-item d-flex justify-content-center mt30">
        <button className="custom-btn" onClick={handleClickOpen}>
          Buying Guide
        </button>
        <button className="custom-btn">Talk To Us</button>
        <button className="custom-btn">List Your Property</button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="mt10" align="center">Premium Buying Guide</DialogTitle>
        <DialogContent>
          <DialogContentText className="font-style-2" fontSize={20} align="center">
            Before you start looking for a home, it&apos;s important to determine
            your budget. This will help you narrow down your search and avoid
            wasting time looking at homes that are out of your price range.
          </DialogContentText>
          <TextField
            className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Your Email"
            type="email"
            fullWidth
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllDialogs;
