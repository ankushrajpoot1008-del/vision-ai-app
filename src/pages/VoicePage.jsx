export default function VoicePage({
  voiceText,
  setVoiceText,
  generateVoice,
  stopVoice,
  voiceLoading,
}) {

  return (

    <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20">

      <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Voice AI Generator
      </h2>

      <p className="text-zinc-400 mb-8">
        Convert text into AI voice 🎙️
      </p>

      <textarea
        value={voiceText}
        onChange={(e) =>
          setVoiceText(e.target.value)
        }
        placeholder="Enter Hindi or English text..."
        className="w-full h-40 p-5 rounded-2xl bg-zinc-800 outline-none mb-5 border border-zinc-700 focus:border-yellow-500"
      />

      <div className="flex gap-4">

        <button
          onClick={generateVoice}
          className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-[1.02] transition"
        >
          {voiceLoading
            ? "Speaking..."
            : "Generate Voice"}
        </button>

        <button
          onClick={stopVoice}
          className="px-6 py-4 rounded-2xl font-bold bg-red-500 hover:scale-[1.02] transition"
        >
          Stop
        </button>

      </div>

    </div>
  )
}