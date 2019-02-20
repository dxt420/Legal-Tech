import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();


// exports.newSubscriberNotification = functions.firestore
//     .document('subscribers/{subscriptionId}')
//     .onCreate(async (event,context)  => {
        
    
//     const data = event.data();
    
//     if (data !== undefined) {
//         // continue - error suppressed when used in this way.
//         const userId = data.userId
//         const subscriber = data.subscriberId

//         // Notification content
//         const payload = {
//           notification: {
//               title: 'New Delegate',
//               body: `${subscriber} has joined the conference!`,
//               icon: 'https://goo.gl/Fz9nrQ'
//           }
//         }
    
//         // ref to the device collection for the user
//         const db = admin.firestore()
//         const devicesRef = db.collection('devices').where('userId', '==', userId)
    
    
//         // get the user's tokens and send notifications
//         const devices = await devicesRef.get();
    
//         const tokens = [];
    
//         // send a notification to each device token
//         devices.forEach(result => {
//           const token = result.data().token;
    
//           tokens.push( token )
//         })
    
//         return admin.messaging().sendToDevice(tokens, payload)
//     }
    
   

// });






// exports.sendNotification = functions.database.ref('/users/{userId}/cards')
//   .onCreate((snapshot, context) => {
//       // Grab the current value of what was written to the Realtime Database.
//       const original = snapshot.val();

//        const toIDUser = original.toID;
//        const isGroupChat = original.isGroupChat;

//        if (isGroupChat) {
//        const tokenss =  admin.database().ref(`/users/${toIDUser}/tokens`).once('value').then(function(snapshot) {

// // Handle Promise
//        const tokenOfGroup = snapshot.val()

//       // get tokens from the database  at particular location get values 
//        const valuess = Object.keys(tokenOfGroup).map(k => tokenOfGroup[k]);

//      //console.log(' ____________ddd((999999ddd_________________ ' +  valuess );
//     const payload = {
//        notification: {
//                  title:   original.senderName + " :- ",
//                  body:    original.content
//     }
//   };

//   return admin.messaging().sendToDevice(valuess, payload);



// }, function(error) {

//   console.error(error);
// });

//        return ;
//           } else {
//           // get token from the database  at particular location
//                 const tokenss =  admin.database().ref(`/users/${toIDUser}/credentials`).once('value').then(function(snapshot) {
//                 // Handle Promise
//   // The Promise was "fulfilled" (it succeeded).

//      const credentials = snapshot.val()



//     // console.log('snapshot ......snapshot.val().name****^^^^^^^^^^^^kensPromise****** :- ', credentials.name);
//      //console.log('snapshot.....****snapshot.val().token****^^^^^^^^^^^^kensPromise****** :- ', credentials.token);


//      const deviceToken = credentials.token;

//     const payload = {
//        notification: {
//                  title:   original.senderName + " :- ",
//                  body:    original.content
//     }
//   };

//   return admin.messaging().sendToDevice(deviceToken, payload);


// }, function(error) {

//   console.error(error);
// });


//           }





//   return ;


//     });






















// exports.sendPush = functions.database.ref('/users/{userId}/cards')
//   .onCreate((snapshot, context) => {
//   // let projectStateChanged = false;
//   // let projectCreated = false;
//   let projectData = snapshot.val();
//   // if (!event.data.previous.exists()) {
//   //     projectCreated = true;
//   // }
//   // if (!projectCreated && event.data.changed()) {
//   //     projectStateChanged = true;
//   // }
//   let msg = `Request Contact ${projectData.title}`;
//   // if (projectCreated) {
//   //   msg = `The following new project was added to the project: ${projectData.title}`;
//   // }

//   // msg = `Hello: ${projectData.title}`;
//   return loadUsers().then(users => {
//       let tokens = [];
//       for (let user of users) {
//           tokens.push(user.pushToken);
//       }
//       let payload = {
//           notification: {
//               title: 'Firebase Notification',
//               body: msg,
//               sound: 'default',
//               badge: '1'
//           }
//       };
//       return admin.messaging().sendToDevice(tokens, payload);
//   });
// });



// function loadUsers() {
//   let dbRef = admin.database().ref('/users');
//   let defer = new Promise((resolve, reject) => {
// // tslint:disable-next-line: no-floating-promises
//       dbRef.once('value', (snap) => {
//           let data = snap.val();
//           let users = [];
//           for (var property in data) {
//               users.push(data[property]);
//           }
//           resolve(users);
//       }, (err) => {
//           reject(err);
//       });
//   });
//   return defer;
// }