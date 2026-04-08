import { useTareasState } from "../context/TareasContext"

export default function Stats() {
  const { tareas } = useTareasState()

  const total = tareas.length
  const completadas = tareas.filter(t => t.completado).length

  return (
    
    <div className="grid grid-cols-2 gap-4">
  <div className="bg-purple-800 p-4 rounded-lg">
    <p className="text-sm text-gray-400">Total</p>
    <h2 className="text-xl font-bold">{total}</h2>
  </div>

  <div className="bg-purple-800 p-4 rounded-lg">
    <p className="text-sm text-gray-400">Completadas</p>
    <h2 className="text-xl font-bold">{completadas}</h2>
  </div>
</div>
  )
}