import { db } from '../firebase'

const createUserFirebase = async (email, password) => {
    const users = db.collection('users')
    const checkUserEmaial = await users.where('name', '==', email).get()
    if (!checkUserEmaial.empty) {
        console.log('Email jest w bazie')

        return 'Taki użytkownik istnieje'
    }
    if (email || password > 6 || checkUserEmaial.empty) {
        users.add({
            name: email,
            password: password,
        })
        return 'Rejestracja udana'
    }
}

export default createUserFirebase
