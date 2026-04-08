import InputTarea from "./InputTarea"
import Stats from "./Stats"
import Lista from "./Lista"

export default function Main() {
  return (
    <main className="flex flex-col gap-6">

      <div className="text-2xl font-medium">
        TaskFlow
      </div>

      <InputTarea />
      <Stats />
      <Lista />

    </main>
  )
}