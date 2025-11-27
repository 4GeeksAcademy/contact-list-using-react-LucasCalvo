import React, { useState, useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer";


export const EditContact = () => {
  const {contact_id} = useParams()

  const { store, dispatch } = useGlobalReducer()
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
   
    const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id));
        
        if (contactToEdit) {
                     
            setContact({
                name:  contactToEdit.name ,
                email: contactToEdit.email ,
                phone: contactToEdit.phone ,
                address: contactToEdit.address 
            });
            
        } else {
          
           
            alert("El contacto no fue encontrado. .");
            
        }
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/lucas/contacts/${contact_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contact)
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log('Contacto actualizado con éxito:', data)
      } else {
        console.error('Error al actualizar contacto')
      }
    } catch (error) {
      console.error('Error al actualizar contacto:', error)
    }
  }

  return (

<form onSubmit={handleSubmit} style={{ maxWidth: "450px", margin: "0 auto" }}>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">Nombre</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={contact.name}
      onChange={handleInputChange}
      placeholder="Full Name"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      value={contact.email}
      onChange={handleInputChange}
      placeholder="Email"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input
      type="text"
      className="form-control"
      id="phone"
      name="phone"
      value={contact.phone}
      onChange={handleInputChange}
      placeholder="Phone"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input
      type="text"
      className="form-control"
      id="address"
      name="address"
      value={contact.address}
      onChange={handleInputChange}
      placeholder="New Address"
    />
  </div>

  <button type="submit" className="btn btn-primary w-100">
   Save
  </button>
  <Link to={"/"}>
              <button className="btn btn-primary w-100 mt-2"
             >
              Back to menu
              </button>
   </Link>

</form>
  )
}
