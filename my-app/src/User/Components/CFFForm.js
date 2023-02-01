import { useState } from "react";
// import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./CFFForm.css";
import Button from "@mui/material/Button";

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

export default CFFForm;
