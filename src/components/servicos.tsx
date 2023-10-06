'use client'

import { Checkbox } from '@material-tailwind/react'

export default function Servicos({ setCheckCount }: any) {
  function handleCount(): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]:checked',
    )
    const count = checkboxes.length
    setCheckCount(count)
  }

  return (
    <div className="mt-3">
      <label className="label cursor-pointer">
        <div className="flex w-full flex-row items-center justify-between rounded-3xl bg-white p-1 shadow-md">
          <div className="flex flex-row">
            <Checkbox
              onChange={handleCount}
              className="rounded-full border-0"
              ripple={false}
              crossOrigin={undefined}
            />
            <p className="flex items-center gap-2 text-sm text-[#5F5F5F]">
              Corte Degradê
            </p>
          </div>
          <p className="w-20 text-sm font-bold text-black">R$ 30,00</p>
        </div>
      </label>
    </div>
  )
}
