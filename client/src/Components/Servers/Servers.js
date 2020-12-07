import Axios from 'axios'
import React, { useEffect } from 'react'
import ServerCards from '../ServerCards/ServerCards'
import './Servers.css'

export default function Servers() {
    useEffect(()=>{
        Axios.get
    })
    
    return (
        <div className="serverBody" style={{}}>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
            <ServerCards/>
        </div>
    )
}
