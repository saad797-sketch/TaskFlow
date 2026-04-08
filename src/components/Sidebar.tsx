import { useTareasActions, useTareasState } from "../context/TareasContext"

export default function Sidebar() {

  const { filtro } = useTareasState()
  const { setFiltro } = useTareasActions()

  const items = [
    { label: "Todas", value: "todas" },
    { label: "Completadas", value: "completadas" },
    { label: "Pendientes", value: "pendientes" }
  ]

  return (
    <aside className="w-56 border-r border-neutral-800 px-4 py-6 flex flex-col gap-6">

      {/* Logo / título */}
      <h1 className="text-sm font-medium text-neutral-300">
        TaskFlow
      </h1>

      {/* Filtros */}
      <nav className="flex flex-col gap-1 text-sm">

        {items.map(item => (
          <button
            key={item.value}
            onClick={() => setFiltro(item.value)}
            className={`
              text-left px-2 py-1 rounded transition
              ${filtro === item.value
                ? "text-neutral-100 bg-purple-800"
                : "text-neutral-500 hover:text-purple-300"
              }
            `}
          >
            {item.label}
          </button>
        ))}

      </nav>

    </aside>
  )
}