import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./CFFForm.css";
import Button from "@mui/material/Button";

const CFFForm = () => {
  const [OrderDate, setOrderDate] = useState("");
  const [CustomerNote, setCustomerNote] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [AddressBilling, setAddressBilling] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [AddressShipping, setAddressShipping] = useState("");
  const [CityShipping, setCityShipping] = useState("");
  const [StateShipping, setStateShipping] = useState("");
  const [ZipShipping, setZipShipping] = useState("");
  const [Name, setName] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Total, setTotal] = useState("");
  const [Totalitems, setTotalitems] = useState("");
  const [DedicatedFrom, setDedicatedFrom] = useState("");
  const [DedicatedTo, setDedicatedTo] = useState("");
  const [Error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cff = {
      // OrderDate,
      // CustomerNote,
      FirstName,
      LastName,
      // AddressBilling,
      // City,
      // State,
      // Zip,
      // Email,
      // Phone,
      // AddressShipping,
      // CityShipping,
      // StateShipping,
      // ZipShipping,
      // Name,
      // Quantity,
      // Total,
      // Totalitems,
      // DedicatedFrom,
      // DedicatedTo,
    };
    console.log(cff);

    const response = await fetch("http://localhost:3001/api/cff/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cff),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      // setOrderDate("");
      // setCustomerNote("");
      setFirstName("");
      setLastName("");
      // setAddressBilling("");
      // setCity("");
      // setState("");
      // setZip("");
      // setEmail("");
      // setPhone("");
      // setAddressShipping("");
      // setCityShipping("");
      // setStateShipping("");
      // setZipShipping("");
      // setName("");
      // setQuantity("");
      // setTotal("");
      // setTotalitems("");
      // setDedicatedFrom("");
      // setDedicatedTo("");
      // setError(null);
      console.log("New data added", json);
    }
  };

  return (
    <div>
      <Card className="card-wrapper">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <TextField
              className="w-100 text-wrapper"
              label="First Name"
              variant="outlined"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
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

export default CFFForm;
