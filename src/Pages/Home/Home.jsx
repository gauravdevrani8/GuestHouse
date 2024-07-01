import React from 'react'
import HeroSection from '../../Components/Main/Main'
import Room from '../Rooms/Rooms'
import FaqSection from '../../Components/Faq/Faq'
import BookingCompleted from '../../Components/Info/Info'

const Home = () => {
  return (
    <div className='m-2'>
    <HeroSection/>
    <Room/>
    <BookingCompleted/>
    <FaqSection/>
    </div>
  )
}

export default Home