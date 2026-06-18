import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout/Layout'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
