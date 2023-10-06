'use client'
import { Badge, IconButton, Navbar, Typography } from '@material-tailwind/react'
import { BsBell } from 'react-icons/bs'

export default function Header() {
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 shadow-none lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="p"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Dashboard
        </Typography>
        <div className="flex items-center gap-4">
          <Badge color="red" className="absolute">
            <IconButton
              // ripple={false}
              variant="text"
              className="rounded-full bg-gray-200 hover:bg-transparent focus:bg-transparent active:bg-transparent active:ring-1"
            >
              <BsBell className="h-6 w-6" />
            </IconButton>
          </Badge>
        </div>
      </div>
    </Navbar>
  )
}
