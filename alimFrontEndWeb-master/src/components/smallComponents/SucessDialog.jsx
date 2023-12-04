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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessDialog = ({ open, onClose, successMsg }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Success
        <Icon sx={{ marginLeft: "8px" }} color="success">
          <CheckCircleIcon />
        </Icon>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {successMsg}
          {/* <Icon
            color="success"
            style={{ verticalAlign: "middle", marginLeft: "8px" }}
          >
            <CheckCircleIcon fontSize="small" />
          </Icon> */}
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

export default SuccessDialog;
