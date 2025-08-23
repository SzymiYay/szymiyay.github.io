import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders site owner name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Szymon Frączek test/i })
    ).toBeInTheDocument()
  })

  test('renders navigation link to GEM', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /GEM/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/gem')
  })
})
