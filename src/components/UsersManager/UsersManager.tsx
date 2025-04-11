import { useState } from 'react'
import UserForm from '../UserForm/UserForm'
import UsersList from '../UsersList/UsersList'
import { UserListItemProps } from '../UserListItem/UserListItem.types'
import { FormDataType } from '../UserForm/UserForm.types'

const UsersManager = () => {
  const [users, setUsers] = useState<UserListItemProps[]>([
    { firstName: 'meo' },
  ])

  const onSubmit = (data: FormDataType) => {
    setUsers((prev) => [...prev, data])
  }
  return (
    <div>
      <UserForm onSubmit={onSubmit} />
      <UsersList users={users} />
    </div>
  )
}

export default UsersManager
