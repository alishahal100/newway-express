import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Main from '../components/Main'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Introduction />
      <Main />
      <Services />
      <FAQ />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/+966548358917" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  )
}
