import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
   const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };


  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/lucas/contacts")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_contacts", payload: data.contacts }))
      .catch(err => console.error(err));
  }, [dispatch]);

const handleDelete = (id) => {
  fetch(`https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`, {
    method: "DELETE"
  })
    .then(res => {
      if (res.ok) {
        dispatch({
          type: "set_contacts",
          payload: store.contacts.filter(contact => contact.id !== id)
        });
      }
    })
    .catch(err => console.error(err));
};


  return (
  <div className="text-center mt-5">
    {store.contacts.length === 0 ? (
      <p>Sin Contactos</p>
    ) : (
      store.contacts.map((contact) => (
        <div
          key={contact.id}
          className="card p-3 d-flex flex-row align-items-center"
          style={{ width: "80%", margin: "0 auto", marginBottom: "1rem" }}
        >
          <img
            src="https://i.fbcd.co/products/resized/resized-1500-1000/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.webp"
            className="rounded-circle me-3"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
            alt="Foto"
          />

          <div className="text-start flex-grow-1">
            <h5 className="mb-1">{contact.name}</h5>
            <p className="mb-0">{contact.address}</p>
            <p className="mb-0">{contact.phone}</p>
            <p className="mb-0">{contact.email}</p>
          </div>

          
        <div className="d-flex flex-column ms-3">
          <Link to={"/editcontact/" + contact.id}>
            <button
              className="btn btn-light mb-2"
            >
              ✏️
            </button>
          </Link>
          <button className="btn btn-light" onClick={() => handleDelete(contact.id)}>
  🗑️
</button>
          </div>
        </div>
      ))
    )}
  </div>
)
};
