import { useTareasActions, useTareasState } from "../context/TareasContext"

export default function Header() {
  const { sidebarVisible } = useTareasState()
  const { setSidebarVisible } = useTareasActions()

  return (
    <header style={{ marginBottom: "20px" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1>TaskFlow</h1>
          <p>Organiza tu productividad</p>
        </div>
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="md:hidden p-2 text-neutral-300 hover:text-neutral-100"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className="block w-full h-0.5 bg-current mb-1"></span>
            <span className="block w-full h-0.5 bg-current mb-1"></span>
            <span className="block w-full h-0.5 bg-current"></span>
          </div>
        </button>
      </div>
    </header>
  )
}