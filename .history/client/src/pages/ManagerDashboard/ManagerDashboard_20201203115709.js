import React from 'react'
import Servers from '../../Components/Servers/Servers'
import TableLayout from '../../Components/TableLayout'
import './ManagerDashboard.css'

export default function ManagerDashboard() {
    return (
        <div className="rootPage">
            <TableLayout className="tableLayout"/>
            
            <Servers className="servers"/>
        </div>
    )
}
