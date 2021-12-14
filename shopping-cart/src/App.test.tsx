import { render, screen } from '@testing-library/react';
import App from './App';

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    };
  }
});

test('renders submit', () => {
  render(<App />);
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});
