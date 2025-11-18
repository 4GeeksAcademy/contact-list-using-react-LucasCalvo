import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const EditContact = () => {
  const { id } = useParams()

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`
        )

        if (response.ok) {
          const data = await response.json()
          setContact(data)
        } else {
          console.error('No se pudo obtener el contacto')
        }
      } catch (error) {
        console.error('Error al buscar contacto:', error)
      }
    }

    fetchContact()
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`,
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
    <form onSubmit={handleSubmit}>
      <input name="name" value={contact.name} onChange={handleInputChange} />
      <input name="email" value={contact.email} onChange={handleInputChange} />
      <input name="phone" value={contact.phone} onChange={handleInputChange} />
      <input name="address" value={contact.address} onChange={handleInputChange} />
      <button type="submit">Guardar</button>
    </form>
  )
}
