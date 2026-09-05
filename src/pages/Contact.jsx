import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-16">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <h1 className="text-3xl font-mono uppercase tracking-wider font-bold">Contact</h1>
      </main>
    </div>
  )
}
