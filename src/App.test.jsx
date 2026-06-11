import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('boots into the splash screen', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('status', { name: /loading portfolio/i })).toBeInTheDocument();
  expect(screen.getByText(/press any key to skip/i)).toBeInTheDocument();
});
