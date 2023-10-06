'use client'
import Categoria from '@/components/categoria'
import Servicos from '@/components/servicos'
import { Button, Input, Step, Stepper } from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function Shedule() {
  const [checkCount, setCheckCount] = useState(0)

  const [search, setSearch] = useState('')
  const onChange = ({ target }: any) => setSearch(target.value)

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <div className="overflow-hidden">
      <section className="mx-5">
        <header className="flex w-full items-center justify-center pt-5 text-3xl text-black">
          <div className="flex justify-end">
            <Link href={'/'}>
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <h1 className="w-full text-center text-lg font-bold text-black">
            Selecionar Serviço
          </h1>
        </header>

        <main>
          <div>
            <div className="mt-8 w-full">
              <Stepper activeStep={0}>
                <Step>1</Step>
                <Step>2</Step>
                <Step>3</Step>
              </Stepper>
            </div>
          </div>

          <div>
            <h1 className="mt-8 text-lg font-bold text-black">Categorias</h1>
            <div className="mt-5">
              <Slider {...settings}>
                <div>
                  <Categoria />
                </div>
                <div>
                  <Categoria />
                </div>
                <div>
                  <Categoria />
                </div>
                <div>
                  <Categoria />
                </div>
                <div>
                  <Categoria />
                </div>
                <div>
                  <Categoria />
                </div>
              </Slider>
            </div>
          </div>

          <div>
            <h1 className="mt-8 text-lg font-bold text-black">Serviços</h1>
            <div className="form-control mt-5 w-full">
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  type="text
                  "
                  label="Procurar"
                  value={search}
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: 'min-w-0',
                  }}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  color={search ? 'gray' : 'blue-gray'}
                  disabled={!search}
                  className="!absolute right-2 top-[6px] rounded p-2"
                >
                  <FaMagnifyingGlass />
                </Button>
              </div>
            </div>
            <div className="mt-5 pb-[100px]">
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
            </div>
          </div>
        </main>
      </section>

      <footer>
        <div className="tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-between rounded-t-2xl bg-white p-5 shadow-md">
          <div>
            <div className="flex flex-row items-center gap-3">
              <p>
                <span className="rounded-full  bg-gray-900 p-2 text-xs text-white">
                  {checkCount}
                </span>
              </p>
              <h2 className="text-xs">
                Produtos
                <br /> Selecionados
              </h2>
            </div>
          </div>
          <Link
            href="/schedule/select-time"
            className={checkCount === 0 ? 'pointer-events-none' : ''}
          >
            {checkCount === 0 ? (
              <Button variant="gradient" disabled>
                Próximo
              </Button>
            ) : (
              <Button variant="gradient">Próximo</Button>
            )}
          </Link>
        </div>
      </footer>
    </div>
  )
}
