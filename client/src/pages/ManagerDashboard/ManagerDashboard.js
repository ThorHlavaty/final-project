import React, { useEffect } from 'react'
import Servers from '../../Components/Servers/Servers'
import DashTableLayout from '../../Components/DashTableLayout'
import './ManagerDashboard.css'
import Axios from 'axios'
import { setGuestCount, setGuestItemsObject, setTableNum } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'




export default function ManagerDashboard() {
    const dispatch = useDispatch()
    const tableId = useSelector(state => state.tableId)
    
    useEffect(()=>{
        Axios.get(`/api/v1/table/${tableId}`)
        .then(res => {
          dispatch(setTableNum(res.data.number))
          let currentOrder = {}
          res.data.Guests.forEach(order => {
    
            currentOrder[order.seat] = order.Items.map(item =>[item.name, item.cost, item.id ])
          })
          dispatch(setGuestItemsObject(currentOrder))
          let seatNum = res.data.Guests.reduce((prev, curr, i)=> (curr.seat > prev ? curr.seat : prev), 1)
          dispatch(setGuestCount(seatNum))
        })
      },[dispatch, tableId])
    
    
    return (
        

    <>

        <div className="rootPage">
            <DashTableLayout className="tableLayout"/>
            <Servers className="servers"/>
        </div>
        </>
    )
}
