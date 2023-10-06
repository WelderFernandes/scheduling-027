'use client'
import { ReactNode, createContext, useState } from 'react'

export type AgendamentoProps = {
  servicos: number
  data: Date
  hora: string
}

type MeuContextoData = {
  // Defina os tipos de dados que serão compartilhados pelo contexto
  // Exemplo:
  agendamento: AgendamentoProps[] | null
  addDados: (data: AgendamentoProps[]) => void
}

export const MeuContexto = createContext<MeuContextoData>({} as MeuContextoData)

const MeuContextoProvider = ({ children }: { children: ReactNode }) => {
  const [agendamento, setAgendamento] = useState<AgendamentoProps[] | null>([])

  // Defina as funções ou estados que serão compartilhados pelo contexto

  const addDados = (data: AgendamentoProps[]) => {
    setAgendamento(data)
  }

  return (
    <MeuContexto.Provider value={{ agendamento, addDados }}>
      {children}
    </MeuContexto.Provider>
  )
}

export default MeuContextoProvider
