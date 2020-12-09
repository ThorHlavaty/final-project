import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTotalBill } from '../../redux/actions'
// import SignOutBar from '../../Components/SignOutBar/SignOutBar'
import './MobileTable.css'
import MobileTableBoard from './MobileTableBoard/MobileTableBoard'
import MobileTableNav from './MobileTableNav/MobileTableNav'

export default function MobileTable() {

    const [section, setSection]= useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setTotalBill(0))
    })

    return (
        <>
        
        <div className='mobileTable'>
            <MobileTableNav className='nav'  setSection={setSection} />
            <MobileTableBoard className='board' section={section} />
        </div>
        </>
    )
}
