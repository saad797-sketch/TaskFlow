import { useTareasActions, useTareasState } from "../context/TareasContext"

export default function Filtros() {
  const { filtro } = useTareasState()
  const { setFiltro } = useTareasActions()

  return (
    <div className="flex justify-center gap-3 sm:gap-5 my-4 sm:my-5">
      {["todas", "completadas", "pendientes"].map(f => (
        <button
          key={f}
          onClick={() => setFiltro(f)}
          style={{fontWeight: filtro === f ? "bold" : "normal",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  )
}