import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Detail = () => {
  
  return (
    <div className='bg-[#00000000] h-[400px] w-[330px] m-2'>
        <h3 className='text-xl font-semibold'>SPX : Sequenced Packet Exchange</h3>
        <p className='mt-2'>
            It is inverse proportion between gold and stock.<br/>
            A declining SPX/Gold ratio typically signals a stronger gold market relative to equities, often marking bottoms in gold prices as investors shift to safer assets amidst economic fears.<br/><br/>
            The S&P 500's value is calculated based on the market cap of each company, which is equal to the share price of the company multiplied by the total number of shares outstanding.<br/><br/>
            Generally lies between : 800-1700
        </p>
    </div>
  )
}

export default Detail

