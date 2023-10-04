'use client'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Alert,
  Card,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsArrowDownShort } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'
import { TiArrowDown } from 'react-icons/ti'

function ItemsMenu() {
  const [open, setOpen] = useState<number>(0)
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <>
      <Card className="min-h-screen w-[18rem] flex-1 rounded-none border-none pt-4 ">
        <div className="flex  items-center justify-center">
          <Image src="/img/logo/logo.png" width={100} height={100} alt="logo" />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <TiArrowDown
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                  </ListItemPrefix>
                  <Typography color="blue-gray">Sidebar</Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                  </ListItemPrefix>
                  <Typography color="blue-gray">Sidebar</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <BsArrowDownShort
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              {/* <InboxIcon className="h-5 w-5" /> */}
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </List>
        <Alert
          open={openAlert}
          className="mt-auto"
          onClose={() => setOpenAlert(false)}
        >
          {/* <CubeTransparentIcon className="mb-4 h-12 w-12" /> */}
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
        </Alert>
      </Card>
    </>
  )
}
export function DrawerDefault() {
  const [open, setOpen] = React.useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <div className="flex flex-1 content-start justify-start align-middle md:hidden">
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
    <div className="min-h-screen items-start justify-start align-middle">
      <div className="hidden md:flex">
        <ItemsMenu />
      </div>
      <div className="hiddem  flex-1 md:flex">
        <DrawerDefault />
      </div>
    </div>
  )
}
