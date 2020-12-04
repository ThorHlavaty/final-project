import React, { useEffect, useState } from 'react'
import './MobileTableNav.css'
import axios from 'axios'


export default function MobileTableNav(props) {

    const [ sectionData, setSectionData ] = useState()

    useEffect(() => {
        axios.get('/api/v1/section')
        .then(res =>{
            console.log(res.data)
            setSectionData(res.data)

        })

    }, [])

    // const getSection = async()=>{
        
    // }

    return (
        <div className='mobileTableNav'>
            <ul className='mobileTableNav--list'>
               {(sectionData !== undefined) && sectionData.map((sections)=>
                   (<li>
                        <button className='mobileTableNav--btn' onClick={()=>props.setSection(sections.id)}>Section {sections.id}</button>
                    </li>)
               )}
                   
              
            </ul>
        </div>
    )
}
