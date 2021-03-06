import React, {useEffect, useState} from 'react'
import ImageMapper from 'react-image-mapper'
import LayoutImage from '../Images/TableLayout.png'
import {  useDispatch } from 'react-redux'
import { setTableId, setTableNum, setTotalBill } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import './DashTableLayout.css'
import DashHeader from './Order/DashHeader'
import ManagerGuests from './ManagerGuests'
import OrderCommands from './Order/OrderCommands'
import { Grid } from 'semantic-ui-react'
import OrderHeader from './Order/OrderHeader'
import OrderHeaderMobile from './Order/OrderHeaderMobile'
import Guests from './Order/Guests'


export default function DashTableLayout() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [ windowWidth, setWindowWidth ] = useState(0)

    useEffect(()=>{
        dispatch(setTotalBill(0.00))
        function handleResize(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    },[dispatch, setWindowWidth])
    
    const handleClicked = (area) => {
        dispatch(setTotalBill(0))
        dispatch(setTableId(area.tableId))
        dispatch(setTableNum(area.name))
    }


    const layoutMap = {
        name: "my_map",
        areas: [
            
            { name: 11, shape: "circle", coords: [1365, 47, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (1)},
            { name: 12, shape: "circle", coords: [1365, 118, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (2)},
            { name: 13, shape: "circle", coords: [1365, 190, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (3)},
            { name: 14, shape: "circle", coords: [1365, 261, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (4)},
            { name: 15, shape: "circle", coords: [1365, 332, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (5)},
            { name: 16, shape: "circle", coords: [1365, 403, 35], fillColor: "rgba(53, 208, 148, 0.65)", tableId: (6)},
            { name: 21, shape: "circle", coords: [1171, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (7)},
            { name: 22, shape: "circle", coords: [986, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (8)},
            { name: 23, shape: "circle", coords: [801, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (9)},
            { name: 24, shape: "circle", coords: [620, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (10)},
            { name: 25, shape: "circle", coords: [485, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (11)},
            { name: 26, shape: "circle", coords: [351, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", tableId: (12)},
            { name: 31, shape: "circle", coords: [1203, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", tableId: (13)},
            { name: 32, shape: "circle", coords: [920, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", tableId: (14)},
            { name: 33, shape: "circle", coords: [636, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", tableId: (15)},
            { name: 34, shape: "circle", coords: [352, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", tableId: (16)},
            { name: 41, shape: "circle", coords: [1061, 380, 50], fillColor: "rgba(31, 82, 107, 0.65)", tableId: (17)},
            { name: 42, shape: "circle", coords: [778, 380, 50], fillColor: "rgba(31, 82, 107, 0.65)", tableId: (18)},
            { name: 43, shape: "circle", coords: [494, 380, 50], fillColor: "rgba(31, 82, 107, 0.65)", tableId: (19)},
            { name: 51, shape: "circle", coords: [1235, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", tableId: (20)},
            { name: 52, shape: "circle", coords: [1101, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", tableId: (21)},
            { name: 53, shape: "circle", coords: [620, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", tableId: (22)},
            { name: 54, shape: "circle", coords: [485, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", tableId: (23)},
            { name: 55, shape: "circle", coords: [351, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", tableId: (24)},
            { name: 61, shape: "circle", coords: [98, 436, 50], fillColor: "rgba(171, 185, 189, 0.7)", tableId: (25)},
            { name: 62, shape: "circle", coords: [98, 179, 50], fillColor: "rgba(171, 185, 189, 0.7)", tableId: (26)},
        ]

    }

    return (
        <div  className='layout2' style={{height:'100vh'}}>
            <ImageMapper className="" src={LayoutImage} map={layoutMap} width={windowWidth * 0.7} onClick={handleClicked} imgWidth={1463}/>
            <div className="OrderRoot">
   <OrderHeader/>
    
        
    </div>
        <Guests />
        <div style={{ marginTop:'auto', marginBottom:'14px', marginRight:'14px', marginLeft:'10px'}}>
        <OrderCommands />
        
      
      
    </div>
        </div>
    )
}
// imgWidth is the original image size. width can change to keep mapped buttons in the right place. 
