import { Provider } from 'react-redux'
import { store } from '../app/store'
import { AuthProvider } from '../auth/auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </Provider>
    )
}

export default MyApp
