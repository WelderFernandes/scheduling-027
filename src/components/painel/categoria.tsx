import Image from 'next/image'

export default function Categoria() {
  return (
    <div className="mr-3">
      <div className="flex h-[65px] w-[65px] items-center justify-center rounded-2xl bg-white shadow-md">
        <Image
          src={'/img/icon/cabelo.png'}
          alt="icon corte cabelo"
          width={42}
          height={42}
        />
      </div>
      <p className="mt-2 text-center text-sm font-semibold">Cabelo</p>
    </div>
  )
}
