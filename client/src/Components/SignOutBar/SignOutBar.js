import React from 'react'
import './SignOutBar.css'
import {signout} from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SignOutBar() {

    const dispatch = useDispatch()

    const signOutHandler =() => {
        dispatch(signout())}

    return (
        <div className='SignOutBar'>
            <Link to='/' onClick={signOutHandler}><Button className='SignOutBarBtn'>Sign Out</Button></Link>
        </div>
    )
}
