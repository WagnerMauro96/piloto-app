import estilo from '../styles/footer.module.css'

function Footer () {
  return (
    <footer className={estilo.footer}>
      <span>Todos os direitos reservados &copy; <a href='https://proit-consulting.co.ao'>Pro-It consulting</a></span>
    </footer>
  )
}

export default Footer