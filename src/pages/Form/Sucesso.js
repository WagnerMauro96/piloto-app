import estilo from '../../styles/sucesso.module.css'
import { Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'

const Success = (props) => {
  const [temErros, setTemErros] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const cor = temErros  ? '#d63031' : 'white'
  const corFonte = temErros  ? 'white' : '#2d3436'
  const sendToApi = async () => {
    try {
      console.log(props.values)
      const res = await fetch(`/avaliacoes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props.values),
      })
      const dados = await res.json()
      if (!res.ok) {
        setTemErros(true)
        setErrMsg(dados.erro.mensagem)
      } else {
        setTemErros(false)
      }
    } catch (err) {
      setTemErros(true)
      setErrMsg(
        'Alguma coisa pode ter corrido mal , por favor atualize o navegador'
      )
      console.error(err)
    }
  }

  useEffect(() => {
    sendToApi()
  }, [])

  return (
    <div className={estilo.container}>
      <div style={{ marginTop: '10%' }}>
        {!temErros ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              fontSize: '2rem',
              alignItems: 'center',
            }}
          >
            🎉 Felictações
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              fontSize: '2rem',
              alignItems: 'center',
            }}
          >
            😞 Ooopss... parece que esqueceu-se de algo
          </div>
        )}
      </div>
      {temErros ? (
        <div
          style={{
            textAlign: 'center',
            backgroundColor: cor,
            color: corFonte,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '2px',
            fontSize: '2rem',
            alignItems: 'center',
          }}
        >
          {temErros ? `⚠️${errMsg || 'Por favor espere...'}` : 'Por favor aguarde...'}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#00b894',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '2px',
            fontSize: '2rem',
            alignItems: 'center',
          }}
        >
          <h1>Muito obrigado pela sua participação</h1>
        </div>
      )}
      {temErros ? (
        <Button onClick={props.prev}>Voltar</Button>
      ) : (
        <a href='/'>Preencher outro formulário</a>
      )}
      <div>{JSON.stringify(props.values, null, 2)}</div>
    </div>
  )
}

export { Success }
