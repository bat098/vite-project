import UserListItem from '../UserListItem/UserListItem'
import { UserListProps } from './UsersList.types'

const UsersList = (props: UserListProps) => {
  const { users } = props
  return (
    <ul>
      {users.map(({ firstName }, index) => (
        <UserListItem key={index} firstName={firstName} />
      ))}
    </ul>
  )
}
export default UsersList
