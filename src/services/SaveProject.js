import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export const saveProject = async (
  userEmail,
  type,
  content
) => {

  try {

    await addDoc(
      collection(db, "projects"),
      {

        userEmail,

        type,

        content,

        createdAt:
          serverTimestamp(),
      }
    )

    console.log(
      "Project Saved 🚀"
    )

  } catch (err) {

    console.log(err)
  }
}