'use client'
import Rodape from '@/components/rodape'
import ServicosHome from '@/components/servicos_home'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMap } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { IoNotificationsSharp } from 'react-icons/io5'

export default function Home() {
  return (
    <section className="m-auto h-auto min-h-screen w-full max-w-[425px] bg-[#F1F1F1]">
      <header className="h-[186px] w-full bg-[url('/img/banner/banner.png')] bg-cover bg-no-repeat">
        <div className="flex w-full justify-end p-5 text-3xl text-white">
          <IoNotificationsSharp />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <Image
            src={'/img/logo/logo.png'}
            alt="Logo"
            width={150}
            height={150}
          />
          <h1 className="mt-3 text-xl font-bold text-black">Tam Cortes</h1>
        </div>
      </header>
      <main className="mx-5 mt-36">
        <div>
          {/* <Link href="/schedule" className="btn btn-neutral w-full">
            AGENDAR CORTE
          </Link> */}
          <Link href="/schedule">
            <Button variant="gradient" fullWidth>
              AGENDAR CORTE
            </Button>
          </Link>
        </div>

        <div>
          <div>
            <h1 className="mt-10 text-lg font-bold text-black">DESCRIÇÃO</h1>
            <p className="mt-4 text-xs text-black">
              Nossa barbearia é o lugar onde a arte do corte de cabelo se
              encontra com um atendimento de excelência. Com um ambiente
              acolhedor e descontraído, oferecemos serviços personalizados,
              desde cortes clássicos até estilos modernos e tendências. Venha
              nos visitar e descubra o que é ter um visual impecável com um
              toque de sofisticação.
            </p>
          </div>
          <div>
            <h1 className="mb-5 mt-10 text-lg font-bold text-black">
              TOP 5 SERVIÇOS
            </h1>
            <div className="mt-4">
              <ServicosHome />
            </div>
            <div className="mt-4">
              <ServicosHome />
            </div>
            <div className="mt-4">
              <ServicosHome />
            </div>
            <div className="mt-4">
              <ServicosHome />
            </div>
            <div className="mt-4">
              <ServicosHome />
            </div>
          </div>
          <div>
            <h1 className="mt-10 text-lg font-bold text-black">
              REDES SOCIAIS
            </h1>
            <p className="mt-4 flex gap-4 text-2xl text-black">
              <a href="https://www.instagram.com/tamcortes13/">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009192556994">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com.br/">
                <BsTwitter />
              </a>
            </p>
          </div>
          <div className="pb-[105px]">
            <h1 className="mt-10 text-lg font-bold text-black">LOCALIZAÇÃO</h1>
            <p className="mt-4 flex flex-col gap-4 text-xs text-black">
              Rua Nova, 167
              <br />
              São Toquato - CEP 29115-828
              <br />
              Vila Velha - ES
            </p>
            <a
              href="https://www.google.com.br/maps/place/R.+Nova,+167+-+S%C3%A3o+Torquato,+Vila+Velha+-+ES,+29114-280/@-20.3317713,-40.3506332,21z/data=!4m6!3m5!1s0xb83c335ae25365:0xa080f788eeba5be!8m2!3d-20.3318188!4d-40.3504796!16s%2Fg%2F11hbgrjp5s?entry=ttu"
              className="mt-2 flex gap-1 text-xs text-black"
            >
              <BiMap /> Abrir mapa
            </a>
          </div>
        </div>
      </main>
      <footer>
        <Rodape />
      </footer>
    </section>
  )
}
