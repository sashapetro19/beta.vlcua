import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSKnnuy3j0CnHQexoh35wy25d-_5Gc_D0",
  authDomain: "vlcuademo.firebaseapp.com",
  projectId: "vlcuademo",
  storageBucket: "vlcuademo.firebasestorage.app",
  messagingSenderId: "810677818125",
  appId: "1:810677818125:web:d5369316016136ce661644"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Успішний вхід!");
      // Наприклад, переходимо на dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("🚫 Помилка: " + error.message);
    });
};
