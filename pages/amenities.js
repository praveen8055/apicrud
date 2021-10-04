import React, {useEffect} from 'react'
import Navbar from './navbar'
import { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'

function Amenities() {
    const router=useRouter()

    const handleClick=()=>{
        router.push("/movie")
    }
    const clickpush=()=>{
        router.push("/dashboard")
    }
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>
             <Navbar/>
             <div className="mt-10 md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                    <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Amenities</p>
                    </div>
            </div>
            <div className="flex flex-row items-center flex-wrap w-full">
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-10">
                            <div className="flex flex-row">
                            <img className="m-3" src="/assets/tennis.png" />
                            <div>
                            <p className=" text-gray-800 font-extrabold mt-3">Tennis Court</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">12 Jun</p>
                            </div>
                            </div>
                            <p className=" text-green-500 mt-3 ml-16 font-extrabold mt-3">Confirmed</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 mt-3">
                                <p className="text-indigo-500 uppercase"> View Booking</p>
                            </button>
                        </div>
                    </div>


                   <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-10">
                            <div className="flex flex-row">
                            <img className="m-3" src="/assets/basket.png" />
                            <div>
                            <p className=" text-gray-800 font-extrabold mt-3">Basketball Court</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">12 Jun</p>
                            </div>
                            </div>
                            <p className=" text-green-500 mt-3 ml-16 font-extrabold">Confirmed</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 mt-3">
                                <p className="text-indigo-500 uppercase"> View Booking</p>
                            </button>

                        </div>
                    </div>
                
                    </div>

            
           
          
                    

                   
                    <div className="flex">
                        <p className="text-2xl text-indigo-900 mt-10 ml-3 mb-3">Categories</p>
                    </div>


                    <div className="flex flex-row items-center flex-wrap w-full">
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-5">
                            
                            <p className=" text-gray-800 font-extrabold mt-3">Movie Theatre</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Free</p>
                        </div>
                        <div className="h-30 w-30">
                       <img src="/assets/theatre.png"/>
                        </div>
                   
                
                    </div>
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-5">
                            
                            <p className=" text-gray-800 font-extrabold mt-3">Clubhouse</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Free</p>
                        </div>
                        <div className="h-30 w-30">
                            <img src="/assets/TableTennis.png" />
                        </div>
                    </div>

                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-5">
                            
                            <p className=" text-gray-800 font-extrabold mt-3">Swimming Pool</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Free</p>
                        </div>
                        <div className="h-30 w-30">
                       <img src="/assets/swimming.png"/>
                        </div>
                    </div>
                    

                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-5">
                            
                            <p className=" text-gray-800 font-extrabold mt-3">Basketball Court</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Free</p>
                        </div>
                        <div className="h-30 w-30">
                       <img src="/assets/basketball.png"/>
                        </div>
                    </div>

                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-5">
                            
                            <p className=" text-gray-800 font-extrabold mt-3">Tennis Court</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Free</p>
                        </div>
                        <div className="h-30 w-30">
                       <img src="/assets/tenniscourt.png"/>
                        </div>
                    </div>
                    </div>
                
                    
                    </div>
            
            
        </div>
    )
}

export default Amenities