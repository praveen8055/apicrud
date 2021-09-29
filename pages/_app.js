import '../styles/globals.css'
import { PageContextProvider } from '../Contexts/CurrentUser'


function MyApp({ Component, pageProps }) {

  return< PageContextProvider>
     <Component {...pageProps}/> 
  </PageContextProvider>
}

export default MyApp
