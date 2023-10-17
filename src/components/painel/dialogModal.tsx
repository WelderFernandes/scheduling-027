import {
  Button,
  Card,
  CardHeader,
  Dialog,
  Typography,
} from '@material-tailwind/react'
import React from 'react'
import { RiAddCircleLine } from 'react-icons/ri'
import CategoryForm from './forms/category'

export function DialogModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <>
      <Button onClick={handleOpen} className="flex flex-row items-center gap-2">
        <span className="text-lg">
          <RiAddCircleLine />
        </span>
        Cadastrar
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Cadastrar
            </Typography>
          </CardHeader>
          <CategoryForm />
        </Card>
      </Dialog>
    </>
  )
}
