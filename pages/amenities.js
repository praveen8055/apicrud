import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import theatre from "../public/assets/theatre.png"
import tennis from '../public/assets/tennis.png'
import backbtn from '../public/assets/backbutton.png'
import basket from '../public/assets/basket.png'
import TableTennis from '../public/assets/Tabletennis.png'
import basketball from "../public/assets/basketball.png"
import swimming from "../public/assets/swimming.png"
import tenniscourt from '../public/assets/tenniscourt.png'
import { useRouter } from 'next/router'

function amenities() {
    const router=useRouter()

    const handleClick=()=>{
        router.push("/movie")
    }
    return (
        <div>
             <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
            <Image className="w-12 h-12 bg-white  cursor-pointer" src={backbtn}/>
               <p className="pl-5"> Amenities </p>
            </div>

            
            <div style={{display:"flex", position:"absolute", top:"220px", left:"170px"}}>
            <div className={styles.sports}>
                <div  className="m-5">
                <Image src={tennis}/>
                </div>
                <p className={styles.tennis} >Tennis Court</p>
                <p className={styles.time23}>12 Jun</p>
                <p style={{color: "#23B10C", paddingLeft:"80px", fontSize:"15px"}}>Confirmed</p>
                <button  className={styles.booking}>
                <p className={styles.btntext1}>View Booking</p>
            </button></div>

            <div className={styles.sports}>
                <div  className="m-5">
                <Image src={basket}/>
                </div>
                <p className={styles.basketball} >Basketball Court</p>
                <button className={styles.viewbooking}>
                <p className={styles.btntext1}>View Booking</p>
            </button></div>
            </div>

          

            <p className={styles.categories}>Categories</p>
            <div onClick={handleClick} className={styles.ammenities}>
                <p className={styles.movie}>Movie Theatre</p>
                <p className={styles.free}>Free</p>
                <div  className={styles.theatre}>
                <Image src={theatre}/>
                </div>
            
            </div>
            <div className={styles.ammenities1}>
                <p className={styles.movie}>Clubhouse</p>
                <p className={styles.free}>Free</p>
                <div  className={styles.theatre}>
                <Image src={TableTennis}/>
                </div>
            
            </div>
            <div className={styles.ammenities2}>
                <p className={styles.movie}>Swimming Pool</p>
                <p className={styles.free}>Free</p>
                <div  className={styles.theatre}>
                <Image src={swimming}/>
                </div>
            
            </div>
            <div className={styles.ammenities3}>
                <p className={styles.movie}>Basketball Court</p>
                <p className={styles.free}>Free</p>
                <div  className={styles.theatre}>
                <Image src={basketball}/>
                </div>
            
            </div>
            <div className={styles.ammenities4}>
                <p className={styles.movie}>Tennis Court</p>
                <p className={styles.free}>Free</p>
                <div  className={styles.theatre}>
                <Image src={tenniscourt}/>
                </div>
            
            </div>
            
            
        </div>
    )
}

export default amenities