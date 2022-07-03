import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'

import App from './App'

test('Homepage', async () => {
  render(<App />)

  await waitFor(() => {
    const linkElement = screen.getByText(/React Roadmap Milestones component under construction/i)
    expect(linkElement).toBeInTheDocument()
  })
})
