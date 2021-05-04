import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the navbar', () => {
  render(<App />);
  const navBar = document.querySelector('#nav');
  expect(navBar).toBeInTheDocument();
});
