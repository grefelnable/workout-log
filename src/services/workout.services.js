import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const workoutCollectionRef = collection(db, "workout");
class WorkoutDataService {
  //Add new workout
  addWorkout = (newWorkout) => {
    return addDoc(workoutCollectionRef, newWorkout);
  };
  //Update workout
  updateWorkout = (id, updatedWorkout) => {
    //Variable to check if the particular data in the firestore exists or not.
    const workoutDoc = doc(db, "workout", id); //first param: firestore reference w/c is the db, second param: name of the collection, third param: id
    return updateDoc(workoutDoc, updatedWorkout);
  };
  //Delete workout log
  deleteWorkout = (id) => {
    //Variable to check if the particular data in the firestore exists or not.
    const workoutDoc = doc(db, "workout", id);
    return deleteDoc(workoutDoc);
  };
  //Getting all workout logs
  getAllWorkout = () => {
    return getDocs(workoutCollectionRef);
  };
  //Getting specific workout
  getWorkout = (id) => {
    const workoutDoc = doc(db, "workout", id);
    return getDoc(workoutDoc);
  };
}

export default new WorkoutDataService();
