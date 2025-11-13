import React from "react"
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Info =() => {
    const navigate = useNavigate()
    const { store, dispatch} = useGlobalReducer()


    return (
        <div>
           <button className="btn btn-danger" onClick={() =>{
            console.log("return home");
            navigate("/")
            }}>Ir a home</button>

        </div>
    )
}
