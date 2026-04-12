import InputTarea from "./InputTarea"
import Stats from "./Stats"
import Lista from "./Lista"
import Header from "./Header"

export default function Main() {
  return (
    <main className="flex flex-col gap-6">

      <Header />

      <InputTarea />
      <Stats />
      <Lista />

    </main>
  )
}