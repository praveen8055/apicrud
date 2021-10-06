import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HandleRedirectScreen() {
    let router = useRouter()
    const { provider, id_token, access_token } = router.query
    const requestCallBack = async () => {
        if (provider && id_token && access_token)
            try {
                let res = await axios.get(`${process.env.SERVER_URL}/auth/${provider}/callback/?access_token=${access_token}`)
                console.log('RESPONSE', res)
                if (res && res.status == 200) {
                    let { jwt, user } = res.data
                    if (jwt && user && user.confirmed && user.email) {
                        window.localStorage.setItem('token', jwt)
                        window.location.href = '/dashboard'
                        return
                    }
                    window.location.href = '/login'
                    return
                }
                window.location.href = '/login'
            } catch (error) {
                console.error('ERROR', error)
            }
    }
    useEffect(() => {
        requestCallBack().catch(error => console.error(error))
    }, [id_token, access_token])
    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            <div>
                <h1 className="text-indigo-500 text-xl">Please Wait ...</h1>
            </div>
        </div>
    )
}
