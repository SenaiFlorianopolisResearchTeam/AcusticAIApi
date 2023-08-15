import { Suspense } from 'react'
import { render, screen } from '@testing-library/react'; 
import CardSession from '@/components/cardSession';

describe('CardSession component', () => {
  it('should render component with provided props', async () => {
    render(
      <Suspense fallback="loading">
        <CardSession id='1' name='Test Session' data={[1, 2, 3, 4, 5, 6]} />
      </Suspense>
    );

    const heading = await screen.findByRole('heading')
    expect(heading).toHaveTextContent('Test Session')
  });
});
