import { describe, expect, it, vi } from 'vitest'
import UserForm from './UserForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const onSubmitMock = vi.fn()

const setup = () => {
  render(<UserForm onSubmit={onSubmitMock} />)
  const inputElement = screen.getByPlaceholderText(/first name/i)
  const submitButtonElement = screen.getByRole('button', { name: 'Submit' })
  const labelElement = screen.getByText(/first name/i)
  return { inputElement, submitButtonElement, labelElement }
}

describe('UserForm', () => {
  it('should render "First Name" input', () => {
    const { inputElement } = setup()

    expect(inputElement).toBeInTheDocument()
  })
  it('should change input value during typing', async () => {
    const { inputElement } = setup()
    await userEvent.type(inputElement, 'Mateusz')
    expect(inputElement).toHaveValue('Mateusz')
  })
  it('should clear input after click submit button', async () => {
    const { inputElement, submitButtonElement } = setup()
    await userEvent.type(inputElement, 'Mateusz')
    await userEvent.click(submitButtonElement)
    expect(inputElement).toHaveValue('')
  })
  it('should render submit button', () => {
    const { submitButtonElement } = setup()
    expect(submitButtonElement).toBeInTheDocument()
  })
  it('should render "First Name" label', () => {
    const { labelElement } = setup()
    expect(labelElement).toBeInTheDocument()
  })
})
