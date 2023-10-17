'use client'

import { Services } from '@/types'
import useSWR from 'swr'

import { DialogModal } from '@/components/painel/dialogModal'
import ListCard from '@/components/painel/listCard'
import { Typography } from '@material-tailwind/react'

export default function Service() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const URL = 'http://localhost:3002/service'

  const { data, error, isLoading } = useSWR<Services[]>(URL, fetcher)

  const ROWS = data?.map((row) => {
    const { id, name, image, status, value } = row as Services
    return {
      id,
      img: image,
      name,
      status,
      value,
    }
  })

  return (
    <div className="container mx-auto">
      <div className="flex justify-start pb-10">
        <DialogModal />
      </div>
      <div>
        <Typography variant="h5" className="pb-6 text-start">
          Listagem
        </Typography>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center">
          <p className="text-red-500">Erro ao carregar os dados</p>
        </div>
      ) : (
        ROWS?.map(({ id, img, name, status }) => {
          return (
            <ListCard
              key={id}
              id={id}
              image={img}
              name={name}
              status={status}
            />
          )
        })
      )}
    </div>
  )
}
