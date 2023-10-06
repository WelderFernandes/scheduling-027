'use client';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    width: '20%',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    width: '60%',
  },
  {
    accessorKey: 'image',
    header: '20%',
  },
];
