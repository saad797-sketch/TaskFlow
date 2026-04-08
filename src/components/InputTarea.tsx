import { useState } from "react"
import { useTareasActions } from "../context/TareasContext"

export default function InputTarea() {

  const [texto, setTexto] = useState("")
  const { setTareas } = useTareasActions()

  const agregar = () => {
    if (!texto.trim()) return

    setTareas(prev => [
      ...prev,
      {
        id: Date.now(),
        texto,
        completado: false
      }
    ])

    setTexto("")
  }

  return (
   <input
  className="    w-full
    text-base
    py-3
    border-b border-neutral-700
    bg-transparent
    outline-none
    placeholder:text-neutral-500
    focus:border-purple-400"
  placeholder="Escribe una tarea..."
  value={texto}
  onChange={(e) => setTexto(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && agregar()}
/>
  )
}