import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore"

import { db } from "../firebase/firebase"

export async function getProjects(
  userEmail
) {

  const q = query(
    collection(db, "projects"),
    where(
      "userEmail",
      "==",
      userEmail
    )
  )

  const querySnapshot =
    await getDocs(q)

  const projects = []

  querySnapshot.forEach((doc) => {

    projects.push({
      id: doc.id,
      ...doc.data(),
    })

  })

  return projects
}