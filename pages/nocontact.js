import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import Security from '../public/assets/Security.png'
import ambulance from '../public/assets/ambulance1.png'
import police from '../public/assets/police.png'
import firebrigade from '../public/assets/ambulance.png'
import Search from '../public/assets/Search.png'
import oopsImage from '../public/assets/oops.png'
import * as Utilities from '../Utilities/utilities'


function nocontact() {
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
       
        <div    className={styles.billElements}>
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
        <div style={{display:"flex", position:"absolute", top:"120px"}}>
            <button className={styles.manage}><p className={styles.managetext}>Management</p></button>
            <button className={styles.buttons12}><p className={styles.buttons12txt}>Common Area</p></button>
            <button className={styles.buttons12}><p className={styles.buttons12txt}>A Wing</p></button>
            <button className={styles.buttons12}><p className={styles.buttons12txt}>B Wing</p></button>
            <button className={styles.buttons12}><p className={styles.buttons12txt}>C Wing</p></button>
        </div></div>
            <div>
                <div>
                <p className={styles.oops}>OOPS!</p>
                <div className={styles.ad}>
                <p>We couldnt find any society members with <p>"ad"</p></p>
                <Image className={styles.oopsImage} src={oopsImage}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default nocontact
