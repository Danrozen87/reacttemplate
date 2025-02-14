
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '../language-switcher';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn()
    }
  })
}));

describe('LanguageSwitcher', () => {
  it('renders language selector button', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows language options when clicked', async () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(await screen.findByText('English')).toBeInTheDocument();
    expect(await screen.findByText('Svenska')).toBeInTheDocument();
    expect(await screen.findByText('Dansk')).toBeInTheDocument();
    expect(await screen.findByText('Nederlands')).toBeInTheDocument();
  });
});

