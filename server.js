require('dotenv').config();


var firebase = require('firebase');
firebase.initializeApp({
    "apiKey": "AIzaSyDFNW8MN6rPrdwJnxV1S_RLPX2dgg4gVNg",
    "authDomain": "legaltech-7887b.firebaseapp.com",
    "databaseURL": "https://legaltech-7887b.firebaseio.com",
    "projectId": "legaltech-7887b",
    "storageBucket": "legaltech-7887b.appspot.com",
    "messagingSenderId": "470663134509"


});
var ref = firebase.database().ref();



    const express = require('express');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');
    const pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_KEY,
        secret: process.env.PUSHER_SECRET,
        cluster: process.env.PUSHER_CLUSTER,
        encrypted: true,
    });

    const app = express();
    // const port = process.env.PORT || 4000;
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    // );
    //   next();
    // });

    // app.post('/message', async (req, res) => {
    //   const { body } = req
    //   const { comment } = body
    //   const data = {
    //     comment,
    //     timeStamp: new Date(),
    //   };
    //   try {
        
    //     pusher.trigger('comments', 'message', data);
    //     ref.child("posts").push(data);
    //   } catch (e) {
    //       console.log(e);
    //   }
    //   res.json(data);
    // })
    // app.listen(port, () => {
    //   console.log(`Server started on port ${port}`);
    // });













    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.post('/pusher/auth', (req, res) => {
    let socketId = req.body.socket_id;
    let channel = req.body.channel_name;

    random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    let presenceData = {
        user_id: random_string,
        user_info: {
            username: '@' + random_string,
        }
    };

    let auth = pusher.authenticate(socketId, channel, presenceData);

    res.send(auth);
});

app.post('/create-post', (req, res) => {
    // trigger a new post event via pusher
    pusher.trigger('presence-channel', 'new-post', {
        'username': req.body.username,
        'content': req.body.content
    })

    res.json({ 'status': 200 });
});

let port = 3128;
app.listen(port);
console.log('listening');