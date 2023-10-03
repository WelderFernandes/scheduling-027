import {
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'

export default function Rodape() {
  return (
    <>
      <div className="tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-between rounded-t-2xl bg-white shadow-md">
        <a className="tab text-4xl text-black">
          <AiOutlineHome />
        </a>
        <a className="tab text-4xl text-black">
          <AiOutlineHeart />
        </a>
        <a className="tab text-4xl text-black">
          <AiOutlineCalendar />
        </a>
        <a className="tab text-4xl text-black">
          <AiOutlineUser />
        </a>
      </div>
    </>
  )
}
