import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  }));

describe('HomePage', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Home />);

    const impactText = getByText('EXPERIENCE THE ACOUSTIC INNOVATION');
    expect(impactText).toBeTruthy();

  });
});