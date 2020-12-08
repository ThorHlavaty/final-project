import React, { useEffect, useState } from 'react'
import './MobileTableNav.css'
import axios from 'axios'
import SignOutBar from '../../../Components/SignOutBar/SignOutBar'


export default function MobileTableNav(props) {

    const [ sectionData, setSectionData ] = useState()

    useEffect(() => {
        axios.get('/api/v1/section')
        .then(res =>{
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
            <div className='bar' >
              <SignOutBar />
            </div>
            </ul>
        </div>
    )
}
