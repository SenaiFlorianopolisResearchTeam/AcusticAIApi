import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import Page from '@/app/dashboard/page'

test('Dashboard page', async () => {
  render(
    <Suspense>
      <Page />
    </Suspense>
  )
  const heading = await screen.findByRole('heading')
  expect(heading).toHaveTextContent('Dashboard')
})