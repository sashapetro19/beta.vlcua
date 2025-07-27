import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Конфігурація Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSKnnuy3j0CnHQexoh35wy25d-_5Gc_D0",
  authDomain: "vlcuademo.firebaseapp.com",
  projectId: "vlcuademo",
  storageBucket: "vlcuademo.firebasestorage.app",
  messagingSenderId: "810677818125",
  appId: "1:810677818125:web:d5369316016136ce661644"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Глобальна функція входу
window.login = () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("Вхід успішний!");
      // TODO: Можна перенаправити на /dashboard.html
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};
