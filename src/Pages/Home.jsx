import React from 'react'
import LeftContent from '../components/LeftContent';
import LogIn from '../components/LogIn';
import FooterBar from '../components/FooterBar'; 
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
          <LeftContent />
          <LogIn />
        </div>
      </div>
      <FooterBar />
      
    </>
  )
}

export default Home
