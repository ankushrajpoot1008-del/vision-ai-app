import {
  doc,
  deleteDoc
} from "firebase/firestore"

import { db }
from "../firebase/firebase"

export async function deleteProject(id){

  await deleteDoc(
    doc(
      db,
      "projects",
      id
    )
  )
}