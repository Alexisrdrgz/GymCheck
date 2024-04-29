import express, { Router } from "express";
const firebase = require('firebase');
import serverless from "serverless-http";


const api = express();
const router = Router();
const PORT = 3000;

// Configura Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDqj5hIimXAKCjU_WAmFoWtWvFDWGxXS5w",
    authDomain: "gymcheck-59522.firebaseapp.com",
    projectId: "gymcheck-59522",
    storageBucket: "gymcheck-59522.appspot.com",
    messagingSenderId: "57760860650",
    appId: "1:57760860650:web:c042bb527b37d330f84a93",
    measurementId: "G-Y0Y4MKBDW2"
};

firebase.initializeApp(firebaseConfig);


// Obtén una referencia a la base de datos de Firebase
const db = firebase.database();
const counterRef = db.ref('contador');

// Asegúrate de que exista el contador en la base de datos
counterRef.once('value', (snapshot) => {
    if (!snapshot.exists()) {
        counterRef.set(0);
    }
});



router.get('/increment', (req, res) => {
    // Incrementa el contador en la base de datos
    counterRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    }, (error, committed, snapshot) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el contador' });
        } else {
            res.json({ count: snapshot.val() });
            
        }
    });
});

api.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

api.use("/api/", router);

export const handler = serverless(api);
