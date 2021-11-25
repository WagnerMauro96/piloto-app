import { Route, Routes } from 'react-router-dom'
import AvaliarPage from '../pages/AvaliarPage'
import AvalicoesPage from '../pages/AvaliacoesFeitasPage'
import NotFoundPage from '../pages/NotFoundPage'

const  Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AvaliarPage />} />
        <Route path='/avaliacoes' element={<AvalicoesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default Layout
