import { Button } from '@/components/base'
import { render } from '@testing-library/react'

describe('Button', () => {
  it('renders the button with correct content', () => {
    const content = 'Click me'
    const clickFn = jest.fn()
    const { getByText } = render(
      <Button
        title={content}
        variant="primary"
        size="sm"
        onClick={clickFn}
      />
    )
    const buttonElement = getByText(content)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-primary-500')
    expect(buttonElement).toHaveClass('text-sm')

    buttonElement.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
