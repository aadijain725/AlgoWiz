import QuizPage from '../components/QuizPage';
import { render } from '@testing-library/react';

test('render question card', () => {
    render(<QuizPage/>);
    const quizCard = document.querySelector("#question-card");
    expect(quizCard).toBeInTheDocument();
})

test('render progress bar', () => {
    render(<QuizPage/>);
    const progressBar = document.querySelector("#progress-bar");
    expect(progressBar).toBeInTheDocument();
})



