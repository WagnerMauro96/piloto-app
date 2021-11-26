import { Form, Button, TextArea, Dropdown } from 'semantic-ui-react'

const indicadoresDemo = [
  { text: 'População', value: 'População' },
  {
    text: 'Taxa de Crescimento Anual da População',
    value: 'Taxa de Crescimento Anual da População',
  },
  {
    text: '%População Urbana/Rural',
    value: 'Percentagem_População Urbana/Rural',
  },
  { text: 'População obsoleta', value: 'População obsoleta' },
  { text: 'Esperança Média de vida', value: 'Esperança Média de vida' },
  { text: 'Renda das famílias', value: 'Renda das famílias' },
  { text: 'Taxa de Desemprego', value: 'Taxa de Desemprego' },
  { text: 'Salários Mínimos', value: 'Salários Mínimos' },
  { text: 'Infra-estruturas locais', value: 'Infra-estruturas locais' },
]

const indicadoresLega = [
  { text: 'Cobertura de Comunicações', value: 'Cobertura de Comunicações' },
  { text: 'Velocidade da Internet', value: 'Velocidade da Internet' },
  {
    text: 'Grau de Envolvimento Tecnológico',
    value: 'Grau de Envolvimento Tecnológico',
  },
  {
    text: 'Políticas de Pesquisa e Inovação',
    value: 'Políticas de Pesquisa e Inovação',
  },
  { text: 'Maturidade da Tecnologia', value: 'Maturidade da Tecnologia' },
  {
    text: 'Protecção de Propriedade Intelectual',
    value: 'Protecção de Propriedade Intelectual',
  },
  { text: 'Protecção do Consumidor', value: 'Protecção do Consumidor' },
  { text: 'Licenciamento da Actividade', value: 'Licenciamento da Actividade' },
  {
    text: 'Normas específicas das Indústrias',
    value: 'Normas específicas das Indústrias',
  },
  {
    text: 'Regulamentação das Actividades económicas',
    value: 'Regulamentação das Actividades económicas',
  },
  {
    text: 'Legislação vigente (Trabalho, Direitos Humanos)',
    value: 'Legislação vigente (Trabalho, Direitos Humanos)',
  },
]

const indicadoresEcono = [
  {
    text: 'Índice de Preço ao Consumidor (IPC)',
    value: 'Índice de Preço ao Consumidor (IPC)',
  },
  {
    text: 'Taxa de Crescimento Anual do PIB',
    value: 'Taxa de Crescimento Anual do PIB',
  },
  { text: 'Taxa de Juro', value: 'Taxa de Juro' },
  { text: 'PIB Per Capita', value: 'PIB Per Capita' },
  { text: 'Receitas do Estado', value: 'Receitas do Estado' },
  {
    text: 'Classificação de Risco de Crédito',
    value: 'Classificação de Risco de Crédito',
  },
  { text: 'Gastos Públicos', value: 'Gastos Públicos' },
  { text: 'Taxa de Inflação', value: 'Taxa de Inflação' },
  { text: 'Saldo da Balança Comercial', value: 'Saldo da Balança Comercial' },
  { text: 'Fluxos de Capitais', value: 'Fluxos de Capitais' },
  { text: 'Produção Industrial', value: 'Produção Industrial' },
]

const indicadoresPoli = [
  { text: 'Índice de Corrupção', value: 'Índice de Corrupção' },
  { text: 'Facilidade em Fazer Negócio', value: 'Facilidade em Fazer Negócio' },
  { text: 'Índice de Competitividade', value: 'Índice de Competitividade' },
  { text: 'Índice de Confiança', value: 'Índice de Confiança' },
  { text: 'Política Ambiental', value: 'Política Ambiental' },
  { text: 'Política Cambial', value: 'Política Cambial' },
  { text: 'Política Tributária', value: 'Política Tributária' },
  { text: 'Grau de Descentralização de poderes', value: 'Grau de Descentralização de poderes' },
  { text: 'Grau de participação na vida política', value: 'Grau de participação na vida política' },
]

const Mercado = (props) => {
  const {
    indicadorDemografico,
    indicadorLegal,
    indicadorEconomico,
    indicadorPolitico,
    pontosFortesOportunidade,
    pontosFortesAmeaca,
    pontosFracosOportunidade,
    pontosFracosAmeaca,
    benchMarking,
    vantagemCompetitiva,
  } = props.values

  return (
    <>
      <Form.Group widths='equal'>
        <Form.Field
          control={Dropdown}
          label='Indicadores socioculturais e demográfico'
          name='indicadorDemografico'
          value={indicadorDemografico}
          options={indicadoresDemo}
          fluid multiple selection
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Dropdown}
          label='Indicadores tecnológicos e legais'
          name='indicadorLegal'
          value={indicadorLegal}
          options={indicadoresLega}
          fluid multiple selection
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Field
          control={Dropdown}
          label='Indicadores económicos'
          name='indicadorEconomico'
          value={indicadorEconomico}
          options={indicadoresEcono}
          fluid multiple selection
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Dropdown}
          label='Indicadores políticos e ambientais'
          name='indicadorPolitico'
          value={indicadorPolitico}
          options={indicadoresPoli}
          fluid multiple selection
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Pontos fortes e Oportunidades'
          value={pontosFortesOportunidade}
          name='pontosFortesOportunidade'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Pontos fortes e Ameaças'
          value={pontosFortesAmeaca}
          name='pontosFortesAmeaca'
          onChange={props.handleChange}
        />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Pontos fracos e Oportunidades'
          value={pontosFracosOportunidade}
          name='pontosFracosOportunidade'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Pontos fracos e Ameaças'
          value={pontosFracosAmeaca}
          name='pontosFracosAmeaca'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='Benchmarking'
        value={benchMarking}
        name='benchMarking'
        onChange={props.handleChange}
      />
      <Form.Field
        control={TextArea}
        label='Vantagem competitiva'
        value={vantagemCompetitiva}
        name='vantagemCompetitiva'
        onChange={props.handleChange}
      />
      <Button onClick={props.prev}>Voltar</Button>
      <Button onClick={props.next}>Próximo</Button>
    </>
  )
}

export { Mercado }
