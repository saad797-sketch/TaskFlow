import { useTareasActions, useTareasState } from "../context/TareasContext"

export default function Filtros() {
  const { filtro } = useTareasState()
  const { setFiltro } = useTareasActions()

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0"}}>
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