import { Button, CardBody, CardFooter, Input } from '@material-tailwind/react'
import { useState } from 'react'

export default function CategoryForm() {
  const [name, setName] = useState('')
  const [file, setFile] = useState<File>()
  return (
    <>
      <CardBody className="flex flex-col gap-4">
        <form>
          <div className="mb-4 flex flex-col gap-6">
            <label className="text-blue border-blue hover:bg-blue flex w-full cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 uppercase tracking-wide shadow-lg hover:text-blue-500">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="hidden"
              />
            </label>
            <Input
              size="lg"
              label="Nome"
              name="name"
              onChange={(e) => setName(e.target.value)}
              crossOrigin={undefined}
            />
          </div>
        </form>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Salvar
        </Button>
      </CardFooter>
    </>
  )
}
