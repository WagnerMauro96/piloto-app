import { Form, Button, Input, TextArea, Select, Dropdown } from 'semantic-ui-react'

const caracterizacoes = [
  { text: 'Telecomunicações', value: 'Telecomunicações' },
  { text: 'Financeiro', value: 'Financeiro' },
  { text: 'Bem-estar', value: 'Bem-estar' },
  { text: 'Saúde', value: 'Saúde' },
  { text: 'Misto', value: 'Misto' },
]

const estagios = [
  { text: 'Protótipo', value: 'Protótipo' },
  { text: 'Produto mínimo viável', value: 'Produto mínimo viável' },
  { text: 'Comercialização', value: 'Comercialização' },
]

const segmentos = [
  { text: 'Mercado de massas', value: 'Mercado de massas' },
  { text: 'Nicho', value: 'Nicho' },
  { text: 'Diversificado', value: 'Diversificado' },
  { text: 'Multilaterais', value: 'Multilaterais' },
]

const segmentacao = [
  { key: 'geográfica', text: 'Geográfica', value: 'Geográfica' },
  { key: 'psicográfica', text: 'Psicográfica', value: 'Psicográfica' },
  { key: 'demográfica', text: 'Demográfica', value: 'Demográfica' },
  { key: 'comportamental', text: 'Comportamental', value: 'Comportamental' }
]

const li_geografia = [
  { key: 'bengo', text: 'Bengo', value: 'Bengo' },
  { key: 'benguela', text: 'Benguela', value: 'Benguela' },
  { key: 'bié', text: 'Bié', value: 'Bié' },
  { key: 'cabinda', text: 'Cabinda', value: 'Cabinda' },
  { key: 'cuando-Cubango', text: 'Cuando-Cubango', value: 'Cuando-Cubango' },
  { key: 'cuanza-Norte', text: 'Cuanza-Norte', value: 'Cuanza-Norte' },
  { key: 'cuanza-Sul', text: 'Cuanza-Sul', value: 'Cuanza-Sul' },
  { key: 'cunene', text: 'Cunene', value: 'Cunene' },
  { key: 'huambo', text: 'Huambo', value: 'Huambo' },
  { key: 'huíla', text: 'Huíla', value: 'Huíla' },
  { key: 'luanda', text: 'Luanda', value: 'Luanda' },
  { key: 'lunda Norte', text: 'Lunda Norte', value: 'Lunda Norte' },
  { key: 'lunda Sul', text: 'Lunda Sul', value: 'Lunda Sul' },
  { key: 'malanje', text: 'Malanje', value: 'Malanje' },
  { key: 'moxico', text: 'Moxico', value: 'Moxico' },
  { key: 'namibe', text: 'Namibe', value: 'Namibe' },
  { key: 'uíge', text: 'Uíge', value: 'Uíge' },
  { key: 'zaire', text: 'Zaire', value: 'Zaire' },
]

const canais = [
  { text: 'Vendas na internet', value: 'Vendas na internet' },
  { text: 'Força das Vendas', value: 'Força das Vendas' },
  { text: 'Lojas Próprias', value: 'Lojas Próprias' },
]

const recursosA = [
  { text: 'Físicos', value: 'Físicos' },
  { text: 'Intelectuais', value: 'Intelectuais' },
  { text: 'Humanos', value: 'Humanos' },
  { text: 'Financeiros', value: 'Financeiros' },
]

const atividadesA = [
  { text: 'Resolução de problemas', value: 'Resolução de problemas' },
  { text: 'Produção', value: 'Produção' },
  { text: 'Plataforma/rede', value: 'Plataforma/rede' },
]

const Caracterizacao = (props) => {
  const {
    descricao,
    ideiaNegocio,
    setorAtividade,
    estagio,
    segmentoAlvo,
    base_segmentacao,
    dimensao,
    taxa,
    geografia,
    canaisDistribuicao,
    recursos,
    atividades,
    descricaoObjetivo,
    descricaoRisco,
    descricaoPlano,
    volatilidade_moeda,
    contratos_futuros,
  } = props.values

  return (
    <>
      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Descrição'
          value={descricao}
          name='descricao'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Ideia de negócio'
          value={ideiaNegocio}
          name='ideiaNegocio'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field
          control={Select}
          label='Sector de Actividades'
          name='setorAtividade'
          value={setorAtividade}
          options={caracterizacoes}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Select}
          label='Estágio'
          name='estagio'
          value={estagio}
          options={estagios}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Select}
          label='Segmento-alvo'
          name='segmentoAlvo'
          value={segmentoAlvo}
          options={segmentos}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={Dropdown}
        label='Bases de segmentação'
        placeholder='selecionar uma ou mais opções'
        value={base_segmentacao}
        options={segmentacao}
        name='base_segmentacao'
        fluid multiple selection
        onChange={props.handleChange}
      />
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Dimensão do Mercado'
          value={dimensao}
          name='dimensao'
          onChange={props.handleChange}
        />
        <Form.Field
          control={Input}
          label='Taxa de penetração desejada (Ex: 5%, 15%, 20%, outro)'
          value={taxa}
          name='taxa'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={Dropdown}
        label='Geografia de Actuação'
        placeholder='selecionar uma ou mais opções'
        value={geografia}
        options={li_geografia}
        fluid multiple selection
        name='geografia'
        onChange={props.handleChange}
      />
      <Form.Group widths='equal'>
        <Form.Field
          control={Select}
          label='Canais de Distribuição'
          name='canaisDistribuicao'
          value={canaisDistribuicao}
          options={canais}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />
        <Form.Field
          control={Select}
          label='Recursos-Chaves'
          name='recursos'
          value={recursos}
          options={recursosA}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />

        <Form.Field
          control={Select}
          label='Actividades-Chaves'
          name='atividades'
          value={atividades}
          options={atividadesA}
          placeholder='Selecionar uma opção'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='Descrição dos objectivos gerais de curto, médio e longo prazo'
        value={descricaoObjetivo}
        name='descricaoObjetivo'
        onChange={props.handleChange}
      />
      <Form.Field
        control={TextArea}
        label='Descrição dos riscos com alto grau de probabilidade e ocorrência'
        value={descricaoRisco}
        name='descricaoRisco'
        onChange={props.handleChange}
      />
      <Form.Group widths='equal'>
        <Form.Field
          control={TextArea}
          label='Descrição do plano de contingências para tais riscos'
          value={descricaoPlano}
          name='descricaoPlano'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Volatilidade da moeda'
          value={volatilidade_moeda}
          name='volatilidade_moeda'
          onChange={props.handleChange}
        />
        <Form.Field
          control={TextArea}
          label='Contratos de futuros'
          value={contratos_futuros}
          name='contratos_futuros'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button onClick={props.prev}>Voltar</Button>
      <Button onClick={props.next}>Próximo</Button>
    </>
  )
}

export { Caracterizacao }
