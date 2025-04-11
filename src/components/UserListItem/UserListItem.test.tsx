import { render, screen } from '@testing-library/react'
import UserListItem from './UserListItem'
import { describe, it, expect } from 'vitest'

describe('UserListItem', () => {
  it('should render firstName', () => {
    render(<UserListItem firstName="Mateusz" />)
    expect(screen.getByText('Mateusz')).toBeInTheDocument()
  })
})
