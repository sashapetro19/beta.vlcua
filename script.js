// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "твій ключ тут",
  authDomain: "твій домен",
  projectId: "назва проєкту"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login() {
  const email = document.getElementById("email").value;
  signInWithEmailAndPassword(auth, email, "тимчасовийПароль123")
    .then(() => alert("Успішний вхід"))
    .catch((error) => alert("Помилка входу"));
}
