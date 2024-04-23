const express = require('express');
const firebase = require('firebase');

const app = express();
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

app.get('/increment', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
