export default function VideoPage({
  topic,
  setTopic,
  generateScript,
  result,
  loading,
  copyScript,
}) {

  return (

    <div className="bg-zinc-900 rounded-3xl p-8 border border-cyan-500/20">

      <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        AI Script Generator
      </h2>

      <p className="text-zinc-400 mb-8">
        Generate viral YouTube & Instagram scripts 🚀
      </p>

      <input
        type="text"
        value={topic}
        onChange={(e) =>
          setTopic(e.target.value)
        }
        placeholder="Enter topic..."
        className="w-full p-5 rounded-2xl bg-zinc-800 outline-none mb-5 border border-zinc-700 focus:border-cyan-500"
      />

      <button
        onClick={generateScript}
        className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[1.02] transition"
      >
        {loading
          ? "Generating..."
          : "Generate Script"}
      </button>

      {result && (

        <div className="mt-8 bg-zinc-800 p-6 rounded-2xl border border-zinc-700">

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-2xl font-bold">
              AI Result
            </h3>

            <button
              onClick={copyScript}
              className="bg-cyan-500 px-4 py-2 rounded-xl font-bold"
            >
              Copy
            </button>

          </div>

          <pre className="whitespace-pre-wrap text-zinc-300">
            {result}
          </pre>

        </div>

      )}

    </div>
  )
}