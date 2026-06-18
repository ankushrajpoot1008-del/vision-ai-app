import {
  doc,
  updateDoc
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export async function updatePro(
  email
) {

  await updateDoc(
    doc(db, "users", email),
    {
      isPro: true,
      credits: 999999
    }
  )
}