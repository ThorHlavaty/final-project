import React from 'react'
import { Link } from 'react-router-dom'
import './SignOut.css'
import {signout} from '../src/redux/actions'
import { useDispatch } from 'react-redux'


export default function SignOut() {

    const dispatch = useDispatch()
    
    const signoutHandler =() => {
        dispatch(signout())}

    return (
        <div>
            <Link className='link' to='/' onClick={signoutHandler}>Sign Out</Link>
        </div>
    )
}
