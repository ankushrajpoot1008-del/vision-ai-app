import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"

import {
  Video,
  Image as ImageIcon,
  Mic,
  Wand2,
  LogIn,
  History,
  User,
  Crown,
  Coins,
  Sparkles,
} from "lucide-react"


export default function Sidebar({
  activeTab,
  setActiveTab,
  credits,
  isPro,
  activatePro,
  currentUser,
}) {


  const logoutUser = async () => {

    await signOut(auth)

    alert("Logged Out")

  }



  const menu = [

    {
      id:"video",
      name:"Video AI",
      icon:Video,
      color:"cyan"
    },

    {
      id:"image",
      name:"Image AI",
      icon:ImageIcon,
      color:"pink"
    },

    {
      id:"voice",
      name:"Voice AI",
      icon:Mic,
      color:"yellow"
    },

    {
      id:"script",
      name:"Script AI",
      icon:Wand2,
      color:"green"
    },

    {
      id:"login",
      name:"Login",
      icon:LogIn,
      color:"purple"
    },

    {
      id:"history",
      name:"History",
      icon:History,
      color:"blue"
    },

    {
      id:"profile",
      name:"Profile",
      icon:User,
      color:"emerald"
    },

  ]



return (

<aside className="
w-72
bg-zinc-950
border-r
border-zinc-800
p-6
flex
flex-col
justify-between
h-screen
">


<div>


{/* LOGO */}

<div className="flex items-center gap-3 mb-10">


<div className="
p-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-pink-500
">

<Sparkles
className="text-white"
/>

</div>


<h1 className="
text-3xl
font-black
bg-gradient-to-r
from-cyan-400
to-pink-500
text-transparent
bg-clip-text
">

Vision AI

</h1>


</div>



{/* MENU */}


<div className="space-y-3">


{
menu.map((item)=>{


const Icon=item.icon


return (

<button

key={item.id}

onClick={()=>setActiveTab(item.id)}

className={`

w-full
p-4
rounded-2xl
flex
items-center
gap-3
font-semibold
transition-all
duration-300


${
activeTab===item.id

?

"bg-gradient-to-r from-cyan-500/30 to-pink-500/20 border border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105"

:

"bg-zinc-900 hover:bg-zinc-800 hover:scale-105"

}

`}

>


<Icon size={22}/>

{item.name}


</button>


)


})

}



<button

onClick={logoutUser}

className="
w-full
p-4
rounded-2xl
flex
items-center
gap-3
bg-red-500
hover:bg-red-600
font-bold
transition
hover:scale-105
"

>

Logout

</button>



</div>



</div>





<div>


{

currentUser && (

<div className="
bg-zinc-900
p-4
rounded-2xl
mb-5
border
border-zinc-800
">


<p className="
text-zinc-400
text-sm
">

Logged in as

</p>


<p className="
font-bold
break-all
">

{currentUser.email}

</p>


</div>

)

}





{/* PRO CARD */}


<div className="
bg-gradient-to-br
from-zinc-900
to-zinc-800
border
border-cyan-500/30
p-5
rounded-3xl
shadow-[0_0_30px_rgba(0,255,255,0.15)]
">


<div className="
flex
items-center
gap-2
mb-3
">


<Crown
className="text-yellow-400"
/>


<h2 className="
font-black
text-xl
">

{
isPro
?
"PRO ACTIVE"
:
"PRO PLAN"
}

</h2>


</div>



<div className="
flex
items-center
gap-2
text-zinc-400
mb-4
">


<Coins size={18}/>


Credits:

{
isPro
?
" Unlimited"
:
` ${credits}`
}


</div>




<button

onClick={activatePro}

className="
w-full
py-3
rounded-2xl
font-bold
bg-gradient-to-r
from-cyan-500
to-pink-500
hover:scale-105
transition
"

>


{
isPro
?
"Activated"
:
"Upgrade"
}


</button>



</div>



</div>


</aside>


)

}