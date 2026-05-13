import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Coverage from './components/Coverage'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink-950 text-bone">
      <TopBar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Coverage />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
