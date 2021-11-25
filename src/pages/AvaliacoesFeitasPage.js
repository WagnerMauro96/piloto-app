import React, { useEffect, useState } from 'react'
import { Label, Table, Menu, Icon, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


function AvaliacoesFeitasPage() {

  const [dadosAvaliacoes, setDadosAvaliacoes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    recFromApi()
  }, [])

  const recFromApi = async () => {
    try {
      const res = await fetch(`/avaliacoes`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      })
      setLoading(false)
      const dados = await res.json()
      setDadosAvaliacoes(dados.formularios)
    } catch (err) {
      console.log(`Alguma coisa pode ter corrido mal , por favor atualize o navegador:   ${err}`)
      setLoading(true)
    }
  }


  return (

    <div>
      {loading === false && dadosAvaliacoes.map(dados => (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome Completo</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Telefone</Table.HeaderCell>
              <Table.HeaderCell>Morada</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>{dados.nomeCompleto}</Label>
              </Table.Cell>
              <Table.Cell>{dados.email}</Table.Cell>
              <Table.Cell>{dados.telefone1}</Table.Cell>
              <Table.Cell>{dados.morada}</Table.Cell>
            </Table.Row>
          </Table.Body>

          {/* <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer> */}
        </Table>
      ))}
      {(loading && dadosAvaliacoes.length<1) && (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Carregando dados</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      )}
    </div>
  )

}

export default AvaliacoesFeitasPage

