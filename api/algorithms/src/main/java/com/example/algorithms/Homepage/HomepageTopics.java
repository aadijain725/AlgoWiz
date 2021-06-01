package com.example.algorithms.Homepage;


import javax.persistence.*;

@Entity
@Table
public class HomepageTopics {
    @Id
    @SequenceGenerator(
            name = "home_topic_sequence",
            sequenceName = "home_topic_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "home_topic_sequence"
    )
    // Unique Id for each topic
    private Long id;

    // Topic name
    private String topic;

    // quizId for the algorithm
    private String quizId;

    // lessonId for the algorithm
    private String lessonId;

    // Algorithm name of the main topic
    private String algorithmName;

    // Homepage content for the algorithm
    private String homepageDescription;

    // Image link of the algorithm
    private String imageURL;

    public HomepageTopics(){}


    /**
     * Create a homepage object that contains the given fields
     * @param topic                 algorithm category
     * @param quizId                unique quiz id for the algorithm
     * @param lessonId              unique lesson id for the algorithm
     * @param algorithmName         name of the algorithm
     * @param homepageDescription   a short description of the algorithm
     * @param imageURL              an image url for the algorithm
     */

    public HomepageTopics(String topic,
                          String quizId,
                          String lessonId,
                          String algorithmName,
                          String homepageDescription,
                          String imageURL) {

        this.topic = topic;
        this.quizId = quizId;
        this.lessonId = lessonId;
        this.algorithmName = algorithmName;
        this.homepageDescription = homepageDescription;
        this.imageURL = imageURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
    }

    public String getLessonId() {
        return lessonId;
    }

    public void setLessonId(String lessonId) {
        this.lessonId = lessonId;
    }

    public String getAlgorithmName() {
        return algorithmName;
    }

    public void setAlgorithmName(String algorithmName) {
        this.algorithmName = algorithmName;
    }

    public String getHomepageDescription() {
        return homepageDescription;
    }

    public void setHomepageDescription(String homepageDescription) {
        this.homepageDescription = homepageDescription;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    @Override
    public String toString() {
        return "HomepageTopics{" +
                "id=" + id +
                ", topic='" + topic + '\'' +
                ", quizId='" + quizId + '\'' +
                ", lessonId='" + lessonId + '\'' +
                ", algorithmName='" + algorithmName + '\'' +
                ", homepageDescription='" + homepageDescription + '\'' +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }
}
