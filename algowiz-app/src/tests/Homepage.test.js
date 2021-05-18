import {render} from '@testing-library/react';
import Result from '../components/Result';

test('renders the homepage', () => {
  render(<Result/>);
  const appBody = document.querySelector('#results-page');
  expect(appBody).toBeInTheDocument();
});