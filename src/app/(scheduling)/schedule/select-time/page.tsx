'use client'
import Divider from '@/components/Divider'
import RadioButton from '@/components/RadioButton'
import ServicosHome from '@/components/servicos_home'
import { Button, Step, Stepper } from '@material-tailwind/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

export default function SelecionarHorarios() {
  const [date, setDate] = useState(null)
  const currentDate = new Date()

  const onChange = (selectedDate: any) => {
    setDate(selectedDate)
  }

  const [selectedOptions, setSelectedOptions] = useState<{
    [group: string]: string
  }>({
    group1: '',
    group2: '',
  })

  const Horario = [
    { horario: '16:10', key: '1', current: true, name: 'group1' },
    { horario: '16:10', key: '2', current: true, name: 'group1' },
    { horario: '16:10', key: '3', current: true, name: 'group1' },
    { horario: '16:10', key: '4', current: true, name: 'group1' },
  ]

  const Horario2 = [
    { horario: '16:10', key: '1', current: true, name: 'group2' },
    { horario: '16:10', key: '2', current: true, name: 'group2' },
    { horario: '16:10', key: '3', current: true, name: 'group2' },
    { horario: '16:10', key: '4', current: true, name: 'group2' },
  ]

  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    const groups = Object.keys(selectedOptions)
    const isAllSelected = groups.every((group) => selectedOptions[group] !== '')
    setAllSelected(isAllSelected)
    console.log(allSelected)
  }, [selectedOptions])

  return (
    <>
      <section className="mx-5">
        <header className="flex w-full items-center justify-center pt-5 text-3xl text-black">
          <div className="flex justify-end">
            <Link href={'/schedule'}>
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <h1 className="w-full text-center text-lg font-bold text-black">
            Selecionar Data
          </h1>
        </header>

        <main>
          <div>
            <div className="mt-8 w-full">
              <Stepper activeStep={1}>
                <Step>1</Step>
                <Step>2</Step>
                <Step>3</Step>
              </Stepper>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Calendar
              onChange={onChange}
              value={date}
              locale="pt-BR"
              minDate={currentDate}
            />
          </div>
          {date != null ? (
            <>
              <Divider text={'Gerenciar Horários'} />
              <div className="flex flex-row items-start gap-3">
                <div className="mt-0 w-full">
                  <div>
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="w-full">
                        <ServicosHome />
                      </div>
                      <span className="mr-4 text-base text-red-900">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-9 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <p className="w-full text-left text-xs">
                        SELECIONE UM HORÁRIO ABAIXO:
                      </p>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                      {Horario.map((item) => (
                        <RadioButton
                          key={item.key}
                          horario={item.horario}
                          current={item.current}
                          name={item.name}
                          setSelectedOptions={setSelectedOptions}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <div className="w-full">
                        <ServicosHome />
                      </div>
                      <span className="mr-4 text-base text-red-900">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-9 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <p className="w-full text-left text-xs">
                        SELECIONE UM HORÁRIO ABAIXO:
                      </p>
                    </div>
                    <div className="mt-3 flex w-full justify-center gap-2">
                      {Horario2.map((item) => (
                        <RadioButton
                          key={item.key}
                          horario={item.horario}
                          current={item.current}
                          name={item.name}
                          setSelectedOptions={setSelectedOptions}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </main>
      </section>

      <footer>
        <div className=" tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-end rounded-t-2xl bg-white p-5 shadow-md">
          <Link
            href="/schedule/checkout"
            className={!allSelected ? 'pointer-events-none' : ''}
          >
            {!allSelected ? (
              <Button variant="gradient" disabled>
                Próximo
              </Button>
            ) : (
              <Button variant="gradient">Próximo</Button>
            )}
          </Link>
        </div>
      </footer>
    </>
  )
}
