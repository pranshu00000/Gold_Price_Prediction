import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Styles/form.css'
import { setResult } from '../redux/resultSlice';
import { message } from 'antd';
import Detail from './Datail';
import USO from './USO';
import SLV from './SLV';
import EUR from './EUR';


const Content = () => {
  const baseurl = " http://127.0.0.1:8000";
  const [spx, setSpx] = useState();
  const [uso, setUso] = useState();
  const [slv, setSlv] = useState();
  const [euroUsd, setEuroUsd] = useState();
  const [loading, setLoading] = useState();

  const [showDiv, setShowDiv] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const onSubmitForm = async (e) => {

    e.preventDefault();

    const spxNo = Number(spx);
    const usoNo = Number(uso);
    const slvNo = Number(slv);
    const euroUsdNo = Number(euroUsd);


    try {

      setLoading(true);

      const { data } = await axios.post(`${baseurl}/pred-gold-price`, {
        spxFloat: spxNo,
        usoFloat: usoNo,
        slvFloat: slvNo,
        euroUSDRatioFloat: euroUsdNo
      });

      setLoading(false);

      dispatch(setResult(data?.pred_result_value));

      message.success('the price of gold has been predicted successfully')

      navigate('/result');

    } catch (error) {

      setLoading(false);

      message.error('Something Went Wrong!! Please try again.')

      console.log(error);

    };

  }

  return (
    <div className='main-container h-lvh bg-[#00000000]'>
      {showDiv && <div className='hover-div bg-slate-400 h-[430px] w-[350px] absolute right-[50px] top-[130px] rounded-b-3xl rounded-r-3xl border-2 border-dashed border-black'><Detail/></div>}
      {showDiv2 && <div className='hover-div bg-slate-400 h-[430px] w-[350px] absolute right-[50px] top-[130px] rounded-b-3xl rounded-r-3xl border-2 border-dashed border-black'><USO/></div>}
      {showDiv3 && <div className='hover-div bg-slate-400 h-[430px] w-[350px] absolute right-[50px] top-[130px] rounded-b-3xl rounded-r-3xl border-2 border-dashed border-black'><SLV/></div>}
      {showDiv4 && <div className='hover-div bg-slate-400 h-[430px] w-[350px] absolute right-[50px] top-[130px] rounded-b-3xl rounded-r-3xl border-2 border-dashed border-black'><EUR/></div>}
       <video autoPlay loop muted className="video-background">
        <source src="./video2.mp4  " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className='header '>Gold Price Prediction</h1>

      <form className='form-container ' onSubmit={onSubmitForm}>
        <label htmlFor="fname" className="hover-element"
        onMouseEnter={() => setShowDiv(true)}
        onMouseLeave={() => setShowDiv(false)}>SPX:</label><br />
        <input type="number" id="fname" name="fname" placeholder='' onChange={(e) => setSpx(e.target.value)} required /><br />
        <label htmlFor="lname" className="hover-element"
        onMouseEnter={() => setShowDiv2(true)}
        onMouseLeave={() => setShowDiv2(false)}>USO:</label><br />
        <input type="number" id="lname" name="lname" placeholder='' onChange={(e) => setUso(e.target.value)} required /><br />
        <label htmlFor="lname" className="hover-element"
        onMouseEnter={() => setShowDiv3(true)}
        onMouseLeave={() => setShowDiv3(false)}>SLV:</label><br />
        <input type="number" id="lname" name="lname" placeholder='' onChange={(e) => setSlv(e.target.value)} required /><br />
        <label htmlFor="lname" className="hover-element"
        onMouseEnter={() => setShowDiv4(true)}
        onMouseLeave={() => setShowDiv4(false)}>EUR/USD:</label><br />
        <input type="number" id="lname" name="lname" placeholder='' onChange={(e) => setEuroUsd(e.target.value)} required /><br />
        <br />
        <input className='btn-2' type="submit" disabled={loading ? true : false} value={loading ? "Predicting" : "Submit"} />
      </form>
      
    </div>
  )
}

export default Content;