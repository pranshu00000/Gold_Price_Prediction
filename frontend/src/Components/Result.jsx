import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Styles/landingPage.css'

const Result = () => {

  const { resultData } = useSelector((state) => state.resultData);

  console.log(resultData);
  
  return (
    <div className='main-container h-lvh bg-[#00000000] flex flex-col justify-center items-center py-24'>
       <video autoPlay loop muted className="video-background">
        <source src="./video3.mp4  " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className='mb-20 font-semibold text-center text-3xl'>Gold Price Prediction Result</h1>

      <form className='h-[400px] w-[600px] bg-[#0b0b0bdd] justify-evenly rounded-lg border-2 border-dashed border-black flex flex-col p-12 items-center'>

       <p className='text-xl font-semibold text-slate-300'>Predicted Gold Price for 1Gram:<br/> {resultData ? `                  $ ${resultData}` : 'No Predicted Gold Price Available'}</p>
       <p className='text-xl font-semibold text-slate-300'>Predicted Gold Price for 1Gram:<br/> {resultData ? `                  ₹ ${resultData*80}` : 'No Predicted Gold Price Available'}</p> 
        <Link to='/content'>
          <input className=' bg-slate-500 h-12 w-52 rounded-xl' type="submit" value="Ok !" />
        </Link>
      </form>
    </div>
  )
}

export default Result

