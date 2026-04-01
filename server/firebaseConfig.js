const admin = require('firebase-admin');

// In a real scenario, you'd load the service account from an env variable or file
// const serviceAccount = require('./serviceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// Using default setup or mocked configuration for now so it doesn't crash
try {
    admin.initializeApp();
} catch (error) {
    console.warn("Firebase Admin Initialization Warning:", error.message);
}

const db = admin.firestore?.() || null;
const auth = admin.auth?.() || null;

module.exports = { admin, db, auth };
