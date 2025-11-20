import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();

  const [data, setData] = useState({ name:"", email:"", phone:"", address:"" });

  const formChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://playground.4geeks.com/contact/agendas/lucas/contacts", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ ...data, agenda_slug: "lucas" })
    })
    .then((res) => res.json())
    .then((contact) => {
     
      const contactToStore = {
        id: contact.id,
        name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        image: contact.image || null
      };
      dispatch({ type: "add_contact", payload: contactToStore });
      setData({ name:"", email:"", phone:"", address:"" });
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h1 className="text-center">Add Contact</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control"
            value={data.name}
            onChange={formChange}
            name="name"
            placeholder= "Full name"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control"
            value={data.email}
            onChange={formChange}
            name="email"
            placeholder= "Enter email"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Address</label>
          <input 
            type="text"
            className="form-control"
            value={data.address}
            onChange={formChange}
            name="address"
            placeholder= "Enter address"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Phone</label>
          <input 
            type="text"
            className="form-control"
            value={data.phone}
            onChange={formChange}
            name="phone"
            placeholder= "Enter phone"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">Save</button>
        </div>

        <div className="col-12">
          <Link to="/" className="card-link">
            or get back to contacts
          </Link>
        </div>
      </form>
    </div>
  );
}
