'use client'
import Divider from '@/components/Divider'
import { Button, Step, Stepper } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai'

export default function Checkout() {
  return (
    <>
      <section className="mx-5">
        <header className="flex w-full items-center justify-center pt-5 text-3xl text-black">
          <div className="flex justify-end">
            <Link href={'/schedule/select-time'}>
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <h1 className="w-full text-center text-lg font-bold text-black">
            Confirmação
          </h1>
        </header>

        <main>
          <div>
            <div className="mt-8 w-full">
              <Stepper activeStep={2}>
                <Step>1</Step>
                <Step>2</Step>
                <Step>3</Step>
              </Stepper>
            </div>
          </div>
          <section className="mt-9">
            <div>
              <div className="flex flex-col items-center gap-2">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <Image
                      src={'/img/logo/logo.png'}
                      alt="Logo"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-sm font-bold">Tam Cortes</h1>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Divider text={'Serviços'} />
              <div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h2 className="font-bold">Dia e Hora:</h2>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      02/10 ás 16:10
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <h1 className="text-xs font-semibold">Corte Degradê</h1>
                    <span className="flex items-center text-xs font-semibold text-gray-600">
                      <AiOutlineClockCircle />
                      <p className="text-xs">30m</p>
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">R$ 30,00</p>
                  </div>
                </div>
              </div>
              <Divider text={''} />
              <div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h2 className="font-bold">Dia e Hora:</h2>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      02/10 ás 16:55
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <h1 className="text-xs font-semibold">Corte Degradê</h1>
                    <span className="flex items-center text-xs font-semibold text-gray-600">
                      <AiOutlineClockCircle />
                      <p className="text-xs">30m</p>
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">R$ 30,00</p>
                  </div>
                </div>
              </div>
              <Divider text={'Valores'} />
              <div>
                <div className="flex justify-between">
                  <h1 className="text-xs text-gray-600">Total dos serviços</h1>
                  <p className="text-xs font-semibold text-gray-600">
                    R$ 60,00
                  </p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xs text-gray-600">Desconto</h1>
                  <p className="text-xs font-semibold text-gray-600">
                    R$ 00,00
                  </p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-sm font-bold">Pagamento Antecipado</h1>
                  <p className="text-sm font-bold">R$ 20,00</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between">
                <h1 className="text-sm font-bold">
                  Valor a pagar após o serviço
                </h1>
                <p className="text-sm font-bold">R$ 40,00</p>
              </div>
            </div>
          </section>
        </main>
      </section>

      <footer>
        <div className="tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-end rounded-t-2xl bg-white p-5 shadow-md">
          <Link href="#" className="w-full">
            <Button variant="gradient" fullWidth>
              Próximo
            </Button>
          </Link>
        </div>
      </footer>
    </>
  )
}
