'use client'
import {
  Card,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { TfiClose } from 'react-icons/tfi'

function ItemsMenu() {
  const [openAlert, setOpenAlert] = useState<boolean>(true)

  return (
    <>
      <Card className="min-h-[calc(100vh-42px)] w-[18rem] flex-1 rounded-none border-none pt-4 ">
        <div className="flex  items-center justify-center">
          <Image src="/img/logo/logo.png" width={100} height={100} alt="logo" />
        </div>
        <List>
          <ListItem className="p-2">
            <Link href="/painel" className="flex">
              <ListItemPrefix color="blue">
                <RxDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </Link>
          </ListItem>
          <ListItem className=" p-2">
            <Link href="/painel/category" className="flex">
              <ListItemPrefix color="blue">
                <RxDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-bold">
                Categorias
              </Typography>
            </Link>
          </ListItem>
          <ListItem className=" p-2">
            <Link href="/painel/service" className="flex">
              <ListItemPrefix color="blue">
                <RxDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-bold">
                Serviços
              </Typography>
            </Link>
          </ListItem>
        </List>

        {/* SEJA PRO */}
        {/* <Alert
          open={openAlert}
          className="mt-auto"
          onClose={() => setOpenAlert(false)}
        >
          <Typography variant="h6" className="mb-1">
            Upgrade to PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Upgrade to Material Tailwind PRO and get even more components,
            plugins, advanced features and premium.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Typography as="a" href="#" variant="small" className="font-medium">
              Upgrade Now
            </Typography>
          </div>
        </Alert> */}
      </Card>
    </>
  )
}

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    // <div className="flex flex-1 content-start justify-start align-middle md:hidden">
    <div className=" flex content-start justify-start align-middle">
      <IconButton
        onClick={openDrawer}
        className="none border-none bg-transparent text-black shadow-none focus:outline-none"
      >
        <BiMenuAltLeft className="h-6 w-6" />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="flex flex-1 items-end justify-end">
          <IconButton
            onClick={closeDrawer}
            className="none  border-none bg-transparent text-black shadow-none focus:outline-none"
          >
            <TfiClose className="h-4 w-4" />
          </IconButton>
        </div>
        <ItemsMenu />
      </Drawer>
    </div>
  )
}

export default function LeftMenu() {
  return (
    // <div className="min-h-screen items-start justify-start align-middle">
    //   <div className="hidden md:flex">
    //     <ItemsMenu />
    //   </div>
    //   <div className="hiddem  flex-1 md:flex">
    //     <DrawerDefault />
    //   </div>
    // </div>

    <div className="items-start justify-start align-middle">
      <div className="hidden ">
        <ItemsMenu />
      </div>
      <div className="">
        <DrawerDefault />
      </div>
    </div>
  )
}
