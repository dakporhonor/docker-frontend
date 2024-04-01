import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const txt = screen.getByText(/Working on feature branch./i);
  expect(txt).toBeInTheDocument();
});
