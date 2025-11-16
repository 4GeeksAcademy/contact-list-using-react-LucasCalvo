import React, { useState , useEffect} from 'react'
import { json, useParams } from 'react-router-dom' 

export const EditContact=()=>{
    const {id}=useParams();
    const [contact, setcontact]=useState({
        name: '',
        email:'',
        phone:'',
        address:'',
    });
    useEffect(()=>{
        const fetchcontact= async()=>{
            try{
                const response = await fetch (`https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`);
                if (response.ok){ 
                const data = await response.json();
                setcontact(data);
                } else{ 
                console.error('fail to fetch contact');
                }
            }catch(error){
                console.error('error fetching contact:',error);
            }
        };
        fetchcontact();
    }, {id});
    const handleinputchange=(event)=>{
        const{name,value}=event.target;
        setcontact({...contact,[name]:value});
    };
    const handleSubmit=async(event) =>{
        event.preventdefault();
        try{
            const response = await fetch (`https://playground.4geeks.com/contact/agendas/lucas/contacts/${id}`,
                {method:'PUT',
                    headers:{'content-type':'application/JSON',},
                body: JSON.stringify(contact),});
                if (response.ok){ 
                const data = await response.json();
                console.log('contact update successfully:', data);
                } else{ 
                console.error('fail to update contact');
                }
            }catch(error){
                console.error('error updating contact:',error);
            }
        };
     }
