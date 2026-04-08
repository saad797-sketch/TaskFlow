import { createContext, useContext } from "react"
import type { Tarea } from "../types/Tareas"

// STATE
type TareasState = {
  tareas: Tarea[]
  editandoId: number | null
  textoEditado: string
  filtro: string
}

// ACTIONS
type TareasActions = {
  setTareas: React.Dispatch<React.SetStateAction<Tarea[]>>
  setEditandoId: (id: number | null) => void
  setTextoEditado: (t: string) => void
  setFiltro: (f: string) => void
  toggleTarea: (id: number) => void
  eliminarTarea: (id: number) => void
  editarTarea: (id: number, texto: string) => void
}

// context separados
export const TareasStateContext = createContext<TareasState | null>(null)
export const TareasActionsContext = createContext<TareasActions | null>(null)

// hooks
export const useTareasState = () => {
  const ctx = useContext(TareasStateContext)
  if (!ctx) throw new Error("useTareasState fuera de provider")
  return ctx
}

export const useTareasActions = () => {
  const ctx = useContext(TareasActionsContext)
  if (!ctx) throw new Error("useTareasActions fuera de provider")
  return ctx
}