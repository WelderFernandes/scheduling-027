'use client'

import { Categories } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// interface data extends ColumnDef<Categories>[] = [
// ]

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'image',
    header: 'Image',
  },
]
