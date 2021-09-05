const admin = require('firebase-admin')

import { secret } from './secret'

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(secret),
            databaseURL: 'https://fireshop-8862a.firebaseio.com',
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((err) => {
            throw err
        })
}
