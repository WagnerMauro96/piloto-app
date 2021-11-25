import Header from './Header'
import Footer from './Footer'
import Rotas from './Routes'

function App () {
  return (
    <>
      <Header />
        <div className='main'>
          <Rotas />
        </div>
      <Footer />
    </>
  )
}

export default App
