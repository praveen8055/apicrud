import axios from "axios"


export const isLoggedIn = async () => {
    try {
        console.log("INITIATING VERIFICATION ..")
        let value = localStorage.getItem('token') // getting Auth Token
        console.log("VERIFICATION INITIATED")
        if (!value) {
            console.log("YOU'RE NOT VERIFIED")
            window.location.href = '/login' // redirecting if token doesn't exists
            return
        }
        console.log("REQUESTING THE BACKEND TO VERIFY")
        let res = await axios.get(`${process.env.SERVER_URL}/users/me`, {
            headers: {
                Authorization: `bearer ${value}`
            }
        })
        console.log("GOT THE RESPONSE")
        if (res && res.status == 200) {
            console.log("ITS A VALID RESPONSE")
            let { approve, blocked, confirmed, email, id, member_profile } = res.data
            if (blocked) {
                // handle blocked Users
                window.location.href = '/login'
                return
            }
            if (!approve && !confirmed && !email && !id && !member_profile) {
                // handle a non existing or un confirmed user 
                window.location.href = '/login'
                return
            }
            return
        }
        window.location.href = '/login'
    } catch (error) {
        window.location.href = '/login'
        console.error(error)
    }
}
