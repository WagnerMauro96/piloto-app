import React from 'react'
import { Container } from 'semantic-ui-react'
import { UserDetails } from './UserDetails'
import { Estatuaria } from './Estatuaria'
import { Caracterizacao } from './Caracterizacao'
import { Mercado } from './Mercado'
import { InformacaoFinanceira } from './InformacaoFinanceira'

import { Success } from './Sucesso'

import { Form } from 'semantic-ui-react'

export class MainFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      nomeCompleto: '',
      morada: '',
      nacionalidade: '',
      telefone1: '',
      telefone2: '',
      email: '',
      formacaoAcad: '',
      experiencia: '',
      nascimento: '',
      designacao: '',
      formaJuridica: '',
      numSocios: '',
      capitalSocial: '',
      socios: '',
      quotas: '',
      gerente: '',
      descricao_dos_fluxos: '',
      mecanismo_de_fixacao: '',
      variaveis_estaticas: '',
      criterios_de_mercado: '',
      custos_mais_importantes: '',
      descricao_da_estrutura: '',
      descricao_dos_objectivos_financeiros: '',
      necessidades_de_investimento: '',
      estrutura_do_capital: '',
      politica_de_distribuicao_de_lucros: '',
      indicadorDemografico: '',
      indicadorLegal: '',
      indicadorEconomico: '',
      indicadorPolitico: '',
      pontosFortesOportunidade: '',
      pontosFortesAmeaca: '',
      pontosFracosOportunidade: '',
      pontosFracosAmeaca: '',
      benchMarking: '',
      vantagemCompetitiva: '',
      descricao: '',
      ideiaNegocio: '',
      setorAtividade: '',
      estagio: '',
      segmentoAlvo: '',
      base_segmentacao: '',
      dimensao: '',
      taxa: '',
      geografia: '',
      canaisDistribuicao: '',
      recursos: '',
      atividades: '',
      descricaoObjetivo: '',
      descricaoRisco: '',
      descricaoPlano: '',
      volatilidade_moeda: '',
      contratos_futuros: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //just show the success page (step 4 )
    this.setState((prevState) => {
      return {
        ...prevState,
        step: 6,
      }
    })
  }

  handleChange = (event, { name, value, checked, type }) => {
    if (type === 'checkbox') {
      //TODO generic solution for these checkboxes!!
      let { interests } = this.state
      if (checked) {
        interests = [...interests, value]
      } else {
        interests = interests.filter((item) => item !== value)
      }
      this.setState((prevState) => {
        return {
          ...prevState,
          interests: interests,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        }
      })
    }
  }

  next = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      }
    })
  }

  prev = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step - 1,
      }
    })
  }

  render() {
    const { step } = this.state
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
      designacao,
      formaJuridica,
      numSocios,
      capitalSocial,
      socios,
      quotas,
      gerente,
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
    } = this.state
    const values = {
      nomeCompleto,
      morada,
      nacionalidade,
      telefone1,
      telefone2,
      email,
      formacaoAcad,
      experiencia,
      nascimento,
      designacao,
      formaJuridica,
      numSocios,
      capitalSocial,
      socios,
      quotas,
      gerente,
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
    }

    return (
      <Container textAlign='left'>
        <Form onSubmit={this.handleSubmit}>
          <Step
            step={step}
            values={values}
            handleChange={this.handleChange}
            next={this.next}
            prev={this.prev}
          />
        </Form>
      </Container>
    )
  }
}

const Step = ({ step, values, handleChange, next, prev }) => {
  switch (step) {
    case 1:
      return (
        <UserDetails values={values} handleChange={handleChange} next={next} />
      )
    case 2:
      return (
        <Estatuaria
          values={values}
          handleChange={handleChange}
          next={next}
          prev={prev}
        />
      )
    case 3:
      return (
        <Caracterizacao
          values={values}
          handleChange={handleChange}
          next={next}
          prev={prev}
        />
      )
    case 4:
      return (
        <Mercado
          values={values}
          handleChange={handleChange}
          next={next}
          prev={prev}
        />
      )
    case 5:
      return (
        <InformacaoFinanceira
          values={values}
          handleChange={handleChange}
          next={next}
          prev={prev}
        />
      )
    case 6:
      return <Success prev={prev} values={values} />
    default:
      return null
  }
}
