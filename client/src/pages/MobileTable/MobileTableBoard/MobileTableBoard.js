import React, { useState, useEffect } from 'react'
import './MobileTableBoard.css'
import axios from 'axios'

export default function MobileTableBoard(props) {

    const [ sectionData, setSectionData] = useState([])

    useEffect(() => {
        axios.get(`/api/v1/section/${props.section}/tables`)
        .then(res =>{
            console.log(res.data)
            setSectionData(res.data)

        })

    }, [props.section])
    return (
        <div className='mobileTableBoard'>
            {sectionData.map((table)=>(<div className='mobileTableBoard--card' >
                <h3> Table #{table.number}</h3>
                <h4> {table.Guests.length} Guests</h4>
            </div>))}
           
        </div>
    )
}
