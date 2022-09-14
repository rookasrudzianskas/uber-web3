import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { UberProvider } from '../context/uberContext'

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <UberProvider>
            <Component {...pageProps} />
        </UberProvider>
    )
}

// @ts-ignore
export default MyApp;
//@ts-ignore
