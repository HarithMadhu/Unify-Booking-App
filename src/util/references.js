import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const reqRideRef = collection(db, "requestRide");