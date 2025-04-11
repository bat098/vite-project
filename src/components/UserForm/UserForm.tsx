import { useForm, Controller } from 'react-hook-form'
import { FormDataType, UserFormProps } from './UserForm.types'

const UserForm = (props: UserFormProps) => {
  const { onSubmit } = props
  const { control, handleSubmit } = useForm<FormDataType>({
    defaultValues: {
      firstName: '',
    },
  })

  const onFormSubmit = (data: FormDataType) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm
