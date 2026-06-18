import { Download } from "lucide-react"

export default function ImagePage({
  imagePrompt,
  setImagePrompt,
  generateImage,
  imgLoading,
  imageUrl,
  downloadImage,
}) {

  return (

    <div className="bg-zinc-900 rounded-3xl p-8 border border-pink-500/20">

      <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        AI Image Generator
      </h2>

      <p className="text-zinc-400 mb-8">
        Generate cinematic AI images 🎨
      </p>

      <input
        type="text"
        value={imagePrompt}
        onChange={(e) =>
          setImagePrompt(e.target.value)
        }
        placeholder="Describe your image..."
        className="w-full p-5 rounded-2xl bg-zinc-800 outline-none mb-5 border border-zinc-700 focus:border-pink-500"
      />

      <button
        onClick={generateImage}
        className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-[1.02] transition"
      >
        {imgLoading
          ? "Generating..."
          : "Generate Image"}
      </button>
      <p>{imageUrl}</p>

      {imageUrl && (

        <div className="mt-8">

          <img
            src={imageUrl}
            alt="AI"
            className="rounded-3xl w-full border border-zinc-700"
          />

          <button
            onClick={downloadImage}
            className="mt-5 bg-white text-black px-5 py-3 rounded-2xl flex items-center gap-2 font-bold"
          >
            <Download size={18} />
            Download Image
          </button>

        </div>

      )}

    </div>
  )
}