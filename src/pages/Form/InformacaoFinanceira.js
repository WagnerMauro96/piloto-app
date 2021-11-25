import { Form, Button, Input, TextArea } from 'semantic-ui-react'

const InformacaoFinanceira = (props) => {
  const {
    descricao_dos_fluxos,
    mecanismo_de_fixacao,
    variaveis_estaticas,
    criterios_de_mercado,
    custos_mais_importantes,
    descricao_da_estrutura,
    descricao_dos_objectivos_financeiros,
    necessidades_de_investimento,
    estrutura_do_capital,
    politica_de_distribuicao_de_lucros,
  } = props.values

  return (
    <>
      <h1>Informações financeiras</h1>
      <Form.Field
        control={TextArea}
        label='Descrição dos fluxos de rendimento disponíveis'
        value={descricao_dos_fluxos}
        name='descricao_dos_fluxos'
        onChange={props.handleChange}
      />
      <Form.Field
        control={Input}
        width='8'
        label='Quais os mecanismos de fixação de preços'
        value={mecanismo_de_fixacao}
        name='mecanismo_de_fixacao'
        onChange={props.handleChange}
      />
      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Quais as variáveis estáticas utilizadas na definição dos preços pré-definidos'
          value={variaveis_estaticas}
          name='variaveis_estaticas'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Quais os critérios ou pressupostos de mercado utilizados na fixação dinâmica dos preços'
          value={criterios_de_mercado}
          name='criterios_de_mercado'
          onChange={props.handleChange}
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Quais os custos mais importantes inerentes à actividade'
          value={custos_mais_importantes}
          name='custos_mais_importantes'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Descrição da estrutura de custos'
          value={descricao_da_estrutura}
          name='descricao_da_estrutura'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='Descrição dos objectivos financeiros de curto, médio e longo prazo'
        value={descricao_dos_objectivos_financeiros}
        name='descricao_dos_objectivos_financeiros'
        onChange={props.handleChange}
      />
      <Form.Field
        control={Input}
        label='Necessidades de investimento'
        value={necessidades_de_investimento}
        name='necessidades_de_investimento'
        onChange={props.handleChange}
      />
      <Form.Field
        control={Input}
        label='Estrutura do capital a investir'
        value={estrutura_do_capital}
        name='estrutura_do_capital'
        onChange={props.handleChange}
      />
      <Form.Field
        control={Input}
        label='Política de distribuição de lucros ou remuneração aos accionistas/sócios'
        value={politica_de_distribuicao_de_lucros}
        name='politica_de_distribuicao_de_lucros'
        onChange={props.handleChange}
      />
      <Button onClick={props.prev}>Voltar</Button>
      <Button color='blue' type='submit' >Submeter</Button>
    </>
  )
}

export { InformacaoFinanceira }
