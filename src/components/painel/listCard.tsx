import { Categories } from '@/types'
import {
  Card,
  CardBody,
  Collapse,
  IconButton,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import { useState } from 'react'
import { BsInfoCircle, BsPencilSquare } from 'react-icons/bs'

export default function ListCard({ id, image, name, status }: Categories) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((cur) => !cur)

  return (
    <div>
      <Card key={id} className="mt-4 w-full">
        <CardBody className="flex items-center justify-between p-4">
          <div className="flex flex-row items-center gap-4">
            <Image src={image} alt="Icon" width={40} height={40} />
            <Typography color="black" variant="h6">
              {name}
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-1 text-lg text-black">
            <IconButton variant="text" className="text-lg" onClick={toggleOpen}>
              <BsInfoCircle />
            </IconButton>
            <BsPencilSquare />
          </div>
        </CardBody>
      </Card>

      <Collapse open={open}>
        <Card className="mx-auto my-2 w-full">
          <CardBody className="flex flex-row items-center gap-2">
            <Typography variant="h6">Status:</Typography>
            <Typography>{status ? 'Ativo' : 'Inativo'}</Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}
