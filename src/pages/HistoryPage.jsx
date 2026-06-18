import { deleteProject } from "../services/deleteProject"
import { useEffect, useState } from "react"
import { getProjects } from "../services/getProjects"
import { auth } from "../firebase/firebase"
export default function HistoryPage() {

  const [projects, setProjects] =
    useState([])

  useEffect(() => {

    loadProjects()

  }, [])

  async function loadProjects() {

  if (!auth.currentUser) return

  const data =
    await getProjects(
      auth.currentUser.email
    )

  setProjects(data)
}
async function removeProject(id) {

  await deleteProject(id)

  loadProjects()
}

  return (

    <div className="bg-zinc-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Saved Projects
      </h2>

      {projects.length === 0 ? (

        <p className="text-zinc-400">
          No saved projects found
        </p>
        

      ) : (

        <div className="space-y-4">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-zinc-800 p-4 rounded-2xl"
            >

              <h3 className="font-bold mb-2">

  {project.type === "video" &&
    "🎬 Video"}

  {project.type === "image" &&
    "🖼️ Image"}

  {project.type === "voice" &&
    "🎤 Voice"}

  {project.type === "script" &&
    "📝 Script"}

</h3>

              {project.type === "image" ? (

  <img
    src={project.content}
    alt="AI"
    className="rounded-2xl max-w-sm"
  />

) : (

  <p className="text-zinc-300 whitespace-pre-wrap">
    {project.content}
  </p>

)}
              <button
  onClick={() =>
    removeProject(project.id)
  }
  className="mt-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
>
  Delete
</button>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}