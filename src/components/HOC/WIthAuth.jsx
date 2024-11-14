import React, { useEffect } from 'react'
//import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const WIthAuth = (WrapperComponent) => {


    const Wrapper=()=>{
        const navigate = useNavigate()
        const userName = localStorage.getItem('userName') // match this to the username of localhost


       // const isAuth = false ;

        useEffect(()=>{
            if (userName !=='amrin') {
                navigate('/nextevent');
                
            }
        }, [userName]);


      return userName==='amrin'?
      <WrapperComponent /> :null;
    };


  return Wrapper;
}

export default WIthAuth;
