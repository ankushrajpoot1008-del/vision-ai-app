import {
  doc,
  updateDoc
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export async function updateCredits(
  email,
  credits
) {

  await updateDoc(
    doc(db, "users", email),
    {
      credits
    }
  )
}