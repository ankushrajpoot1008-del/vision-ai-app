
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
    

  return (

    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col justify-between h-screen">

      <div>

        {/* LOGO */}

        <div className="flex items-center gap-3 mb-10">

          <Sparkles className="text-cyan-400" />

          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
            Vision AI
          </h1>

        </div>

        {/* MENU */}

        <div className="space-y-4">

          <button
            onClick={() => setActiveTab("video")}
            className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
              activeTab === "video"
                ? "bg-cyan-500/20 border border-cyan-500"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <Video />
            Video AI
          </button>

          <button
            onClick={() => setActiveTab("image")}
            className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
              activeTab === "image"
                ? "bg-pink-500/20 border border-pink-500"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <ImageIcon />
            Image AI
          </button>

          <button
            onClick={() => setActiveTab("voice")}
            className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
              activeTab === "voice"
                ? "bg-yellow-500/20 border border-yellow-500"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <Mic />
            Voice AI
          </button>

          <button
            onClick={() => setActiveTab("script")}
            className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
              activeTab === "script"
                ? "bg-green-500/20 border border-green-500"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <Wand2 />
            Script AI
          </button>

          <button
            onClick={() => setActiveTab("login")}
            className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
              activeTab === "login"
                ? "bg-purple-500/20 border border-purple-500"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            <LogIn />
            Login
          </button>
          <button
  onClick={() => setActiveTab("history")}
  className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
    activeTab === "history"
      ? "bg-blue-500/20 border border-blue-500"
      : "bg-zinc-900 hover:bg-zinc-800"
  }`}
>
  <History />
  History
</button>
<button
  onClick={() => setActiveTab("profile")}
  className={`w-full rounded-2xl p-4 flex items-center gap-3 transition ${
    activeTab === "profile"
      ? "bg-green-500/20 border border-green-500"
      : "bg-zinc-900 hover:bg-zinc-800"
  }`}
>
  <User />
  Profile
</button>
<button
  onClick={logoutUser}
  className="w-full rounded-2xl p-4 flex items-center gap-3 bg-red-500 hover:bg-red-600 transition"
>
  Logout
</button>

        </div>

      </div>
      {currentUser && (

  <div className="bg-zinc-900 p-4 rounded-2xl mb-5">

    <p className="text-zinc-400 text-sm">
      Logged in as
    </p>

    <p className="font-bold break-all">
      {currentUser.email}
    </p>

  </div>

)}

      {/* PRO CARD */}
      <p>TEST PRO CARD</p>

      <div className="bg-zinc-900 border border-cyan-500 p-5 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.2)]">

        <div className="flex items-center gap-2 mb-2">

          <Crown className="text-yellow-400" />

          <h2 className="font-bold text-xl">
            {isPro
              ? "PRO ACTIVE"
              : "PRO PLAN"}
          </h2>

        </div>

        <div className="flex items-center gap-2 text-zinc-400 mb-4">

          <Coins size={18} />

          Credits:
          {isPro
            ? " Unlimited"
            : ` ${credits}`}

        </div>

        <button
          onClick={activatePro}
          className="bg-gradient-to-r from-cyan-500 to-pink-500 w-full py-3 rounded-2xl font-bold hover:scale-105 transition"
        >
          {isPro
            ? "Activated"
            : "Upgrade"}
        </button>

      </div>

    </aside>
  )
}