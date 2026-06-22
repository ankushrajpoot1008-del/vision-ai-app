import { Download, Sparkles, Search } from "lucide-react"


export default function ImagePage({

  imagePrompt,
  setImagePrompt,
  generateImage,
  imgLoading,
  imageUrl,
  downloadImage,
  searchRealImage,

}) {


return (

<div className="

bg-zinc-900

rounded-3xl

p-8

border

border-pink-500/20

shadow-xl

">





<h2 className="

text-4xl

font-black

mb-3

bg-gradient-to-r

from-pink-400

via-purple-400

to-cyan-400

text-transparent

bg-clip-text

">

🎨 AI Image Generator

</h2>




<p className="

text-zinc-400

mb-8

text-lg

">

Create cinematic AI images instantly ✨

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


value={imagePrompt}


onChange={(e)=>

setImagePrompt(e.target.value)

}


placeholder="Describe your image idea..."


className="

w-full

p-5

rounded-3xl

bg-transparent

outline-none

text-white

placeholder:text-zinc-500

focus:ring-2

focus:ring-pink-500

"


/>


</div>







<button


onClick={generateImage}


disabled={imgLoading}


className="

w-full

py-4

rounded-2xl

font-black

text-lg

bg-gradient-to-r

from-pink-500

to-purple-600

hover:scale-[1.03]

transition

disabled:opacity-50

"


>


{

imgLoading

?

"✨ Creating Image..."

:

"🚀 Generate Image"

}


</button>








<button


onClick={searchRealImage}


className="

w-full

mt-4

py-4

rounded-2xl

font-bold

flex

justify-center

items-center

gap-2

bg-zinc-800

border

border-zinc-700

hover:bg-zinc-700

hover:scale-[1.02]

transition

"


>


<Search size={20}/>

🌐 Search Real Image


</button>









{

imageUrl && (


<div className="mt-8">


<div className="

bg-black/40

p-4

rounded-3xl

border

border-pink-500/20

">



<img


src={imageUrl}


alt="AI Generated"


className="

rounded-2xl

w-full

border

border-zinc-700

"


/>




</div>







<button


onClick={downloadImage}


className="

mt-5

w-full

py-4

rounded-2xl

flex

justify-center

items-center

gap-2

font-black

bg-gradient-to-r

from-cyan-500

to-blue-600

hover:scale-[1.03]

transition

"


>


<Download size={20}/>

Download Image


</button>




</div>


)


}




</div>


)


}