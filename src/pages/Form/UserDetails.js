import { Form, Button, Input, TextArea } from 'semantic-ui-react'
import DataNas from 'react-semantic-ui-datepickers'

const UserDetails = (props) => {
  const {
    nomeCompleto,
    morada,
    nacionalidade,
    telefone1,
    telefone2,
    email,
    formacaoAcad,
    experiencia,
    nascimento,
  } = props.values
  return (
    <>
      <h1>Informação Pessoal</h1>

      <Form.Field
        control={Input}
        label='Nome Completo'
        value={nomeCompleto}
        name='nomeCompleto'
        onChange={props.handleChange}
      />

      <Form.Field
        control={Input}
        label='Morada'
        value={morada}
        name='morada'
        onChange={props.handleChange}
      />

      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Telefone principal'
          value={telefone1}
          name='telefone1'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Input}
          label='Telefone secundário'
          value={telefone2}
          name='telefone2'
          onChange={props.handleChange}
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Nacionalidade'
          value={nacionalidade}
          name='nacionalidade'
          onChange={props.handleChange}
        />

        <Form.Field
          control={DataNas}
          label='Data de nascimento'
          value={nascimento}
          name='nascimento'
          onChange={props.handleChange}
        />

      </Form.Group>
      <Form.Field
        control={Input}
        label='Correio electrónico'
        value={email}
        name='email'
        onChange={props.handleChange}
      />

      <Form.Field
        control={TextArea}
        label='Formação Académica'
        value={formacaoAcad}
        name='formacaoAcad'
        onChange={props.handleChange}
      />

      <Form.Field
        control={TextArea}
        label='Experiência Relevante'
        value={experiencia}
        name='experiencia'
        onChange={props.handleChange}
      />

      <Button onClick={props.next}>Próximo</Button>
    </>
  )
}

export { UserDetails }
