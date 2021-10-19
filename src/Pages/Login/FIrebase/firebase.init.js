import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebas.config";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthentication;