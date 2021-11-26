import { Form, Button, Input, TextArea, Select } from 'semantic-ui-react'

const formaJuridicas = [
  { text: 'Anónimas', value: 'Anónimas' },
  { text: 'Quotas', value: 'Quotas' },
]

const Estatuaria = (props) => {
  const {
    designacao,
    formaJuridica,
    numSocios,
    capitalSocial,
    socios,
    quotas,
    gerente,
  } = props.values

  return (
    <>
      <Form.Field
        control={Input}
        label='Designação Social'
        value={designacao}
        name='designacao'
        onChange={props.handleChange}
      />

      <Form.Field
        control={Select}
        label='Forma Jurídica'
        name='formaJuridica'
        value={formaJuridica}
        options={formaJuridicas}
        placeholder='Selecionar uma opção'
        onChange={props.handleChange}
      />
      <Form.Group widths='equal'>
        <Form.Field width='6'>
          <label>Nº de Accionistas/Sócios</label>
          <Input type='number' min='0' value={numSocios} onChange={props.handleChange} name='numSocios' />
        </Form.Field>

        <Form.Field width='6'>
          <label>Capital Social</label>
          <Input type='number' min='0' value={capitalSocial} onChange={props.handleChange} name='capitalSocial' />
        </Form.Field>
      </Form.Group>

      <Form.Field
        control={TextArea}
        label='Accionistas/Sócios'
        value={socios}
        name='socios'
        onChange={props.handleChange}
      />

      <Form.Field
        control={TextArea}
        label='Distribuição das Acções/Quotas'
        value={quotas}
        name='quotas'
        onChange={props.handleChange}
      />
      <Form.Field
        control={Input}
        label='Sócio-gerente'
        value={gerente}
        name='gerente'
        onChange={props.handleChange}
      />
      <Button onClick={props.prev}>Voltar</Button>
      <Button onClick={props.next}>Próximo</Button>
    </>
  )
}

export { Estatuaria }
