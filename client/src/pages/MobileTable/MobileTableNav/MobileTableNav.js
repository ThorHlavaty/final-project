import React, { useEffect, useState } from 'react'
import './MobileTableNav.css'
import axios from 'axios'
import SignOutBar from '../../../Components/SignOutBar/SignOutBar'
import { useSelector } from 'react-redux'


export default function MobileTableNav(props) {

    const [ sectionData, setSectionData ] = useState()
    const serverId = useSelector(state=>state.userSignin.userInfo.id)
    const manager = useSelector(state=>state.userSignin.userInfo.manager)


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
                   (<li key={sections.id}>
                        <button className='mobileTableNav--btn' onClick={()=> ((serverId === sections.id || manager) ? props.setSection(sections.id): alert('This is not your section!'))}>Section {sections.id}</button>
                    </li>)
               )}
            <div className='bar' >
              <SignOutBar />
            </div>
            </ul>
        </div>
    )
}
