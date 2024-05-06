// firebase_config.js

import firebaseAdmin from 'firebase-admin'; // Import the default export

// Initialize Firebase Admin SDK with service account credentials
import serviceAccount from '../serviceKey.json' assert { type: 'json' };

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

export const auth = admin.auth(); // Optionally export the auth instance
