import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import Security from '../public/assets/Security.png'
import ambulance from '../public/assets/ambulance1.png'
import police from '../public/assets/police.png'
import firebrigade from '../public/assets/ambulance.png'
import Search from '../public/assets/Search.png'
import phoneNumber from '../public/assets/phoneNumber.png'
import star from '../public/assets/Star.png'
import Modal from 'react-modal'
import * as Utilities from '../Utilities/utilities'
import  { useRouter } from 'next/router'



function Contact() {
  const handleClick=()=>{
      setmodalopen1(true)
      setmodalopen(false)
  }
  const handleClick1=()=>{
    setmodalopen1(false)
    setmodalopen2(true)
}
const handleClick3=()=>{
    setmodalopen(false)
    setmodalopen3(true)
}
const clickpush1=()=>{
    window.location.reload()
}
    let router=useRouter()
    const clickpush=()=>{
        router.push("/dashboard")
    }
    const [modalopen, setmodalopen] = useState(false)
    const [modalopen1, setmodalopen1] = useState(false)
    const [modalopen2, setmodalopen2] = useState(false)
    const [modalopen3, setmodalopen3] = useState(false)
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Navbar/>
            <div className=" md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                    <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Requests</p>
                    </div>
            </div>
           
            <div className="flex flex-col w-full mt-10 mb-10">
                    <div className="flex">
                    </div>
                    <div  className="flex flex-row flex-wrap">
                        <div onClick={()=>setmodalopen(true)} className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/Security.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Security </p>
                        </div>
                        <div  className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/police.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Police</p>
                        </div>
                        <div  className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/ambulance.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Fire Brigade</p>
                        </div>
                        <div  className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer">
                            <div className="h-10 w-10">
                                <img src="/assets/ambulance1.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Ambulance</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className={styles.contact}>
            <div className={styles.search12}>
             <div className={styles.searching}>
             <Image  src={Search} alt="" />
             </div>
             <input type="text" className={styles.search100} placeholder="Search Names">
             </input>
         </div>
         <div style={{position:"absolute" , top:"202px", left:"690px"}} >
                    <Image src={phoneNumber}/>
                 </div>
                 <div style={{position:"absolute" , top:"200px", left:"820px"}} >
                    <Image src={star}/>
                 </div>
            <div style={{display:"flex", position:"absolute", top:"120px"}}>
                <button className={styles.manage}><p className={styles.managetext}>Management</p></button>
                <button className={styles.buttons12}><p className={styles.buttons12txt}>Common Area</p></button>
                <button className={styles.buttons12}><p className={styles.buttons12txt}>A Wing</p></button>
                <button className={styles.buttons12}><p className={styles.buttons12txt}>B Wing</p></button>
                <button className={styles.buttons12}><p className={styles.buttons12txt}>C Wing</p></button>
            </div>
            
            <div  style={{display:"flex", position:"absolute", top:"200px", left:"20px"}}>
            <div>
               
                <p className={styles.contactName}>Abbas</p>
                <p className={styles.contactdiv}>A 101</p>
               
            </div>
           <div>
           </div>
            <div style={{position:"absolute", left:"700px"}}>
             <p>9999988888</p>
            </div>
            </div>
           
            </div>
            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen}
                onRequestClose={() => setmodalopen(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>        <div onRequestClose={() => setmodalopen(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                    <p className="font-bolder mb-3 mt-2">Security</p>
                    <div className="h-6 w-6 mt-2 cursor-pointer">
                    <img onClick={()=>setmodalopen(false)} src="/assets/close.png"/></div>
                </div>
                <div className="flex flex-row flex-wrap ml-4 mt-5">
                    <div className="mr-16">
                    <div onClick={handleClick3} className="flex flex-row cursor-pointer">
                        <div className="h-12 w-12">
                        <img src="/assets/phoneNumber.png"/></div>
                        <p className="mt-2 text-gray-800 text-sm">Call Security</p>
                    </div>
                    <div className="flex flex-row cursor-pointer">
                    <div className="h-14 w-14">
                        <img src="/assets/fire.png"/></div>
                        <p className="mt-2 text-gray-800 text-sm">Fire Alert</p>
                    </div>
                    <div className="flex flex-row">
                    <div className="h-14 w-14">
                        <img src="/assets/visitorthreat.png"/></div>
                        <p className="mt-2 text-gray-800 text-sm">Visitor Threat</p>
                    </div></div>
                    <div>
                    <div onClick={handleClick} className="flex flex-row cursor-pointer">
                    <div className="h-14 w-14">
                        <img src="/assets/message1.png"/></div>
                        <p  className="mt-2 text-gray-800 text-sm">Message Security</p>
                    </div>
                    <div className="flex flex-row cursor-pointer">
                    <div className="h-14 w-14">
                        <img src="/assets/stuckinlift.png"/></div>
                        <p className="mt-2 text-gray-800 text-sm">Stuck In Lift</p>
                    </div>
                    <div className="flex flex-row cursor-pointer">
                    <div className="h-14 w-14">
                        <img src="/assets/animalthreat.png"/></div>
                        <p className=" mt-2 text-gray-800 text-sm">Animal Threat</p>
                    </div></div>
                    </div>
                        <p className="ml-3 text-gray-800 text-sm">Other Issue</p>
                        <textarea type="text-area" rows="4" cols="30"  className="pl-2 outline-none pt-2 ml-2 rounded-md mt-3 bg-gray-100 mr-3"/>
                        <button className="border-gray-100 border bg-gray-300 w-full flex items-center justify-center mr-5 mt-20 rounded-full py-3">
                                <p className="text-gray-800 uppercase">SEND</p>
                            </button>
            </div>





            </Modal>

            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen1}
                onRequestClose={() => setmodalopen1(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>        <div onRequestClose={() => setmodalopen1(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                <div className="flex flex-row">
                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                    <p className="font-bolder mb-3 mt-2">Send Message To Security</p></div>
                    <div className="h-6 w-6 mt-2 cursor-pointer">
                    <img onClick={()=>setmodalopen1(false)} src="/assets/close.png"/></div>
                </div>
                <div className="flex flex-col justify-between">
                <textarea type="text-area" rows="4" cols="30"  className="pl-2 outline-none pt-2 ml-2 rounded-md mt-3 bg-gray-100 mr-3"/>
                <button onClick={handleClick1} className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center mr-5 rounded-full py-3 mt-48">
                                <p className="text-white uppercase">Send To Security</p>
                            </button></div>
            </div>





            </Modal>


            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen2}
                onRequestClose={() => setmodalopen2(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>        <div onRequestClose={() => setmodalopen2(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                <div className="flex flex-row">
                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                    <p className="font-bolder mb-3 mt-2">Back</p></div>
                    <div className="h-6 w-6 mt-2 cursor-pointer">
                    <img onClick={()=>setmodalopen2(false)} src="/assets/close.png"/></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/assets/jalvayu.png"/>
                    <p className="text-indigo-900 text-extrabold">JALVAYU C.H.S.</p>
                    <p className="text-gray-800 text-sm mt-2">Security has been  alerted about the fire. Expect a response in few minutes.</p>
                </div>
                <div className="mt-5 flex flex-col md:flex-row  items-center justify-between mt-48">
                                <button className="border-indigo-500 border mr-2 ml-2 bg-white w-full flex items-center justify-center rounded-full py-3 box-border md:mt-0 mt-5">
                                    <p className="text-indigo-500 uppercase">Undo cancelation</p>
                                </button>
                                <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                                    <p className="text-white uppercase">Done</p></button>
                            </div>
            </div>





            </Modal>


            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen3}
                onRequestClose={() => setmodalopen3(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>        <div onRequestClose={() => setmodalopen3(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                    <div className="flex flex-row">
                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                    <p className="font-bolder mb-3 mt-2">Call Security</p></div>
                    <div className="h-6 w-6 mt-2 cursor-pointer">
                    <img onClick={()=>setmodalopen3(false)} src="/assets/close.png"/></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/assets/jalvayu.png"/>
                    <p className="text-indigo-900 text-extrabold">JALVAYU C.H.S.</p>
                </div>

                <div className="flex flex-row items-center flex-wrap w-full mt-3 mb-24">
                    <div className="p-3 bg-gray-100 rounded-md ml-5 w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '32rem', minHeight: '13rem', maxHeight: "20rem" }}>
                        <div>
                            <p className="ml-5 text-gray-700 mt-3 font-light">Security Contact:</p>
                            <div className="flex flex-row mt-3 ml-3">
                            <p className="ml-4  font-extrabold  text-gray-900 font-bolder">Kripashankar Pandey</p>
                            </div>
                        <p className="ml-5 text-gray-700 mt-5 font-light">Security Number:</p>
                        <div className="flex flex-row mt-3 ml-6">
                            <img src="/assets/phoneNumber.png"/>
                            <p className="text-gray-900 text-sm font-semibold ml-2 mt-1">98937 82937</p>
                        </div>
                        </div></div></div>
            </div>





            </Modal>


        </div>
    )
}

export default Contact
