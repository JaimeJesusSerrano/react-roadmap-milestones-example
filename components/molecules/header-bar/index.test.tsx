/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import ClientComponent from './index'

it('Component: HeaderBar', () => {
  render(<ClientComponent />)
  const headerBarTitle = screen.queryByText('React Roadmap Milestones Example')
  expect(headerBarTitle).toBeTruthy()
})
