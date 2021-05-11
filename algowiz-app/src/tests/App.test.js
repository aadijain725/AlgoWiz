import { render, screen } from '@testing-library/react';
import App from '../App';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom'; 

test('renders the navbar', () => {
  render(<App />);
  const navBar = document.querySelector('#nav');
  expect(navBar).toBeInTheDocument();
});

test('renders the App Contents', () => {
  render(<App />);
  const appBody = document.querySelector('#appBody');
  expect(appBody).toBeInTheDocument();
});

/*
Cannot get router to work in tests!
test('404 on bad route', () => {
  render(
    <MemoryRouter initialEntries={["/lesson/l1"]}>
    <App />
  </MemoryRouter>
  )

  expect(screen.getByText(/404/i)).toBeInTheDocument()
})
*/
