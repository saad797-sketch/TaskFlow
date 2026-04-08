import { useTareasActions, useTareasState } from "../context/TareasContext"
import type { Tarea } from "../types/Tareas"

function TareaItem({ tarea }: { tarea: Tarea }) {

  const { editandoId, textoEditado } = useTareasState()

  const {
    toggleTarea,
    eliminarTarea,
    setEditandoId,
    setTextoEditado,
    editarTarea
  } = useTareasActions()

  return (
    <li className="flex items-center justify-between py-2 border-b border-neutral-800">

  {editandoId === tarea.id ? (
    <input
      className="flex-1 bg-transparent outline-none text-sm"
      value={textoEditado}
      onChange={(e) => setTextoEditado(e.target.value)}
      onKeyDown={(e) => {
       if (e.key === "Enter") {
        e.currentTarget.blur()
        setEditandoId(null)
  }
}}
      onBlur={() => {
        editarTarea(tarea.id, textoEditado.trim() || tarea.texto)
        setEditandoId(null)
      }}
      autoFocus
    />
  ) : (
    <span
      onClick={() => toggleTarea(tarea.id)}
      className={`
        flex-1 text-sm cursor-pointer transition
        ${tarea.completado
          ? "line-through text-neutral-500"
          : "hover:text-neutral-300"}
      `}
    >
      {tarea.texto}
    </span>
  )}

  <div className="flex gap-2 text-neutral-500">
    <button
      onClick={() => eliminarTarea(tarea.id)}
      className="hover:text-red-400 transition"
    >
      ✕
    </button>

    <button
      onClick={() => {
        setEditandoId(tarea.id)
        setTextoEditado(tarea.texto)
      }}
      className="hover:text-neutral-300 transition"
    >
      •••
    </button>
  </div>

</li>
  )
}

export default TareaItem