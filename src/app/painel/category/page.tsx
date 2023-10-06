'use client'

import { DataTable } from '@/components/table'
import { Categories } from '@/types'
import useSWR from 'swr'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: 'image',
    header: 'Image',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
]

export default function Category() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const URL = 'http://localhost:3002/category'

  const { data, error, isLoading } = useSWR<Categories[]>(URL, fetcher)

  console.log(data, error, isLoading)
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center">
          <p className="text-red-500">Erro ao carregar os dados</p>
        </div>
      ) : (
        <DataTable columns={columns} data={data!} />
      )}
    </div>
  )
}
