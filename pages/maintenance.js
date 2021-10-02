import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import axios from 'axios'
import { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'


function Maintenance() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    const router =useRouter()
    const clickpush=()=>{
        router.push("/payments")
      }
    const [bills, SetBills] = useState([]);
    const getBills = async () => { // function to gather the bills

        try {
            let token = window.localStorage.getItem('token');
            let res = await axios.post(`${process.env.SERVER_URL}/bills/find/user`, {
                username: 'chandanbauri441@gmail.com',
            }, {
                headers: {
                    'Authorization': `bearer ${token}`
                }
            })
            if (res) {
                console.log(res.data)
                let { bills } = res.data
                console.log('BILLS LENGTH', bills.length)
                SetBills(bills);
            }
        } catch (error) {
            throw error
        }
    }

    const getTotalAmount = (dues) => {
        let total = 0;
        dues.forEach(item => {
            total += item.amount_to_be_paid;
        })
        return parseFloat(total).toFixed(2)
    }

    const getOrderID = async (amount) => {
        if (amount) {
            try {
                let token = window.localStorage.getItem('token');
                let res = await axios.post(`${process.env.SERVER_URL}/bills/create/instance`, {
                    "amount": amount * 100,
                    "currency": "INR",
                }, {
                    headers: {
                        'Authorization': `bearer ${token}`
                    }
                })
                if (res) {
                    console.log('GENERATE ORDER', res.data)
                    let { details } = res.data
                    return details
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            // handle if amount is zero
            throw alert('The Amount Provided is not valid');
        }
    }

    const proceedToPay = async (id, username, amount, prefill) => {
        try {
            let details = await getOrderID(amount)
            var options = {
                "key": 'rzp_test_f92dYtYC2qAaNr',
                "amount": amount * 100, // 2000 paise = INR 20, amount in paisa
                "name": "Appearz",
                "description": "some description",
                'order_id': details.id,
                "handler": async function (response) {
                    console.log(response);
                    let token = window.localStorage.getItem('token');
                    var values = {
                        billID: id,
                        "orderID": details.id,
                        "username": username,
                        "transaction": {
                            razorpay_signature: response.razorpay_signature,
                            razorpay_order_id: response.razorpay_order_id,
                            transactionid: response.razorpay_payment_id,
                            transactionamount: amount,
                        }
                    }
                    await axios.post(`${process.env.SERVER_URL}/bills/verify-signature`, values, {
                        headers: {
                            'Authorization': `bearer ${token}`
                        }
                    })
                        .then(res => { console.log(res.data) })
                        .catch(e => console.log(e))
                },
                prefill,
                "notes": {
                    "address": "Hello World"
                },
                "theme": {
                    "color": "#528ff0"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    useEffect(() => {
        getBills().catch(error => console.log(error))
    }, [])

    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
                <img onClick={clickpush} className="w-8 h-8 bg-white cursor-pointer" src="/assets/backbutton.png" />
                <p className="pl-5"> Maintenance </p>
            </div>
            <div className="overflow-auto">


                {
                    bills.map((item, index) => (
                        <div className={styles.bigBill} key={index}>
                            <div className={styles.smallBill}>
                                <div className={styles.element}>
                                    <p id="billdeets">Bill Details</p>
                                    <p className={styles.subjects2}></p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Bill Date:</p>
                                    <p className={styles.subjects2}>{item.bill_date}</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Due Date:</p>
                                    <p className={styles.subjects2}>{item.due_date}</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Bill Number:</p>
                                    <p className={styles.subjects2}>{item.bill_number}</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Account Name:</p>
                                    <p className={styles.subjects2}>{item.user.users_permissions_user.username}</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Bill Period</p>
                                    <p className={styles.subjects2}>1 Jan 2021- 3 Mar 2021</p>
                                </div>
                                {
                                    item.dues.map((due, index) => (
                                        <div className={styles.element} key={index}>
                                            <p className={styles.subjects}>{due.bill_title}</p>
                                            <p className={styles.subjects2}>{parseFloat(due.amount_to_be_paid).toFixed(2)}</p>
                                        </div>
                                    ))
                                }
                                {/* <div className={styles.element}>
                                    <p className={styles.subjects}>All Municpal dues:</p>
                                    <p className={styles.subjects2}>7273.00</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Sinking Funds</p>
                                    <p className={styles.subjects2}>730.00</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Periodic Building Maintenance:</p>
                                    <p className={styles.subjects2}>1200.00</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Common Area/ Parking:</p>
                                    <p className={styles.subjects2}>0.00</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Past Areas:</p>
                                    <p className={styles.subjects3}>780.00</p>
                                </div>
                                <div className={styles.element}>
                                    <p className={styles.subjects}>Interest Due:</p>
                                    <p className={styles.subjects3}>1600.00</p>
                                </div> */}
                                <div>

                                </div>
                            </div>
                            <div className={styles.finalAmount}>
                                <div style={{ display: 'flex' }}>
                                    <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>{`Rs. ${getTotalAmount(item.dues)}`}</p></p>
                                    <button className={styles.paymentButton}
                                        onClick={() => {
                                            // getOrderID(parseInt(getTotalAmount(item.dues)))
                                            proceedToPay(item.id, 'chandanbauri441@gmail.com', parseInt(getTotalAmount(item.dues)), {
                                                "name": 'Chandan Bauri',
                                                "email": 'chandanbauri441@gmail.com',
                                                "contact": '7001826129',
                                            })
                                        }}
                                    ><p className={styles.proceed}>Proceed to payment</p></button>
                                </div>


                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Maintenance