import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const USO = () => {
  
  return (
    <div className='bg-[#00000000] h-[400px] w-[330px] m-2'>
        <h3 className='text-xl font-semibold'>USO : Universal Service Obligation Fund</h3>
        <p className='mt-2'>
        There is an inverse relationship between the external value of the U.S. dollar and the international price of gold (negative correlation).<br/>
        This is measured by subtracting the return of the Benchmark Oil Futures Contract from the return on USO's net asset value for each of the last thirty business days, and then averaging those thirty differences. The calculation is repeated daily.<br/><br/>
        Generally lies between : 1-2
        </p>
    </div>
  )
}

export default USO

