import {
  doc,
  getDoc
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export async function getUser(
  email
) {

  const docRef =
    doc(
      db,
      "users",
      email
    )

  const docSnap =
    await getDoc(docRef)

  if (
    docSnap.exists()
  ) {

    return docSnap.data()
  }

  return null
}