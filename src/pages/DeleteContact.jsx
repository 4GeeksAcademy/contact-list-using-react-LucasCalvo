import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DeleteContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`,
                {
                    method: 'DELETE'
                }
            );

            if (response.ok) {
                console.log('Contacto eliminado correctamente');
                navigate("/")   // te lleva al Home
            } else {
                console.error('Error al eliminar el contacto');
            }
        } catch (error) {
            console.error('Error eliminando el contacto:', error);
        }
    };

    return (
        <div className="text-center mt-5">
            <h1>¿Seguro que querés eliminar este contacto?</h1>

            <button className="btn btn-danger" onClick={handleDelete}>
                Eliminar
            </button>
        </div>
    );
};

export default DeleteContact;
