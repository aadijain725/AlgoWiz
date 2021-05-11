import data from "./quiz.json";
export default class QuizPageParser {
    /* this method returns an array of maps that conatins all the information regarding the question to be displayed
    // the map layout
    // {
    //     question: string -- the question,
    //     answer: string -- the answer,
    //     option: string[] -- the different possible answers to the question,
    //     posFeedback: string -- the positive feedback to be given if right answer was submitted,
    //     negFeedback: string -- the negative feedback to be given if wrong answer was submitted,,
    // }*/
    getInfo() {
        var all_information = [];
        for (let i = 0; i < data.length; i++) {
            var info2 = data[i];
            var topic_details = {
                question: info2["question"],
                answer: info2["answer"],
                option: [info2["option1"], info2["option2"], info2["option3"]],
                feebacks: [info2["posFeedback"], info2["negFeedback"]],
            };
            all_information.push(topic_details);
        }
        return all_information;
    }
}
