export default function VideoPage({

  topic,
  setTopic,
  generateScript,
  result,
  loading,
  copyScript,

}) {


return (

<div className="
bg-zinc-900
rounded-3xl
p-8
border
border-cyan-500/20
shadow-xl
">


<h2 className="
text-4xl
font-black
mb-3
bg-gradient-to-r
from-cyan-400
via-blue-400
to-purple-500
text-transparent
bg-clip-text
">

🎬 AI Script Generator

</h2>



<p className="
text-zinc-400
mb-8
text-lg
">

Generate viral YouTube & Instagram scripts with AI 🚀

</p>




<div className="
bg-zinc-800
rounded-3xl
p-1
border
border-zinc-700
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
focus:ring-cyan-500
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
from-cyan-500
to-blue-600

hover:scale-[1.03]

transition

disabled:opacity-50

"

>


{

loading

?

"✨ Creating AI Script..."

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

border-cyan-500/20

">


<div className="

flex

justify-between

items-center

mb-5

">


<h3 className="
text-2xl
font-black
">

✨ AI Result

</h3>



<button

onClick={copyScript}

className="

px-5

py-2

rounded-xl

bg-gradient-to-r
from-cyan-500
to-pink-500

font-bold

hover:scale-105

transition

"

>

📋 Copy

</button>



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