import {getUserFeedback} from '../components/QuizPage';

test('Output check getUserFeedback', () => {
    let result = getUserFeedback("1", "1", ["good job", "bad job"]);
    let check = result != null;
    expect(check).toBe(true);
})

test('Positive getUserFeedback', () => {
    
})