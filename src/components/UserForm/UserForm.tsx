import { useForm, Controller } from 'react-hook-form'
import { FormDataType, UserFormProps } from './UserForm.types'

const UserForm = (props: UserFormProps) => {
  const { onSubmit } = props
  const { control, handleSubmit, reset } = useForm<FormDataType>({
    defaultValues: {
      firstName: '',
    },
  })

  const onFormSubmit = (data: FormDataType) => {
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            {...field}
          />
        )}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm
