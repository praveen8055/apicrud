import React, { useEffect } from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import Paymenthistory from './paymenthistory'
import axios from 'axios'
import * as Utilities from '../Utilities/utilities'

function Payments() {  useEffect(() => {
    Utilities.isLoggedIn().catch(error => console.error(error))
}, [])

    let router= useRouter()

    const handleClick=()=>{
        router.push("/gas")
    }

    
    const handleClick1=()=>{
        router.push("/electricity")
    }

    const handleClick2=()=>{
        router.push("/maintenance")
    }

    const handleClick3=()=>{
        router.push("/dth")
    }
    const handleClick4=()=>{
        router.push("/rent")
    }
    const clickpush=()=>{
        router.push("/dashboard")
    }
    useEffect(()=>{
    let token=localStorage.getItem('token');
    console.log("token")
    if(token){
        axios.post(`${process.env.SERVER_URL}/users/me`, {token:token})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }else{history.push('/login')}
}, [])


    return (
        <div>
            <Navbar/>
            <Paymenthistory/>
            <div className="mt-10 md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                    <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Payments</p>
                    </div>
            </div>
           
            <div className="flex flex-col w-full mt-10 mb-10">
                    <div className="flex">
                    </div>
                    <div  className="flex flex-row flex-wrap">
                        <div onClick={handleClick} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/cylinder.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Gas </p>
                        </div>
                        <div onClick={handleClick1} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/bulb.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Electricity</p>
                        </div>
                        <div onClick={handleClick2} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/reciept1.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Maintenance</p>
                        </div>
                        <div onClick={handleClick3} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/dth.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">DTH</p>
                        </div>
                        <div onClick={handleClick4} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/recharge.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Mobile Recharge</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
