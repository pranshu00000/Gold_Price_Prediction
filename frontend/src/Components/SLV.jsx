import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SLV = () => {
  
  return (
    <div className='bg-[#00000000] h-[400px] w-[330px] m-2'>
        <h3 className='text-xl font-semibold'>SLV: Silver Trust</h3>
        <p className='mt-2'>
        There are periods where the Gold Trust (GLD) and Silver Trust (SLV) move in opposite directions and periods where one metal outperforms the other.<br/><br></br>
        The gold-silver ratio is an expression of the price relationship between gold and silver. The ratio shows the number of ounces of silver it takes to equal the value of one ounce of gold.<br/><br/>
        Generally lies between : 20-140
        </p>
    </div>
  )
}

export default SLV

