import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const txt = screen.getByText(/Hi there! let's become better all round/i);
  expect(txt).toBeInTheDocument();

  const txt2 = screen.getByText(/Hi there! let's become better all round/i);
  expect(txt2).toBeInTheDocument();
  
  const txt3 = screen.getByText(/Hi there! let's become better all round/i);
  expect(txt3).toBeInTheDocument();
});
