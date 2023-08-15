import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import CardSession from '../../src/components/cardSession'

test('home', () => {
  render(<CardSession id='1' name='test' data={[1,2,3,4,5,6]}/>)
  
  expect(screen.getByText('test')).toBeInTheDocument()
})