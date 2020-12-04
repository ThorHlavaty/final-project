import React, { useState } from 'react'
import './MobileTable.css'
import MobileTableBoard from './MobileTableBoard/MobileTableBoard'
import MobileTableNav from './MobileTableNav/MobileTableNav'

export default function MobileTable() {

    const [section, setSection]= useState(0)

    return (
        <div className='mobileTable'>
            <MobileTableNav className='nav'  setSection={setSection} />
            <MobileTableBoard className='board' section={section} />
        </div>
    )
}
