import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../app/store'
import { initialCart } from '../slices/cartSlice'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
