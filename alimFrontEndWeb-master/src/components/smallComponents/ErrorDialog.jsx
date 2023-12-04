import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Icon,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorDialog = ({ open, onClose, errorMsg }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Error
        <Icon sx={{ marginLeft: "10px" }} color="error">
          <ErrorIcon />
        </Icon>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* <Icon
            color="error"
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          >
            <ErrorIcon fontSize="small" />
          </Icon> */}
          {errorMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog