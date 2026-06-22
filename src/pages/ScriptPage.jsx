import { Copy, Download, Sparkles } from "lucide-react"



export default function ScriptPage({

  topic,
  setTopic,
  generateScript,
  result,
  loading,
  copyScript,
  downloadScript,

}) {



return (


<div className="

bg-zinc-900

rounded-3xl

p-8

border

border-green-500/20

shadow-xl

">






<h2 className="

text-4xl

font-black

mb-3

bg-gradient-to-r

from-green-400

via-emerald-400

to-cyan-400

text-transparent

bg-clip-text

">


🔥 Viral Script AI


</h2>






<p className="

text-zinc-400

mb-8

text-lg

">


Generate viral YouTube & Instagram scripts using AI ✨


</p>









<div className="

bg-zinc-800

rounded-3xl

border

border-zinc-700

p-1

mb-5

">



<input


type="text"


value={topic}


onChange={(e)=>

setTopic(e.target.value)

}


placeholder="Enter your video topic..."


className="

w-full

p-5

rounded-3xl

bg-transparent

outline-none

text-white

placeholder:text-zinc-500

focus:ring-2

focus:ring-green-500

"


/>



</div>









<button


onClick={generateScript}


disabled={loading}


className="

w-full

py-4

rounded-2xl

font-black

text-lg


bg-gradient-to-r

from-green-500

to-emerald-600


hover:scale-[1.03]

transition


disabled:opacity-50

"


>



{

loading

?

"✨ Creating Script..."

:

"🚀 Generate Script"

}



</button>









{

result && (


<div className="

mt-8

bg-black/40

p-6

rounded-3xl

border

border-green-500/20

">





<div className="

flex

justify-between

items-center

mb-5

gap-3

">


<h3 className="

text-2xl

font-black

flex

items-center

gap-2

">


<Sparkles size={22}/>

AI Result


</h3>






<div className="flex gap-2">



<button


onClick={copyScript}


className="

px-4

py-2

rounded-xl

bg-green-500

font-bold

flex

items-center

gap-2

hover:scale-105

transition

"


>


<Copy size={18}/>

Copy


</button>







<button


onClick={downloadScript}


className="

px-4

py-2

rounded-xl

bg-blue-500

font-bold

flex

items-center

gap-2

hover:scale-105

transition

"


>


<Download size={18}/>

Download


</button>



</div>






</div>







<pre className="

whitespace-pre-wrap

text-zinc-300

leading-relaxed

text-sm

">


{result}


</pre>






</div>


)



}






</div>



)


}