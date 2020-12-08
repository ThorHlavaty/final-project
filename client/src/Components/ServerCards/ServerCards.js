import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ServerCards.css'

export default function ServerCards({id}) {
    const [servers, setServers] = useState([])
    const [serverName, setServerName] = useState('Server')

    useEffect(() => {
        Axios.get('/users')
        .then(res => {
            setServers(res.data)
        })
    }, [])
    
    return (
        <div className='cardRoot'>
            <h2>Section {id}</h2>
            

            <div className="dropdown">
            <button className="dropbtn">{serverName}</button>
            <div className="dropdown-content">
                <a href='#'  onClick={() =>(setServerName('No Server'))}>No Server</a>
                {servers.map(server => (
                    <a href='#' onClick={() =>(setServerName(server.name))} key={id}>{server.name}</a>
                ))}
            </div>
            </div>
            <div >
            <button className="dropbtn">Submit</button>
            </div>
        </div>
    )
}
