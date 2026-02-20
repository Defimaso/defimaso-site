import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Ecosistemi from '@/pages/Ecosistemi'
import Risultati from '@/pages/Risultati'
import Guida from '@/pages/Guida'
import Investor from '@/pages/Investor'

// Wrapper che nasconde Navbar/Footer sulla pagina /investor
function AppLayout() {
  const location = useLocation()
  const isInvestor = location.pathname === '/investor'

  return (
    <div className="min-h-screen flex flex-col">
      {!isInvestor && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosistemi" element={<Ecosistemi />} />
          <Route path="/risultati" element={<Risultati />} />
          <Route path="/guida" element={<Guida />} />
          <Route path="/investor" element={<Investor />} />
        </Routes>
      </main>
      {!isInvestor && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
