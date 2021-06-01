package com.example.algorithms.quiz;

import javax.persistence.*;

@Entity
@Table
public class Quiz {
    @Id
    @SequenceGenerator(
            name = "quiz_sequence",
            sequenceName = "quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_sequence"
    )

    // Unique Id for each question
    private int questionId;

    // quizId that the questions belongs to
    private String quizId;

    // lessonId of the quiz topic
    private String lessonId;

    // Title of the quiz
    private String title;

    // Question
    @Column(nullable = false, length = 4096)
    private String question;

    // First answer option
    @Column(nullable = false, length = 4096)
    private String option1;

    // Second answer option
    @Column(nullable = false, length = 4096)
    private String option2;

    // Third answer option
    @Column(nullable = false, length = 4096)
    private String option3;

    // Index of the correct answer in the options list
    // If correctAnswer = 0, option1 is the right answer
    //    correctAnswer = 1, option2 is the right answer
    //    correctAnswer = 2, option3 is the right answer
    private int correctAnswer;

    // Feedback for option1
    @Column(nullable = false, length = 4096)
    private String feedback1;

    // Feedback for option2
    @Column(nullable = false, length = 4096)
    private String feedback2;

    // Feedback for option3
    @Column(nullable = false, length = 4096)
    private String feedback3;


    public Quiz() {

    }

    /**
     * Create a quiz object that contains the given fields
     * @param quizId            unique quiz id for the algorithm
     * @param lessonId          unique lesson id for the algorithm
     * @param title             name of the algorithm
     * @param question          question for the quiz
     * @param option1           possible answer choice for the question
     * @param option2           possible answer choice for the question
     * @param option3           possible answer choice for the question
     * @param correctAnswer     correct answer for the question
     * @param feedback1         feedback based on the option user picks
     * @param feedback2         feedback based on the option user picks
     * @param feedback3         feedback based on the option user picks
     */

    public Quiz(String quizId,
                String lessonId,
                String title,
                String question,
                String option1,
                String option2,
                String option3,
                int correctAnswer,
                String feedback1,
                String feedback2,
                String feedback3) {

        this.quizId = quizId;
        this.lessonId = lessonId;
        this.title = title;
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.correctAnswer = correctAnswer;
        this.feedback1 = feedback1;
        this.feedback2 = feedback2;
        this.feedback3 = feedback3;
    }

    public String getLessonId() {
        return lessonId;
    }

    public void setLessonId(String lessonId) {
        this.lessonId = lessonId;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public int getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(int correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getFeedback1() {
        return feedback1;
    }

    public void setFeedback1(String feedback1) {
        this.feedback1 = feedback1;
    }

    public String getFeedback2() {
        return feedback2;
    }

    public void setFeedback2(String feedback2) {
        this.feedback2 = feedback2;
    }

    public String getFeedback3() {
        return feedback3;
    }

    public void setFeedback3(String feedback3) {
        this.feedback3 = feedback3;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "questionId=" + questionId +
                ", quizId='" + quizId + '\'' +
                ", lessonId='" + lessonId + '\'' +
                ", title='" + title + '\'' +
                ", question='" + question + '\'' +
                ", option1='" + option1 + '\'' +
                ", option2='" + option2 + '\'' +
                ", option3='" + option3 + '\'' +
                ", correctAnswer=" + correctAnswer +
                ", feedback1='" + feedback1 + '\'' +
                ", feedback2='" + feedback2 + '\'' +
                ", feedback3='" + feedback3 + '\'' +
                '}';
    }
}
