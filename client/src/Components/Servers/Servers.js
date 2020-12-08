import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import ServerCards from '../ServerCards/ServerCards'
import SignOutBar from '../SignOutBar/SignOutBar'
import './Servers.css'

export default function Servers() {
    const [sections, setSections] = useState([])
    
    useEffect(() => {
        Axios.get('/api/v1/section')
        .then(res => {
            setSections(res.data)
        })
    }, [])

    return (
        <div className="serverBody">
            {sections.map(section =>(
                <ServerCards  id={section.id} key={section.id}/>
            ))}
            <SignOutBar/>
        </div>
    )
}
