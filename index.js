// index.js

import express, { json } from 'express';
import { firestore } from './config/firebase_config.js';
import { sendNotification } from './noti_service.js';

const app = express();
const port = 3000;

// Middleware
app.use(json());
app.use(errorHandler);
// Routes
import authRoutes from './routes/auth_routes.js';
import errorHandler from './error_handler/global_error_handler.js';
app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal server error' });
});

//MESSAGE LISTENER
const messagesCollection = firestore.collection('Message');

messagesCollection.onSnapshot((snapshot) => {
    console.log('New message added: ', "newMessage");
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      const newMessage = change.doc.data();
      console.log('New message added: ', newMessage);

      // Example of how to send a notification (requires actual device token)
      // Assuming you have a device token stored somewhere or passed in the message
      const deviceToken = 'YOUR_DEVICE_TOKEN';
      sendNotification(deviceToken, 'New Message', `You have a new message: ${newMessage.content}`);
    }
    if (change.type === 'modified') {
      console.log('Message modified: ', change.doc.data());
    }
    if (change.type === 'removed') {
      console.log('Message removed: ', change.doc.data());
    }
  });
});
//END MESSAGE LISTENER
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
