export default function Divider({ text }: any) {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400"></div>
      {text !== '' ? (
        <span className="mx-4 flex-shrink text-gray-400">{text}</span>
      ) : (
        ''
      )}

      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  )
}
