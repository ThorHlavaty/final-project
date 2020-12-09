import React, {useEffect, useState} from 'react'
import ImageMapper from 'react-image-mapper'
import LayoutImage from '../Images/TableLayout.png'
import {  useDispatch, useSelector } from 'react-redux'
import { setGuestItemsObject, setTableId, setTableNum, setTotalBill } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import './TableLayout.css'
import Axios from 'axios'
import SignOutBar from './SignOutBar/SignOutBar'

export default function TableLayout() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ windowWidth, setWindowWidth ] = useState(0)
    const [sections, setSections] = useState([])
    const manager = useSelector(state=>state.userSignin.userInfo.manager)
    const serverId = useSelector(state=>state.userSignin.userInfo.id)



    useEffect(()=>{
        Axios.get('/api/v1/section')
        .then(res => {
            setSections(res.data)
        })
        dispatch(setTotalBill(0))
        dispatch(setGuestItemsObject({}))
        function handleResize(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    },[dispatch, setWindowWidth])
    
    const handleClicked = (area) => {
        if (sections[ sections.length - area.section].UserId === serverId || manager){
            dispatch(setTableId(area.tableId))
            dispatch(setTableNum(area.name))
            history.push(`/users/table/${area.tableId}`)
        } else {
            alert('This table is outside of your section!')
        }
    }


    const layoutMap = {
        name: "my_map",
        areas: [
            
            { name: 11, shape: "circle", coords: [1365, 47, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (1)},
            { name: 12, shape: "circle", coords: [1365, 118, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (2)},
            { name: 13, shape: "circle", coords: [1365, 190, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (3)},
            { name: 14, shape: "circle", coords: [1365, 261, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (4)},
            { name: 15, shape: "circle", coords: [1365, 332, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (5)},
            { name: 16, shape: "circle", coords: [1365, 403, 35], fillColor: "rgba(53, 208, 148, 0.65)", section: 1, tableId: (6)},
            { name: 21, shape: "circle", coords: [1171, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (7)},
            { name: 22, shape: "circle", coords: [986, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (8)},
            { name: 23, shape: "circle", coords: [801, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (9)},
            { name: 24, shape: "circle", coords: [620, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (10)},
            { name: 25, shape: "circle", coords: [485, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (11)},
            { name: 26, shape: "circle", coords: [351, 71, 50], fillColor: "rgba(43, 171 , 236, 0.65)", section: 2, tableId: (12)},
            { name: 31, shape: "circle", coords: [1203, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", section: 3, tableId: (13)},
            { name: 32, shape: "circle", coords: [920, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", section: 3, tableId: (14)},
            { name: 33, shape: "circle", coords: [636, 256, 50], fillColor: "rgba(192, 233, 237, 0.75)", section: 3, tableId: (15)},
            { name: 34, shape: "circle", coords: [352, 256, 50], fillColor: "rgba(31, 82, 107, 0.65)", section: 4, tableId: (16)},
            { name: 41, shape: "circle", coords: [1061, 380, 50], fillColor: "rgba(192, 233, 237, 0.75)", section: 3, tableId: (17)},
            { name: 42, shape: "circle", coords: [778, 380, 50], fillColor: "rgba(192, 233, 237, 0.75)", section: 3, tableId: (18)},
            { name: 43, shape: "circle", coords: [494, 380, 50], fillColor: "rgba(31, 82, 107, 0.65)", section: 4, tableId: (19)},
            { name: 51, shape: "circle", coords: [1235, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", section: 5, tableId: (20)},
            { name: 52, shape: "circle", coords: [1101, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", section: 5, tableId: (21)},
            { name: 53, shape: "circle", coords: [620, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", section: 5, tableId: (22)},
            { name: 54, shape: "circle", coords: [485, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", section: 5, tableId: (23)},
            { name: 55, shape: "circle", coords: [351, 561, 50], fillColor: "rgba(192, 223, 237, 0.7)", section: 5, tableId: (24)},
            { name: 61, shape: "circle", coords: [98, 436, 50], fillColor: "rgba(31, 82, 107, 0.65)", section: 4, tableId: (25)},
            { name: 62, shape: "circle", coords: [98, 179, 50], fillColor: "rgba(31, 82, 107, 0.65)", section: 4, tableId: (26)},
        ]

    }

    return (
        <div className='layout' style={{display:'flex', flexDirection:'column', alignContent:'center'}}>
            <ImageMapper className="" src={LayoutImage} map={layoutMap} width={windowWidth} onClick={handleClicked} imgWidth={1463}/>
            {/* <OrderHeader/> */}
            <div style={{marginLeft:'auto', marginRight:'auto'}}>
            <SignOutBar />
            </div>

        </div>
    )
}
// imgWidth is the original image size. width can change to keep mapped buttons in the right place. 
