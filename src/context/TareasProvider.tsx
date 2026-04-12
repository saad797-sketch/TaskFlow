import { useState, useEffect } from "react"
import { TareasStateContext,  TareasActionsContext } from "./TareasContext"
import type { Tarea } from "../types/Tareas"

export const TareasProvider = ({ children }: { children: React.ReactNode }) => {

  // estado
  const [tareas, setTareas] = useState<Tarea[]>(() => {
    try {
      const guardadas = localStorage.getItem("tareas")
      return guardadas ? JSON.parse(guardadas) : []
    } catch {
      return []
    }
  })
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [textoEditado, setTextoEditado] = useState("")
  const [filtro, setFiltro] = useState("todas")
  const [sidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  // acciones
  const toggleTarea = (id: number) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completado: !t.completado } : t
    ))
  }

  const eliminarTarea = (id: number) => {
    const confirmar = window.confirm("¿Eliminar tarea?")
    if (!confirmar) return

    setTareas(tareas.filter(t => t.id !== id))
  }

  const editarTarea = (id: number, texto: string) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, texto } : t
    ))
  }

  return (
    <TareasStateContext.Provider value={{
      tareas,
      editandoId,
      textoEditado,
      filtro,
      sidebarVisible
    }}>
      <TareasActionsContext.Provider value={{
        setTareas,
        setEditandoId,
        setTextoEditado,
        setFiltro,
        toggleTarea,
        eliminarTarea,
        editarTarea,
        setSidebarVisible
      }}>
        {children}
      </TareasActionsContext.Provider>
    </TareasStateContext.Provider>
  )
}