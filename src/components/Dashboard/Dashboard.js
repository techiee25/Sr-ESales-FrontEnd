import React from 'react'
import Mobileplan from '../Mobileplan/Mobileplan'
import  Internetplan  from '../Internetplan/Internetplan'

export default function Dashboard() {
  return (
    <div className='dashboardcontainer'>
        <Mobileplan/>
        <Internetplan/>
    </div>
  )
}
