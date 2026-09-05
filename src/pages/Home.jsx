import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedWork from '../components/FeaturedWork'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-16">
      <Header />
      <Hero />
      <FeaturedWork />
    </div>
  )
}
