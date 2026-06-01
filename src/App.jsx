import Banner from './components/Banner.jsx'
import RegistroForm from './components/RegistroForm.jsx'
import InfoSection from './components/InfoSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Banner />
      <main>
        <RegistroForm />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
