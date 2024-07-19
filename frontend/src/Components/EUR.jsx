import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const EUR = () => {
  
  return (
    <div className='bg-[#00000000] h-[400px] w-[330px] m-2'>
        <h3 className='text-xl font-semibold'>EUR/USD : Euro/U.S. Dollar</h3>
        <p className='mt-2'>
        The current rate of EURUSD is 1.09043 USD.<br/><br/>
        The euro is one of the most important alternatives to the U.S. dollar among fiat currencies. This is why there is often a positive link between the euro and gold: both assets have negative correlation to the greenback.<br/><br/>
        Generally lies between : 5-30.
        </p>
    </div>
  )
}

export default EUR

