import { useState } from "react";
import { Link } from "react-router-dom";

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

    const response = await fetch("https://localhost:3001/api/cff", {
      method: "POST",
      body: JSON.stringify(cff),
      headers: {
        "Content-Type": "application/json",
      },
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
    // <div className="modalBackground">
    //   <div className="modalContainer">
    //     <div className="titleCloseBtn">
    //       <div className="titleCloseBtn">
    //         <a
    //           href="/auth"
    //           class="btn btn-light"
    //           role="button"
    //           aria-pressed="true"
    //         >
    //           X
    //         </a>
    //       </div>
    //     </div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="row">
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>Order Date</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="5"
    //             onChange={(e) => setOrderDate(e.target.value)}
    //             value={OrderDate}
    //           />
    //         </div>
    //         <div className="col-xs-7 col-sm-7 col-md-7">
    //           <label>
    //             <b>Customer Note</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             onChange={(e) => setCustomerNote(e.target.value)}
    //             value={CustomerNote}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>First Name</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="3"
    //             onChange={(e) => setFirstName(e.target.value)}
    //             value={FirstName}
    //           />
    //         </div>
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>Last Name</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="3"
    //             onChange={(e) => setLastName(e.target.value)}
    //             value={LastName}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-5 col-sm-5 col-md-5">
    //           <label>
    //             <b>Dedicated From</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="3"
    //             onChange={(e) => setDedicatedFrom(e.target.value)}
    //             value={DedicatedFrom}
    //           />
    //         </div>
    //         <div className="col-xs-6 col-sm-6 col-md-6">
    //           <label>
    //             <b>Dedicated To</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="3"
    //             onChange={(e) => setDedicatedTo(e.target.value)}
    //             value={DedicatedTo}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-5 col-sm-5 col-md-5">
    //           <label>
    //             <b>Email</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="10"
    //             onChange={(e) => setEmail(e.target.value)}
    //             value={Email}
    //           />
    //         </div>
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>Phone Number</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="10"
    //             onChange={(e) => setPhone(e.target.value)}
    //             value={Phone}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>Address</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="8"
    //             onChange={(e) => setAddressBilling(e.target.value)}
    //             value={AddressBilling}
    //           />
    //         </div>
    //         <div className="col-xs-3 col-sm-3 col-md-3">
    //           <label>
    //             <b>City</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="3"
    //             onChange={(e) => setCity(e.target.value)}
    //             value={City}
    //           />
    //         </div>
    //         <div className="col-xs-2 col-sm-2 col-md-2">
    //           <label>
    //             <b>State</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="2"
    //             onChange={(e) => setState(e.target.value)}
    //             value={State}
    //           />
    //         </div>
    //         <div className="col-xs-2 col-sm-2 col-md-2">
    //           <label>
    //             <b>Zip code</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="5"
    //             max="5"
    //             onChange={(e) => setZip(e.target.value)}
    //             value={Zip}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-4 col-sm-4 col-md-4">
    //           <label>
    //             <b>*Shipping* Address</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             onChange={(e) => setAddressShipping(e.target.value)}
    //             value={AddressShipping}
    //           />
    //         </div>
    //         <div className="col-xs-3 col-sm-3 col-md-3">
    //           <label>
    //             <b>City</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             onChange={(e) => setCityShipping(e.target.value)}
    //             value={CityShipping}
    //           />
    //         </div>
    //         <div className="col-xs-2 col-sm-2 col-md-2">
    //           <label>
    //             <b>State</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             onChange={(e) => setStateShipping(e.target.value)}
    //             value={StateShipping}
    //           />
    //         </div>
    //         <div className="col-xs-2 col-sm-2 col-md-2">
    //           <label>
    //             <b>Zip code</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             onChange={(e) => setZipShipping(e.target.value)}
    //             value={ZipShipping}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-3 col-sm-3 col-md-3">
    //           <label>
    //             <b>Quantity</b>
    //           </label>
    //           <input
    //             type="number"
    //             className="form-control-md"
    //             required
    //             min="1"
    //             onChange={(e) => setQuantity(e.target.value)}
    //             value={Quantity}
    //           />
    //         </div>
    //         <div className="col-xs-3 col-sm-3 col-md-3">
    //           <label>
    //             <b>Total</b>
    //           </label>
    //           <input
    //             type="number"
    //             className="form-control-md"
    //             required
    //             min="40"
    //             onChange={(e) => setTotal(e.target.value)}
    //             value={Total}
    //           />
    //         </div>
    //         <div className="col-xs-3 col-sm-3 col-md-3">
    //           <label>
    //             <b>Total items</b>
    //           </label>
    //           <input
    //             type="number"
    //             className="form-control-md"
    //             required
    //             min="1"
    //             onChange={(e) => setTotalitems(e.target.value)}
    //             value={Totalitems}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xs-8 col-sm-8 col-md-8">
    //           <label>
    //             <b>Name</b>
    //           </label>
    //           <input
    //             type="text"
    //             className="form-control-md"
    //             required
    //             min="5"
    //             onChange={(e) => setName(e.target.value)}
    //             value={Name}
    //           />
    //         </div>
    //       </div>
    //       <div className="footer">
    //         <button id="continueBtn">Save</button>
    //         <Link to="/auth">
    //           <button id="closeBtn">Close</button>
    //         </Link>
    //       </div>
    //       {Error && <div className="error">{Error}</div>}
    //     </form>
    //   </div>
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="col-xs-4 col-sm-4 col-md-4">
             <label>
                 <b>First Name</b>
               </label>
               <input
                type="text"
                className="form-control-md"
                required
                min="3"
                onChange={(e) => setFirstName(e.target.value)}
                value={FirstName}
              />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <label>
                <b>Last Name</b>
              </label>
              <input
                type="text"
                className="form-control-md"
                required
                min="3"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}/>
       </div>
       <button id="continueBtn">Save</button>
       </form>
    </div>
  );
};

export default CFFForm;
