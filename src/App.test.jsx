import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app with navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navElement = screen.getByText(/Daniel Rice - Software Developer/i);
  expect(navElement).toBeInTheDocument();
});
