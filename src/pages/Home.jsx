import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  
  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/docs")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_contacts", payload: data }))
      .catch(err => console.error(err));
  }, [dispatch]);


  return (
    <div className="text-center mt-5">

      {store.contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        store.contacts.map(contact => (
          <div
            key={contact.id}
            className="card p-3 d-flex flex-row align-items-center"
            style={{ width: "80%", margin: "0 auto", marginBottom: "1rem" }}
          >
            <img 
              src={contact.image || rigoImageUrl}
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
              <button className="btn btn-light mb-2">✏️</button>
              <button className="btn btn-light">🗑️</button>
            </div>
          </div>
		  
        ))
      )}
    </div>
  );
};
