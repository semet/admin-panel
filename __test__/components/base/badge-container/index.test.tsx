import { BadgeContainer } from '@/components/base'
import { render } from '@testing-library/react'

describe('BadgeContainer', () => {
  it('renders the badge with correct content', () => {
    const content = '5'
    const { getByText } = render(
      <BadgeContainer content={content}>
        <div>Child Component</div>
      </BadgeContainer>
    )
    const badgeElement = getByText(content)
    expect(badgeElement).toBeInTheDocument()
  })
})
