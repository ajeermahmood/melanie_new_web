"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import { styled } from "@mui/material/styles";

const CommonFormDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleOpen: (text) => {
      setOpen(true);
      setText(text);
    },
  }));

  const StyledBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: #c49f5a;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: #c49f5a;
      }
    }
  `;

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="mt10" align="center">
          {text}
        </DialogTitle>
        <DialogContent>
          <StyledBorderTextField
            className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Tell Us.."
            type="text"
            fullWidth
            multiline
            rows={4}
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="color-gold" onClick={handleClose}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default CommonFormDialog;
