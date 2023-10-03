'use client'
export default function Servicos({ setCheckCount }: any) {
  function handleCount(): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]:checked',
    )
    const count = checkboxes.length
    setCheckCount(count)
  }

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex w-full flex-row justify-between rounded-3xl bg-white p-2 shadow-md">
          <p className="flex items-center gap-2 text-sm text-[#5F5F5F]">
            <input
              type="checkbox"
              className="checkbox border-0 text-sm"
              onClick={() => handleCount()}
            />{' '}
            Corte Degradê
          </p>
          <p className="text-sm font-bold text-black">R$ 30,00</p>
        </div>
      </label>
    </div>
  )
}
