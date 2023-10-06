import { Button, ButtonGroup } from '@material-tailwind/react'
import { AiOutlineCalendar, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

export default function Rodape() {
  return (
    <>
      <ButtonGroup
        fullWidth
        color="white"
        className="fixed bottom-0 h-20 max-w-[425px]"
      >
        <Button className="flex items-center justify-center text-3xl">
          <AiOutlineHome />
        </Button>
        <Button className="flex items-center justify-center text-3xl">
          <AiOutlineCalendar />
        </Button>
        <Button className="flex items-center justify-center text-3xl">
          <AiOutlineUser />
        </Button>
      </ButtonGroup>
    </>
  )
}
