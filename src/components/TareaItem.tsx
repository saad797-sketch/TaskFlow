import { useState } from "react"
import { useTareasActions, useTareasState } from "../context/TareasContext"
import type { Tarea } from "../types/Tareas"

function TareaItem({ tarea }: { tarea: Tarea }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { editandoId, textoEditado } = useTareasState()

  const {
    toggleTarea,
    eliminarTarea,
    setEditandoId,
    setTextoEditado,
    editarTarea
  } = useTareasActions()

  return (
    <>
      <li className=" flex items-center justify-between gap-2 py-3 border-b border-neutral-800">

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
      className={`flex-1 min-w-0 text-base break-all
        ${tarea.completado
          ? "line-through text-neutral-500"
          : "hover:text-neutral-300"}
      `}
    >
      {tarea.texto}
    </span>
  )}

  <div className="flex gap-2 text-neutral-500 shrink-0">
    <button
      onClick={() => setConfirmOpen(true)}
      className="hover:text-red-400 transition"
    >
      ✕
    </button>

    <button
      onClick={() => {
        setEditandoId(tarea.id)
        setTextoEditado(tarea.texto)
      }}
      className="px-3 py-2 text-sm active:scale-95 hover:text-green-300 transition shrink-0"
    >
      •••
    </button>
  </div>

      </li>

      {confirmOpen && (
        <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    onClick={(e) => {
      if (e.target === e.currentTarget) setConfirmOpen(false)
    }}
  >
    <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-neutral-100 shadow-xl">
      <p className="mb-4 text-base font-medium">¿Eliminar tarea?</p>
      <p className="mb-5 text-sm text-neutral-400">Esta acción no se puede deshacer.</p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setConfirmOpen(false)}
          className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            eliminarTarea(tarea.id)
            setConfirmOpen(false)
          }}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
)}
    </>
  )
}

export default TareaItem