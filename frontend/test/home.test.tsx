import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

test('home', async () => {
  const { getByAltText } = render(<Home />)
  
  expect(screen.getByText('AcustticAI')).toBeInTheDocument()
  expect(screen.getByText('This project is maintained by Gabriel Pelizzaro (Fullzer4), a member of the Sesi Florianopolis Scientific Initiation team. It was created to streamline the counting and classification of cars, along with the interactive analysis of this data.')).toBeInTheDocument()
  expect(screen.getByText('Members')).toBeInTheDocument()
  expect(screen.getByText('Gabriel Pelizzaro')).toBeInTheDocument()
  
  const Logoimg = getByAltText('logo');
  const Fullimg = getByAltText('fullzer4');

  expect(Logoimg).toHaveAttribute('src', '/logo.webp')
  expect(Fullimg).toHaveAttribute('src', '/fullzer4.jpg')
})