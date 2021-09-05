import nookies from 'nookies'
import { verifyIdToken } from '../auth/firebaseAdmin'
import app from '../auth/firebase'
import firebase from 'firebase/app'

const Lock = ({ session }) => {
    app()
    if (session) {
        return (
            <div>
                <h1>Authenticated</h1>
                <p>Jesteś zalogowany jako: {session}</p>
                <div onClick={async () => await firebase.auth().signOut()}>
                    Sign Out
                </div>
            </div>
        )
    } else {
        return <h2>No login</h2>
    }
}

export default Lock

export async function getServerSideProps(context) {
    try {
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token)
        const { uid, email } = token
        return {
            props: { session: `${email} ${uid}` },
        }
    } catch (err) {
        return {
            props: { session: null },
        }
    }
}
