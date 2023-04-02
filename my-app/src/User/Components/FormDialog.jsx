import ReactModal from "react-modal";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useAuth } from "../../hooks/auth-hook";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



export default function FormDialog(props) {
  const [orderDate, setOrderDate] = React.useState(dayjs('2022-04-17'));
    const [open, setOpen] = React.useState(false);
    const [orderNumber, setOrderNumber] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [billingCity, setBillingCity] = useState("");
    const [billingState, setBillingState] = useState("");
    const [billingZipCode, setBillingZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [item, setItem] = useState("");
    const [Gender, setGender] = useState("");
    const [sku, setSKU] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [shippingCity, setShippingCity] = useState("");
    const [shippingState, setShippingState] = useState("");
    const [shippingZipCode, setShippingZipCode] = useState("");
    const [flagName, setFlagName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [totalItems, setTotalItems] = useState("");
    const [dedicatedFrom, setdedicatedFrom] = useState("");
    const [dedicatedTo, setdedicatedTo] = useState("");
    const [customerNotes, setcustomerNotes] = useState("");
    const { token, login, logout, userId } = useAuth();


  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/cff/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
            Authorization: "Bearer " + token
          },
          body: JSON.stringify({
            orderNumber, 
            orderStatus,
            orderDate,
            firstName,
            lastName,
            billingAddress, 
            billingCity, 
            billingZipCode,
            billingState, 
            email, 
            phone, 
            item, 
            Gender, 
            sku, 
            serviceType, 
            shippingAddress, 
            shippingCity, 
            shippingState, 
            shippingZipCode, 
            flagName, 
            quantity, 
            totalItems, 
            dedicatedFrom, 
            dedicatedTo,
            customerNotes,
          }),
        });
    
        const json = await response.json();
    
        if (json) {
          props.onAdd(json);
          setOrderNumber("")
          setOrderStatus("")
          setOrderDate("")
          setFirstName("")
          setLastName("")
          setBillingAddress("")
          setBillingCity("") 
          setBillingZipCode("")
          setBillingState("") 
          setEmail("") 
          setPhone("") 
          setItem("") 
          setGender("") 
          setSKU("") 
          setServiceType("") 
          setShippingAddress("") 
          setShippingCity("") 
          setShippingState("") 
          setShippingZipCode("") 
          setFlagName("") 
          setQuantity("") 
          setTotalItems("") 
          setdedicatedFrom("") 
          setdedicatedTo("")
          setcustomerNotes("")
          setOpen(false);
        }
      };
  
    return (
      <div>
        <Button variant="contained" style={{ height:"3.2rem" }}onClick={handleClickOpen}>
          Add Order
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Order</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a form, please fill out the window with all appropriate
              information.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="orderNumber"
              label="Order Number *"
              type="number"
              fullWidth
              variant="standard"
              value={orderNumber}
              onChange = {(e) => setOrderNumber(e.target.value)} 
            />
            <TextField
              autoFocus
              margin="dense"
              id="orderStatus"
              label="Order Status *"
              type="text"
              fullWidth
              variant="standard"
              value={orderStatus}
              onChange = {(e) => setOrderStatus(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                  label="Order Date"
                  value={orderDate}
                  fullWidth
                  onChange={(newValue) => setOrderDate(newValue)}
                  margin="dense"
                  variant = "standard"
               />
            </DemoContainer>
            </LocalizationProvider>

            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name *"
              type="text"
              fullWidth
              variant="standard"
              value={firstName}
              onChange = {(e) => setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name *"
              type="text"
              fullWidth
              variant="standard"
              value={lastName}
              onChange = {(e) => setLastName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="billingAddresss"
              label="Billing Address *"
              type="text"
              fullWidth
              variant="standard"
              value={billingAddress}
              onChange = {(e) => setBillingAddress(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="billingCity"
              label="Billing City *"
              type="text"
              fullWidth
              variant="standard"
              value={billingCity}
              onChange = {(e) => setBillingCity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="billingState"
              label="Billing State *"
              type="text"
              fullWidth
              variant="standard"
              value={billingState}
              onChange = {(e) => setBillingState(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="billingZipCode"
              label="Zip Code"
              type="Number"
              fullWidth
              variant="standard"
              value={billingZipCode}
              onChange = {(e) => setBillingZipCode(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="customerNotes"
              label="Customer Notes"
              type="text"
              fullWidth
              variant="standard"
              value={customerNotes}
              onChange = {(e) => setcustomerNotes(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email *"
              type="text"
              fullWidth
              variant="standard"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              type="Number"
              fullWidth
              variant="standard"
              value={phone}
              onChange = {(e) => setPhone(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="item"
              label="Item *"
              type="Number"
              fullWidth
              variant="standard"
              value={item}
              onChange = {(e) => setItem(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="sku"
              label="SKU *"
              type="text"
              fullWidth
              variant="standard"
              value={sku}
              onChange = {(e) => setSKU(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="serviceType"
              label="Service Type *"
              type="text"
              fullWidth
              variant="standard"
              value={serviceType}
              onChange = {(e) => setServiceType(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="shippingAddress"
              label="Shipping Address"
              type="text"
              fullWidth
              variant="standard"
              value={shippingAddress}
              onChange = {(e) => setShippingAddress(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="shippingCity"
              label="Shipping City"
              type="text"
              fullWidth
              variant="standard"
              value={shippingCity}
              onChange = {(e) => setShippingCity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="shippingState"
              label="Shipping State"
              type="text"
              fullWidth
              variant="standard"
              value={shippingState}
              onChange = {(e) => setShippingState(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="shippingZipCode"
              label="Shipping ZipCode"
              type="number"
              fullWidth
              variant="standard"
              value={shippingZipCode}
              onChange = {(e) => setShippingZipCode(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="flagName"
              label="Flag Name"
              type="text"
              fullWidth
              variant="standard"
              value={flagName}
              onChange = {(e) => setFlagName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantity *"
              type="number"
              fullWidth
              variant="standard"
              value={quantity}
              onChange = {(e) => setQuantity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="totalItems"
              label="Total Items *"
              type="number"
              fullWidth
              variant="standard"
              value={totalItems}
              onChange = {(e) => setTotalItems(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="dedicatedFrom"
              label="Dedicated From *"
              type="text"
              fullWidth
              variant="standard"
              value={dedicatedFrom}
              onChange = {(e) => setdedicatedFrom(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="dedicatedTo"
              label="Dedicated To *"
              type="text"
              fullWidth
              variant="standard"
              value={dedicatedTo}
              onChange = {(e) => setdedicatedTo(e.target.value)}
            />
            

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add Order</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }