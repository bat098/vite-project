import { UserListItemProps } from './UserListItem.types'

const UserListItem = (props: UserListItemProps) => {
  const { firstName, ...rest } = props
  return <li {...rest}>{firstName}</li>
}

export default UserListItem
