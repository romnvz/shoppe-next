import { TextField } from '@/shared/ui'

export const Form = () => {
  return (
    <TextField
      variant="standard"
      placeholder="Ваш email для акций и предложений"
      className="max-w-72"
      trailingIcon="/icons/arrow-right.svg"
    />
  )
}
