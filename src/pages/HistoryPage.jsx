import { deleteProject } from "../services/deleteProject"
import { useEffect, useState } from "react"
import { getProjects } from "../services/getProjects"
import { auth } from "../firebase/firebase"

export default function HistoryPage() {

  const [projects, setProjects] =
    useState([])

  const [search, setSearch] =
    useState("")


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


  const filteredProjects =
    projects
      .filter((project) =>
        project.content
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      .sort(
        (a, b) =>
          b.createdAt?.seconds -
          a.createdAt?.seconds
      )


  return (

    <div className="bg-zinc-900 rounded-3xl p-8">


      <h2 className="text-3xl font-bold mb-6">
        Saved Projects
      </h2>


      <input

        type="text"

        placeholder="Search your history..."

        value={search}

        onChange={(e)=>
          setSearch(e.target.value)
        }

        className="w-full mb-6 p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"

      />


      {filteredProjects.length === 0 ? (


        <p className="text-zinc-400">
          No saved projects found
        </p>


      ) : (


        <div className="space-y-4">


          {filteredProjects.map((project) => (


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


              {project.createdAt && (


                <p className="text-xs text-zinc-500 mb-2">

                  {project.createdAt
                    .toDate()
                    .toLocaleString()}

                </p>


              )}



              {project.type === "image" ? (


                <img

                  src={project.content}

                  alt="AI"

                  className="rounded-2xl max-w-sm"

                />


              ) : (


                <p className="text-zinc-300 whitespace-pre-wrap">

                  {project.content?.slice(0,200)}

                  {project.content?.length > 200
                    ? "..."
                    : ""}

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