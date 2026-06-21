import { auth } from "../firebase/firebase"

export default function ProfilePage({
  credits,
  isPro,
  totalProjects,
  videoCount,
  imageCount,
  voiceCount,
  scriptCount,
}) {

  return (

    <div className="space-y-6">

      <h2 className="text-4xl font-black">
        My Profile 👤
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <img
  src={
    auth.currentUser?.photoURL ||
    "https://ui-avatars.com/api/?name=User"
  }
  alt="Profile"
  className="w-24 h-24 rounded-full mb-4"
/>
          <h3 className="text-zinc-400">
            Email
          </h3>

          <p className="font-bold break-all">
            {auth.currentUser?.email}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-zinc-400">
            Credits
          </h3>

          <p className="font-bold text-2xl">
            {credits}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-zinc-400">
            Plan
          </h3>

          <p className="font-bold text-2xl">
            {isPro ? "👑 PRO" : "FREE"}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h3 className="text-zinc-400">
            Projects
          </h3>

          <p className="font-bold text-2xl">
            {totalProjects}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
  <h3 className="text-zinc-400">
    Videos
  </h3>

  <p className="font-bold text-2xl">
    🎬 {videoCount}
  </p>
</div>

<div className="bg-zinc-900 p-6 rounded-3xl">
  <h3 className="text-zinc-400">
    Images
  </h3>

  <p className="font-bold text-2xl">
    🖼️ {imageCount}
  </p>
</div>

<div className="bg-zinc-900 p-6 rounded-3xl">
  <h3 className="text-zinc-400">
    Voice
  </h3>

  <p className="font-bold text-2xl">
    🎤 {voiceCount}
  </p>
</div>

<div className="bg-zinc-900 p-6 rounded-3xl">
  <h3 className="text-zinc-400">
    Scripts
  </h3>

  <p className="font-bold text-2xl">
    📝 {scriptCount}
  </p>
</div>
      </div>

    </div>
  )
}