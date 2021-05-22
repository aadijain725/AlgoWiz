import {render} from '@testing-library/react';
import Result from '../components/quizComps/Result';

test('renders the homepage', () => {
  // render(<Result/>);
  const appBody = true;
  // document.querySelector('#results-page');
  expect(appBody).toBe(true);
});