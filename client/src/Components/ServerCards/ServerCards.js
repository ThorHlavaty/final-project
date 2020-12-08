import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ServerCards.css'

export default function ServerCards({id}) {
    const [servers, setServers] = useState([])
    const [serverName, setServerName] = useState(['Server', 0])

    useEffect(() => {
        Axios.get('/users')
        .then(res => {
            setServers(res.data)
        })
    }, [])
    
    function handleSubmit(){
        if (serverName[1] !== 0){
        Axios.put(`/api/v1/section/${id}`, {user_id:serverName[1]})
        .then(res => {
            console.log(res)
        })
        }
    }

    return (
        <div className='cardRoot'>
            <h2>Section {id}</h2>
            

            <div className="dropdown">
            <button className="dropbtn">{serverName[0]}</button>
            <div className="dropdown-content">
                <a href='#'  onClick={() =>(setServerName(['No Server', 0]))}>No Server</a>
                {servers.map(server => (
                    <a href='#' onClick={() =>(setServerName([server.name, server.id]))} key={id}>{server.name}</a>
                ))}
            </div>
            </div>
            <div >
            <button className="dropbtn" onClick={()=>handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}
