import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

function App() {
  return (
    <div className=" min-h-screen
  bg-neutral-900 text-neutral-100
  flex justify-center">

      <div className="">
        <Sidebar />
      </div>

      <div className="    w-full
    max-w-xl
    px-4
    pt-12
    sm:pt-16">
        <Main />
      </div>

    </div>
  )
}

export default App