import { useTareasState } from "../context/TareasContext"
import TareaItem from "./TareaItem"

export default function Lista() {

  const { tareas, filtro } = useTareasState()

  const filtradas = tareas.filter(t => {
    if (filtro === "completadas") return t.completado
    if (filtro === "pendientes") return !t.completado
    return true
  })

  return (
    <ul className="flex flex-col gap-1">
      {filtradas.map(t => (
        <TareaItem key={t.id} tarea={t} />
      ))}
    </ul>
  )
}