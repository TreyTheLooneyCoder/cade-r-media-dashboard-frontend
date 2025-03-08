import React, { useState } from 'react'
import MainRowCards from '../components/MainRowCards.jsx'
import OverviewTodayCards from '../components/OverviewTodayCards.jsx'
import ToggleBtn from '../components/ToggleBtn.jsx'

const DashboardMain = () => {


  return (
    <div className='bg-gray-900 absolute top-0 left-0 w-screen h-screen'>
      <div className='text-white ml-[16%] mt-5'>
        <div className=' flex flex-row'>
          <h1 className='text-2xl font-semibold pr-[45rem]'>Social Media Dashboard</h1>
          <ToggleBtn />
        </div>
        <p className='text-sm text-gray-400'>Total Followers: 23,004</p>
      </div>
      <MainRowCards />

      <h3 className='text-white ml-[16%] mt-8'>Overview - Today</h3>

      <OverviewTodayCards /> 

    </div>
  )
}

export default DashboardMain