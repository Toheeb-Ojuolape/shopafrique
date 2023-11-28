import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "./firebase";
import { addDoc,collection } from "firebase/firestore";
import handleError from "@/utils/handleErrors";

export default {
  uploadImageToFirebase(file) {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const metadata = {
        contentType: file.type,
      };
      const storageRef = ref(storage, "vyouz/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              reject("Unauthorized access");
              break;
            case "storage/canceled":
              reject("Upload canceled");
              break;
            case "storage/unknown":
              reject("Unknown error");
              break;
            default:
              reject("Error occurred during upload");
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              reject("Error getting download URL");
            });
        }
      );
    });
  },

  async postDataToFirebase(value) {
    try {
      const docRef = await addDoc(collection(db, "vyouz"), value);
      return docRef;
    } catch (error) {
      handleError(error.message);
      throw new Error(error);
    }
  },
};
