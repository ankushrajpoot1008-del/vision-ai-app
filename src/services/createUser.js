import {
  doc,
  setDoc
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export async function createUser(
  email
) {

  await setDoc(
    doc(db, "users", email),
    {
      email,
      credits: 20,
      isPro: false,
    }
  )
}