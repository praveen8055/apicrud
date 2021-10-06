import { AuthContextProvider } from '../Contexts/Auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
