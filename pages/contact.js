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


function Contact() {
    const [modalopen, setmodalopen] = useState(false)
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
            <Image className="w-12 h-12 bg-white  cursor-pointer" src={backbtn}/>
               <p className="pl-5"> Requests </p>
            </div>
           
            <div onClick={()=>setmodalopen(true)}   className={styles.billElements}>
                <div  className={styles.paybills}>
                <Image className={styles.gasimage} src={Security} alt="" />
                </div>
                <p className={`${styles.paytext}`}>Security</p>
            </div>


            <div  className={styles.billElements1}>          
            <div className={styles.paybills}>
                <Image className={styles.gasimage} src={police} alt="" />
                </div>
                <p className={styles.paytext}>Police</p>
                </div>


                <div   className={styles.billElements2}>
                <div className={styles.paybills}>
                <Image className={styles.gasimage} src={firebrigade} alt="" />
                </div>
                <p className={styles.paytext}>Fire Brigade</p>
                </div>


                <div   className={styles.billElements3}>
                <div className={styles.paybills}>
                <Image className={styles.gasimage} src={ambulance} alt="" />
                </div>
                <p className={styles.paytext}>Ambulance</p>
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
            <Modal isOpen={modalopen}
         onRequestClose={()=>setmodalopen(false)}
         className={styles.modal2}
         style={
             { 
                 content:{
                     backgroundColor:"white",
                     outline:"none"
                 },
                 overlay:{
                     backgroundColor: "rgb(0 0 0 / 75%)"
                 }
                     
                
                
             }
         }>
             <div>
                 <p style={{borderBottom:"1px solid grey"}} className="m-5 pb-5">Security</p>
             </div>
             <div>
                 <div style={{display:"flex"}}>
                     <div className={styles.phoneNumber1} >
                         <Image src={phoneNumber}/>
                     </div>
                 <p className={styles.callsec}>Call security</p>
                 </div>
                 <p className={styles.callsec}>Fire Alert</p>
                 <p className={styles.callsec}>Visitor Threat</p>
             </div>
            </Modal>

        </div>
    )
}

export default Contact
