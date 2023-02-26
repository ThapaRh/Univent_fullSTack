import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./CFFForm.css";
import Button from "@mui/material/Button";
import axios from "axios";
import ReactModal from 'react-modal';
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const CFFForm = () => {
  
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [AddressBilling, setAddressBilling] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cff = { FirstName, LastName, AddressBilling, City, State };
    const response = await axios.post("http://localhost:3001/api/cff", cff);
    if (response.ok) {
      setFirstName("");
      setLastName("");
      setAddressBilling("");
      setCity("");
      setState("");
    }
  };

  return (
    <div>
      <Card className="card-wrapper">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <TextField
              name="FirstName"
              className="w-100 text-wrapper"
              label="First Name"
              variant="outlined"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              name="LastName"
              className="w-100 text-wrapper"
              label="Last Name"
              variant="outlined"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              className="w-100 text-wrapper"
              label="Address Billing"
              variant="outlined"
              value={AddressBilling}
              onChange={(e) => setAddressBilling(e.target.value)}
            />
            <TextField
              className="w-100 text-wrapper"
              label="City"
              variant="outlined"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              className="w-100 text-wrapper"
              label="State"
              variant="outlined"
              value={State}
              onChange={(e) => setState(e.target.value)}
            />
            <Button
              className="button-handler"
              onClick={handleSubmit}
              variant="contained"
            >
              Submit
            </Button>

          </div>
        </form>
      </Card>
    </div>
  );
};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Order
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a form, please fill out the window with all appropriate information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Customer Name"
            type="custName"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="In Honor Of"
            type="Honoree"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="PhoneNumber"
            label="Phone Number"
            type="Number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Order</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

//export default CFFForm;
