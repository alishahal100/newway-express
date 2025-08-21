import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Main from '../components/Main'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <Main />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
