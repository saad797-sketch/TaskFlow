import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import { useTareasState } from "./context/TareasContext"

function App() {
  const { sidebarVisible } = useTareasState()

  return (
    <div className=" min-h-screen
  bg-neutral-900 text-neutral-100
  flex justify-center">

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${sidebarVisible ? 'w-56' : 'w-0'} md:w-56 md:static`}>
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