import { addDoc, getDocs } from "firebase/firestore";
import { reqRideRef } from "../util/references";

export const getAllTaxiBookings = async () => {
    try {
        const taxiBookings = [];
        const taxiBookingsSnapshot = await getDocs(reqRideRef);
        taxiBookingsSnapshot.forEach((doc) => {
            taxiBookings.push(doc.data())
        });
        return taxiBookings;
    } catch (error) {
        throw error
    }
}

export const requestARide = (newFormData) => {
    try {
        return addDoc(reqRideRef, newFormData);
    } catch (error) {
        throw error
    }
}