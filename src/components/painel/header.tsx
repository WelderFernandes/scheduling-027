import { dateNow } from '@/app/utils/datenow'
import { BsBell } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'

export function Header() {
  return (
    <div className="navbar flex justify-between ">
      <div className="items-left drawer-content flex flex-col justify-center p-2">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square border-none bg-transparent lg:hidden"
        >
          <HiMenuAlt1 className=" h-5 w-5 " />
        </label>
      </div>
      <div className="prose navbar-start">
        <h2>Dashboard</h2>
      </div>
      <div className="navbar-end gap-8">
        <h3>{dateNow()}</h3>
        <button className="btn btn-circle btn-ghost">
          <div className="indicator">
            <span className="badge indicator-item badge-primary badge-xs z-0"></span>
            {/* <div className="grid h-32 w-32 place-items-center bg-base-300">
              content
            </div> */}
            <BsBell className=" h-5 w-5 " />
          </div>
        </button>
        <div className="items-left drawer-content flex flex-col justify-center p-2">
          <label
            htmlFor="my-drawer-1"
            className="btn btn-square border-none bg-transparent lg:hidden"
          >
            <HiMenuAlt1 className=" h-5 w-5 " />
          </label>
        </div>
      </div>
    </div>
  )
}
