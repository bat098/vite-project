export interface FormDataType {
  firstName: string
}

export interface UserFormProps {
  onSubmit: (data: FormDataType) => void
}
