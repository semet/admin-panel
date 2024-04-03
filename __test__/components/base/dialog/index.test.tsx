import { Dialog } from '@/components/base'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('Dialog', () => {
  it('renders the dialog with correct content', () => {
    const title = 'Dialog title'
    const content = 'Dialog content'
    const { getByText } = render(
      <Dialog
        isOpen={true}
        setIsOpen={jest.fn()}
        title={title}
      >
        {content}
      </Dialog>
    )
    const titleElement = getByText(title)
    const contentElement = getByText(content)
    expect(titleElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
    act(() => {
      titleElement.click()
    })
  })
})
