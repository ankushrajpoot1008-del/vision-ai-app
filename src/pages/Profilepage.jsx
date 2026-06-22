import { auth } from "../firebase/firebase"
import {
User,
Coins,
Crown,
Folder,
Video,
Image,
Mic,
FileText
} from "lucide-react"



export default function ProfilePage({

credits,
isPro,
totalProjects,
videoCount,
imageCount,
voiceCount,
scriptCount,

}) {



const cards=[

{
name:"Projects",
value:totalProjects,
icon:Folder
},

{
name:"Videos",
value:videoCount,
icon:Video
},

{
name:"Images",
value:imageCount,
icon:Image
},

{
name:"Voice",
value:voiceCount,
icon:Mic
},

{
name:"Scripts",
value:scriptCount,
icon:FileText
}


]





return (


<div className="space-y-6">



<h2 className="

text-4xl

font-black

bg-gradient-to-r

from-cyan-400

to-pink-500

text-transparent

bg-clip-text

">

👤 My Profile

</h2>






<div className="

bg-zinc-900

p-6

rounded-3xl

border

border-cyan-500/20

">



<img


src={

auth.currentUser?.photoURL ||

"https://ui-avatars.com/api/?name=User"

}


className="

w-28

h-28

rounded-full

mb-5

border-4

border-cyan-500

"

/>




<p className="text-zinc-400">

Email

</p>


<p className="font-bold break-all">

{auth.currentUser?.email}

</p>




</div>









<div className="grid md:grid-cols-3 gap-5">



<div className="bg-gradient-to-br from-purple-900 to-zinc-900 p-6 rounded-3xl">

<p className="text-zinc-400">

💰 Credits

</p>

<h3 className="text-3xl font-black">

{credits}

</h3>

</div>




<div className="bg-gradient-to-br from-yellow-900 to-zinc-900 p-6 rounded-3xl">

<p className="text-zinc-400">

👑 Plan

</p>


<h3 className="text-3xl font-black">

{isPro?"PRO":"FREE"}

</h3>


</div>



{

cards.map((card)=>

<div

key={card.name}

className="

bg-zinc-900

p-6

rounded-3xl

border

border-zinc-800

hover:scale-105

transition

"


>


<card.icon/>


<p className="text-zinc-400 mt-3">

{card.name}

</p>


<h3 className="text-3xl font-black">

{card.value}

</h3>


</div>


)

}



</div>



</div>


)

}