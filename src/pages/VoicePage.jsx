import { Mic, Square } from "lucide-react"


export default function VoicePage({

  voiceText,
  setVoiceText,
  generateVoice,
  stopVoice,
  voiceLoading,

}) {



return (


<div className="

bg-zinc-900

rounded-3xl

p-8

border

border-yellow-500/20

shadow-xl

">





<h2 className="

text-4xl

font-black

mb-3

bg-gradient-to-r

from-yellow-400

via-orange-400

to-red-500

text-transparent

bg-clip-text

">


🎙️ Voice AI Generator


</h2>






<p className="

text-zinc-400

mb-8

text-lg

">

Convert your text into realistic AI voice ✨

</p>







<textarea


value={voiceText}


onChange={(e)=>

setVoiceText(e.target.value)

}


placeholder="Enter Hindi or English text..."


className="

w-full

h-48

p-5

rounded-3xl

bg-zinc-800

border

border-zinc-700

outline-none

resize-none

text-white

placeholder:text-zinc-500

focus:ring-2

focus:ring-yellow-500

mb-6

"


/>








<div className="flex gap-4">





<button


onClick={generateVoice}


disabled={voiceLoading}


className="

flex-1

py-4

rounded-2xl

font-black

text-lg

flex

justify-center

items-center

gap-2


bg-gradient-to-r

from-yellow-500

to-orange-500


hover:scale-[1.03]

transition


disabled:opacity-50

"


>


<Mic size={22}/>


{

voiceLoading

?

"Speaking..."

:

"Generate Voice"

}



</button>








<button


onClick={stopVoice}


className="

px-6

py-4

rounded-2xl

font-bold

flex

items-center

gap-2


bg-red-500

hover:bg-red-600

hover:scale-[1.03]

transition

"


>


<Square size={18}/>

Stop


</button>





</div>







{

voiceLoading && (

<p className="

mt-5

text-yellow-400

animate-pulse

text-center

font-bold

">

🎧 AI is generating voice...

</p>

)


}






</div>



)


}