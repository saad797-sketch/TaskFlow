import { useTareasState } from "../context/TareasContext"

export default function Stats() {
  const { tareas } = useTareasState()

  const total = tareas.length
  const completadas = tareas.filter(t => t.completado).length

  return (
    
    <div className="  flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
  <div className="  flex-1 bg-purple-800 px-4 py-3 rounded-md ">
    <p className="text-sm text-gray-400">Total</p>
    <h2 className="text-xl font-bold">{total}</h2>
  </div>

  <div className="  flex-1 bg-purple-800 px-4 py-3 rounded-md ">
    <p className="text-sm text-gray-400">Completadas</p>
    <h2 className="text-xl font-bold">{completadas}</h2>
  </div>
</div>
  )
}