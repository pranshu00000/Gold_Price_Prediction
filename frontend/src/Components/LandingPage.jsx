import React from 'react'
import '../Styles/landingPage.css'
import {Link} from 'react-router-dom'
import Graph from './Graph'
const LandingPage = () => {
  return (
    <div className="bg-[#0000000] h-lvh  flex flex-col items-center justify-center pt-8">
        <video autoPlay loop muted className="video-background">
        <source src="./video.mp4  " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className=' bg-[#0b0b0bdd] rounded-xl border-dashed h-72 justify-center border-black border-2 w-[500px] flex flex-col items-center'>
        <h1 className="text-3xl font-semibold text-slate-300">Gold Price Prediction</h1>
        <div className=' flex flex-col items-center'>
            {/* <Graph/>  */}

               <div className='text-container'>
              <div className='sub-con2'>
                <h2 className='font-semibold text-lg mt-8 text-slate-300' >
                Let's predict some gold prices! 
                </h2>
                <Link to='/content'>
                <button className=' bg-slate-500 w-52 h-12 text-lg font-semibold rounded-lg mt-6 mb-4 ml-5'>
                  Predict Price
                </button>
                </Link>
              </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default LandingPage