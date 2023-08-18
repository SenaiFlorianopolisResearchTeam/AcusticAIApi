import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../src/app/login/page'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))


})