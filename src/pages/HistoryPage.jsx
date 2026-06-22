import { deleteProject } from "../services/deleteProject"
import { useEffect, useState } from "react"
import { getProjects } from "../services/getProjects"
import { auth } from "../firebase/firebase"
import { Search, Trash2 } from "lucide-react"


export default function HistoryPage() {


const [projects,setProjects] = useState([])

const [search,setSearch] = useState("")



useEffect(()=>{

loadProjects()

},[])



async function loadProjects(){


if(!auth.currentUser) return


const data =
await getProjects(
auth.currentUser.email
)


setProjects(data)


}




async function removeProject(id){

await deleteProject(id)

loadProjects()

}




const filteredProjects =

projects

.filter((project)=>

project.content
?.toLowerCase()
.includes(
search.toLowerCase()
)

)

.sort(
(a,b)=>
b.createdAt?.seconds -
a.createdAt?.seconds
)





return (


<div className="

bg-zinc-900

rounded-3xl

p-8

border

border-blue-500/20

shadow-xl

">


<h2 className="

text-4xl

font-black

mb-3

bg-gradient-to-r

from-blue-400

to-cyan-400

text-transparent

bg-clip-text

">

📚 Saved History

</h2>



<p className="text-zinc-400 mb-8">

Your AI creations collection 🚀

</p>





<div className="relative mb-6">


<Search

className="absolute left-4 top-4 text-zinc-500"

/>


<input


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


placeholder="Search your history..."


className="

w-full

p-4

pl-12

rounded-2xl

bg-zinc-800

border

border-zinc-700

outline-none

focus:ring-2

focus:ring-blue-500

"

/>


</div>






{

filteredProjects.length===0 ?

<p className="text-zinc-400">

No projects found

</p>


:


<div className="space-y-5">


{

filteredProjects.map((project)=>(


<div

key={project.id}

className="

bg-zinc-800

p-5

rounded-3xl

border

border-zinc-700

hover:scale-[1.02]

transition

"

>



<h3 className="text-xl font-bold mb-2">


{

project.type==="video" && "🎬 Video"

}

{

project.type==="image" && "🖼️ Image"

}

{

project.type==="voice" && "🎤 Voice"

}

{

project.type==="script" && "📝 Script"

}


</h3>





{

project.createdAt &&

<p className="text-xs text-zinc-500 mb-3">

{project.createdAt
.toDate()
.toLocaleString()}

</p>

}





{

project.type==="image"

?

<img

src={project.content}

alt="AI"

className="rounded-2xl max-w-sm"

/>


:

<p className="text-zinc-300 whitespace-pre-wrap">

{project.content?.slice(0,200)}

{project.content?.length>200
?"..."
:""}

</p>


}






<button


onClick={()=>removeProject(project.id)}


className="

mt-4

px-5

py-3

rounded-xl

bg-red-500

hover:bg-red-600

flex

items-center

gap-2

font-bold

"


>


<Trash2 size={18}/>

Delete


</button>




</div>



))


}



</div>


}



</div>


)


}