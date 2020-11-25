import React from 'react'
import { Route, useHistory } from 'react-router-dom';
import {  useSelector } from 'react-redux'

export default function PrivateRoute({...args}) {
  const userSignin = useSelector((state) => state.userSignin);
  const history = useHistory()

  if(!userSignin.userInfo){
    history.push('/users/login')
    return ''
  }


  return (
    <Route {...args} />
  )
}
