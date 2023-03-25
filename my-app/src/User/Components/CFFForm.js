import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./CFFForm.css";
import Button from "@mui/material/Button";
import * as XLSX from "xlsx";
import axios from "axios";
import ReactModal from "react-modal";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CFFForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [AddressBilling, setAddressBilling] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Date, setDate] = useState("");
  const [Gender, setGender] = useState("");
  const [Client_name, setClientname] = useState("");
  const [Error, setError] = useState(null);
  const [jsonExcel, setJsonExcel] = useState("");

  const readExcel = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const headers = rows[0];
        const result = [];

        for (let i = 1; i < rows.length; i++) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = rows[i][j];
          }
          result.push(obj);
        }
        resolve(result);
        setJsonExcel(result);
      };

      reader.onerror = (event) => {
        reject(event);
      };

      reader.readAsBinaryString(file);
    });
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const data = jsonExcel;

    const response = await fetch("http://localhost:8000/api/cff/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    const json = await response.json();

    if (json) {
      alert("File Successfully uploaded!");
    } else {
      alert(response.error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/cff/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        AddressBilling,
        City,
        Date,
        Gender,
        Client_name,
      }),
    });

    const json = await response.json();

    if (json) {
      setFirstName("");
      setLastName("");
      setAddressBilling("");
      setCity("");
      setState("");
      setClientname("");
      setDate("");
      setGender("");
    }
  };

  return (
    <div>
      <Card className="card-wrapper">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="col-xs-4 col-sm-4 col-md-4">
            {/* <TextField
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
            <TextField
              className="w-100 text-wrapper"
              label="Date"
              variant="outlined"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
            <TextField
              className="w-100 text-wrapper"
              label="Gender"
              variant="outlined"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <TextField
              className="w-100 text-wrapper"
              label="Client Name"
              variant="outlined"
              value={Client_name}
              onChange={(e) => setClientname(e.target.value)}
            /> */}

            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />

            <Button
              className="button-handler"
              onClick={handleUpload}
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
            To add a form, please fill out the window with all appropriate
            information.
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
}

//export default CFFForm;
