/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react'

import enTranslations from '@/app/translations/en/en.json'
import { renderWithStore } from '@/utils/tests/render-with-store'
import ClientComponent from './index'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
  usePathname() {
    return ''
  },
  useParams() {
    return {
      lang: 'en',
    }
  },
}))

describe('Component: HeaderBar', () => {
  it('Title is shown', () => {
    renderWithStore(<ClientComponent />, { initialState: { translations: enTranslations } })
    const headerBarTitle = screen.queryByText('React Roadmap Milestones Example')
    expect(headerBarTitle).toBeTruthy()
  })
})
