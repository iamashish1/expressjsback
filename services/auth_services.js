//auth_service.js
import { auth } from "../config/firebase_config.js";
import { getAuth } from "firebase-admin/auth"


async function signUp(email, password) {
    try {
        const userRecord = await getAuth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            displayName: 'John Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false,
        });
        console.log('Successfully created new user:', userRecord.uid);
           // Generate a custom token
           const token = await getAuth().createCustomToken(userRecord.uid);

           return { user: userRecord, token };

    } catch (error) {
        // res.status(500).send({ message: error.message });
        throw error
    }


}

export async function signInWithEmailAndPassword(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export default { signUp, signInWithEmailAndPassword }; // Export both functions
