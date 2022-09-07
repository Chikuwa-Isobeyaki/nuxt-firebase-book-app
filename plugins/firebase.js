import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCu7kw_vB9zxBNpeuI97TsJcy1IeWG8Ta4",
//   authDomain: "nuxt-spa-book-app-90ce5.firebaseapp.com",
//   projectId: "nuxt-spa-book-app-90ce5",
//   storageBucket: "nuxt-spa-book-app-90ce5.appspot.com",
//   messagingSenderId: "532494128702",
//   appId: "1:532494128702:web:30e5c81fd594f24742a36f"
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// firebaseを他のファイルで使えるよう設定
export default ( context, inject) => {
  inject('firebase', firebaseApp)
}
