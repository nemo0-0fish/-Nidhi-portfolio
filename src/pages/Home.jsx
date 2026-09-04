import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Nav />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <h1 className="text-3xl font-mono uppercase tracking-wider font-bold">Home</h1>
      </main>
    </div>
  )
}
