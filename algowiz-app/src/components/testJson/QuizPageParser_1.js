import data from "./graph_dijks.json";
export default class QuizPageParser_1 {
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
        var questions = [];
        let questionsList = data["questionsList"];
        for (let i = 0; i < questionsList.length; i++) {
            var info2 = questionsList[i];
            var topic_details = {
                category: data["title"],
                question: info2["question"],
                answer: info2["answer"],
                option: info2["options"],
                feebacks: info2["responses"]
            };
            all_information.push(topic_details);
        }
        console.log("testing all_information: ", all_information);
        return all_information;
    }
}