import { ListItemPrefix, Radio, Typography } from '@material-tailwind/react'

export default function RadioButton({
  horario,
  key,
  current,
  name,
  setSelectedOptions,
}: any) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSelectedOptions((prevSelectedOptions: any) => ({
      ...prevSelectedOptions,
      [name]: value,
    }))
  }

  return (
    <label
      htmlFor={key}
      className="flex cursor-pointer items-center rounded-lg bg-[#d6d4dd] px-3 py-2"
    >
      <ListItemPrefix className="mr-3">
        <Radio
          name={name}
          id={key}
          ripple={false}
          className="h-3 w-3 text-xs before:w-2 hover:before:opacity-0"
          containerProps={{
            className: 'p-0',
          }}
          crossOrigin={undefined}
          onChange={handleOptionChange}
        />
      </ListItemPrefix>
      <Typography color="black" className="text-xs font-bold">
        {horario}
      </Typography>
    </label>
  )
}
