import { describe, expect, it } from 'vitest'
import UsersList from './UsersList'
import { render, screen } from '@testing-library/react'
import { UserListProps } from './UsersList.types'

const mockUsers: UserListProps['users'] = [
  {
    firstName: 'Mateusz',
  },
  {
    firstName: 'Kamil',
  },
]

const setup = (users: UserListProps['users']) => {
  render(<UsersList users={users} />)
  const list = screen.getByRole('list')
  const listItems = screen.queryAllByRole('listitem')
  return { list, listItems }
}

describe('UserList', () => {
  it('should render an empty list when users array is empty', () => {
    const { list } = setup([])
    expect(list).toBeInTheDocument()
    expect(list.children.length).toBe(0)
  })

  it('should render a list with elements when users array is not empty', () => {
    const { list, listItems } = setup(mockUsers)
    expect(list).toBeInTheDocument()
    expect(listItems).toHaveLength(mockUsers.length)
    listItems.forEach((listItem) => {
      expect(list.contains(listItem)).toBe(true)
    })
  })
})
