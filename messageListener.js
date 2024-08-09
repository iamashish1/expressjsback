// // message_listener.js
// import { firestore } from "./config/firebase_config";
// import { sendNotification } from './noti_service.js';

// const messagesCollection = firestore.collection('Message');

// messagesCollection.onSnapshot((snapshot) => {
//     console.log("WTF")
//   snapshot.docChanges().forEach((change) => {
//     if (change.type === 'added') {
//       const newMessage = change.doc.data();
//       console.log('New message added:', newMessage);
//       // Send notification
//       console.log(newMessage)
//       console.log("WTF")
//       sendNotification(newMessage.token, 'New Message', newMessage.text);
//     }
//   });
// });
