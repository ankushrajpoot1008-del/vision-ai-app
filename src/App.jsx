import { getProjects } from "./services/getProjects"
import ProfilePage from "./pages/Profilepage"
import { updatePro } from "./services/updatePro"
import { updateCredits } from "./services/updateCredits"
import { createUser } from "./services/createUser"
import { getUser } from "./services/getUser"
import HistoryPage from "./pages/HistoryPage"
import { useState, useEffect } from "react"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./firebase/firebase"
import { saveProject } from "./services/saveProject"
import LoginPage from "./pages/LoginPage"
import ScriptPage from "./pages/ScriptPage"
import VoicePage from "./pages/VoicePage"
import ImagePage from "./pages/ImagePage"
import VideoPage from "./pages/VideoPage"
import Sidebar from "./components/Sidebar"
import axios from "axios"

import {
  Sparkles,
  Video,
  Wand2,
  Mic,
  Image as ImageIcon,
  Crown,
  Copy,
  Download,
  Coins,
  Menu,
  X,
  LogIn,
} from "lucide-react"

export default function App() {

  // ---------------- STATES ----------------
  
  
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [activeTab, setActiveTab] =
    useState("video")

  const [userName, setUserName] =
    useState("")

  const [credits, setCredits] =
    useState(20)

  const [isPro, setIsPro] =
    useState(false)
  const [totalProjects, setTotalProjects] =
  useState(0)
  const [videoCount, setVideoCount] =
  useState(0)

const [imageCount, setImageCount] =
  useState(0)

const [voiceCount, setVoiceCount] =
  useState(0)

const [scriptCount, setScriptCount] =
  useState(0)

  // VIDEO + SCRIPT

  const [topic, setTopic] =
    useState("")

  const [result, setResult] =
    useState("")

  const [loading, setLoading] =
    useState(false)
  const [currentUser,setCurrentUser] = 
    useState(null)


const [appLoading, setAppLoading] = 
    useState(true)


useEffect(() => {

  const unsubscribe =
    onAuthStateChanged(
      auth,
      async (user) => {

        if (user) {

          setCurrentUser(user)

          let userData =
            await getUser(
              user.email
            )

          if (!userData) {

            await createUser(
              user.email
            )

            userData =
              await getUser(
                user.email
              )
          }

          setCredits(
            userData.credits
          )

          setIsPro(
            userData.isPro || false
          )


          const projects =
            await getProjects(
              user.email
            )


          setTotalProjects(
            projects.length
          )


          setVideoCount(
            projects.filter(
              p => p.type === "video"
            ).length
          )


          setImageCount(
            projects.filter(
              p => p.type === "image"
            ).length
          )


          setVoiceCount(
            projects.filter(
              p => p.type === "voice"
            ).length
          )


          setScriptCount(
            projects.filter(
              p => p.type === "script"
            ).length
          )


        } else {

          setCurrentUser(null)

        }


        setTimeout(() => {

          setAppLoading(false)

        },1500)


      }
    )


  return () => unsubscribe()


}, [])
  // IMAGE

  const [imagePrompt, setImagePrompt] =
    useState("")

  const [imageUrl, setImageUrl] =
    useState("")

  const [imgLoading, setImgLoading] =
    useState(false)

  // VOICE

  const [voiceText, setVoiceText] =
    useState("")

  const [voiceLoading, setVoiceLoading] =
    useState(false)

  // ---------------- LOGIN ----------------

  const loginUser = () => {

    if (!userName) {
      alert("Enter username")
      return
    }

    setIsLoggedIn(true)

    alert(`Welcome ${userName} 🚀`)
  }

  // ---------------- PRO ----------------

  const activatePro = async () => {

  setIsPro(true)

  setCredits(999999)

  await updatePro(
    currentUser.email
  )

  alert("🚀 PRO Activated")
}

  // ---------------- COPY ----------------

  const copyScript = () => {

    navigator.clipboard.writeText(result)

    alert("Copied")
  }
  const downloadScript = () => {

  const blob = new Blob(
    [result],
    { type: "text/plain" }
  )

  const url =
    window.URL.createObjectURL(
      blob
    )

  const link =
    document.createElement("a")

  link.href = url

  link.download =
    "ai-script.txt"

  document.body.appendChild(
    link
  )

  link.click()

  document.body.removeChild(
    link
  )

  window.URL.revokeObjectURL(
    url
  )
}

  // ---------------- DOWNLOAD IMAGE ----------------

  const downloadImage = async () => {

    try {

      const response =
        await fetch(imageUrl)

      const blob =
        await response.blob()

      const url =
        window.URL.createObjectURL(blob)

      const link =
        document.createElement("a")

      link.href = url

      link.download =
        "vision-ai-image.png"

      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)

    } catch (err) {

      console.log(err)

      alert("Download failed")
    }
  }

  // ---------------- VIDEO EXPORT ----------------

  const exportVideo = () => {

    alert(
      "🎬 Reel Export Started\n\nReal video export backend future update me add hoga 🚀"
    )
  }

  // ---------------- SCRIPT AI ----------------

  const generateScript = async () => {

    if (!isPro && credits <= 0) {
      alert("No credits left")
      return
    }

    if (!topic) {
      alert("Enter topic")
      return
    }

    setLoading(true)

    try {

      const response =
        await axios.post(

          "https://openrouter.ai/api/v1/chat/completions",

          {
            model:
              "openai/gpt-4o-mini",

            messages: [
  {
    role: "user",

    content: `
Create a viral YouTube Shorts script about ${topic}.

Rules:
- Detect the language of the user's topic.
- If the topic is in Hindi, write the entire response in Hindi.
- If the topic is in English, write the entire response in English.
- Do not mix Hindi and English.
- Give a clear title.
- Give proper headings.
- Give a creator-friendly script.
- Do not use hashtags.
- Do not use emojis.
- Do not use special symbols.
`,
  },
],
          },
          {
            headers: {
              Authorization:
                `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,

              "Content-Type":
                "application/json",
            },
          }
        )

      setResult(
        response.data.choices[0]
          .message.content
      )
      await saveProject(
  currentUser?.email ||
    "guest@gmail.com",
  "video",
  response.data.choices[0]
    .message.content
)

    } catch (err) {

      console.log(err)

      alert("AI failed")
    }

    setLoading(false)
  }

  // ---------------- IMAGE AI ----------------

  const generateImage = async () => {

    if (!isPro && credits <= 0) {

      alert("No credits left")

      return
    }
    

    if (!imagePrompt) {

      alert("Enter prompt")

      return
    }
    

    setImgLoading(true)

    try {

    const enhancedPrompt = 
`
Create a realistic high quality image of ${imagePrompt}.

Make it:
- photorealistic
- real world style
- professional camera photo
- accurate details
- 4K quality
`


const image =
  `https://image.pollinations.ai/prompt/${encodeURIComponent(
    enhancedPrompt
  )}?width=1024&height=1024&nologo=true`

      setImageUrl(image)
      console.log("Image URL:", image)
      if (auth.currentUser) {

  await saveProject(
    auth.currentUser.email,
    "image",
    image
  )

}

      if (!isPro) {

  const newCredits =
    credits - 1

  setCredits(
    newCredits
  )

  await updateCredits(
    currentUser.email,
    newCredits
  )
}

    } catch (err) {

      console.log(err)

      alert("Image failed")
    }

    setImgLoading(false)
  }

  // ---------------- REAL IMAGE SEARCH ----------------

const searchRealImage = async () => {

  if (!imagePrompt) {

    alert("Enter image name")

    return
  }

  const response = await fetch(
  `https://api.unsplash.com/search/photos?query=${encodeURIComponent(imagePrompt)}&client_id=YOUR_ACCESS_KEY`
)

const data = await response.json()

if(data.results.length > 0){

  setImageUrl(
    data.results[0].urls.regular
  )

}else{

  alert("No image found")

}
}

// ---------------- VOICE AI ----------------

   const generateVoice = async () => {

    if (!voiceText) {

      alert("Enter text")

      return
    }

    setVoiceLoading(true)

    const cleanText = voiceText

  .replace(/[#*•]/g, "")

  .replace(/🎬|🏷️|🎤|📝|🖼️/g, "")

  .replace(/TITLE:/gi, "")

  .replace(/HASHTAGS:/gi, "")

  .replace(/SCRIPT:/gi, "")

  .replace(/\n+/g, " ")

    const speech =
  new SpeechSynthesisUtterance(
    cleanText
  )
  speech.lang = "hi-IN"

speech.rate = 0.9

speech.pitch = 1

speech.volume = 1




window.speechSynthesis.speak(
  speech
)
    
    if (auth.currentUser) {

  await saveProject(
    auth.currentUser.email,
    "voice",
    voiceText
  )

}
if (!isPro) {

  const newCredits =
    credits - 1

  setCredits(
    newCredits
  )

  await updateCredits(
    currentUser.email,
    newCredits
  )
}


    setVoiceLoading(false)
  }

  // ---------------- STOP VOICE ----------------

  const stopVoice = () => {

    window.speechSynthesis.cancel()
  }

  // ---------------- UI ----------------

  // ---------------- UI ----------------


if (!currentUser) {

  return <LoginPage />

}


return (

  <div className="min-h-screen bg-black text-white flex overflow-hidden">

      {/* MOBILE BUTTON */}

      <button
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
        className="md:hidden fixed top-4 left-4 z-50 bg-zinc-900 p-3 rounded-xl"
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* SIDEBAR */}

       <Sidebar
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      credits={credits}
      isPro={isPro}
      activatePro={activatePro}
      currentUser={currentUser}
    />

        

      {/* MAIN */}

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">

        <h1 className="text-4xl md:text-6xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          AI Creator Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Create viral AI content instantly 🚀
        </p>
        <div className="bg-zinc-900 rounded-3xl p-6 mb-8 border border-cyan-500/20">

  <h2 className="text-2xl font-bold mb-4">
    Welcome 👋
  </h2>


  <div className="grid md:grid-cols-3 gap-5">


    <div className="bg-gradient-to-br from-purple-900 to-zinc-800 p-5 rounded-3xl border border-purple-500/20 hover:scale-105 transition">

      <p className="text-zinc-400">
        💰 Credits
      </p>

      <p className="text-3xl font-black mt-2">
        {credits}
      </p>

    </div>



    <div className="bg-gradient-to-br from-yellow-900 to-zinc-800 p-5 rounded-3xl border border-yellow-500/20 hover:scale-105 transition">

      <p className="text-zinc-400">
        👑 Plan
      </p>

      <p className="text-3xl font-black mt-2">
        {isPro ? "PRO" : "FREE"}
      </p>

    </div>



    <div className="bg-gradient-to-br from-blue-900 to-zinc-800 p-5 rounded-3xl border border-blue-500/20 hover:scale-105 transition">

      <p className="text-zinc-400">
        🚀 Projects
      </p>

      <p className="text-3xl font-black mt-2">
        {totalProjects}
      </p>

    </div>


  </div>


</div>

        {/* VIDEO TAB */}

        {activeTab === "video" && (

  <VideoPage
    topic={topic}
    setTopic={setTopic}
    generateScript={generateScript}
    result={result}
    loading={loading}
    copyScript={copyScript}
  />

)}
        {/* IMAGE TAB */}

        {activeTab === "image" && (

  <ImagePage
    imagePrompt={imagePrompt}
    setImagePrompt={setImagePrompt}
    generateImage={generateImage}
    imgLoading={imgLoading}
    imageUrl={imageUrl}
    downloadImage={downloadImage}
    searchRealImage={searchRealImage}
  />

)}
        {/* VOICE TAB */}

        {activeTab === "voice" && (

  <VoicePage
    voiceText={voiceText}
    setVoiceText={setVoiceText}
    generateVoice={generateVoice}
    stopVoice={stopVoice}
    voiceLoading={voiceLoading}
  />

)}
        {/* SCRIPT TAB */}

        {activeTab === "script" && (

  <ScriptPage
    topic={topic}
    setTopic={setTopic}
    generateScript={generateScript}
    result={result}
    loading={loading}
    copyScript={copyScript}
    downloadScript={downloadScript}

  />

)}dev
        {/* LOGIN TAB */}
        {activeTab === "history" && (

  <HistoryPage />

)}
        {activeTab === "profile" && (

  <ProfilePage
  credits={credits}
  isPro={isPro}
  totalProjects={totalProjects}
  videoCount={videoCount}
  imageCount={imageCount}
  voiceCount={voiceCount}
  scriptCount={scriptCount}
/>

)}
        {activeTab === "login" && (

  currentUser ? (

    <div className="bg-zinc-900 p-6 rounded-3xl">
      <h2 className="text-3xl font-bold">
        Already Logged In ✅
      </h2>

      <p className="text-zinc-400 mt-2">
        {currentUser.email}
      </p>

    </div>

  ) : (

    <LoginPage />

  )

)}
      </main>

    </div>
  )
}

  
