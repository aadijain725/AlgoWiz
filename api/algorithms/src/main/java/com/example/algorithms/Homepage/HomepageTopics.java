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
    private Long id;
    private String topic;
    private String algorithmName;
    private String homepageDescription;
    private String imageURL;

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "HomePageTopics{" +
                "id=" + id +
                ", topic='" + topic + '\'' +
                ", algorithmName='" + algorithmName + '\'' +
                ", homepageDescription='" + homepageDescription + '\'' +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }

    public void setId(Long id) {
        this.id = id;
    }

    public HomepageTopics(String topic, String algorithmName, String homePageDescription, String imageURL) {
        this.topic = topic;
        this.algorithmName = algorithmName;
        this.homepageDescription = homePageDescription;
        this.imageURL = imageURL;
    }

    public String getAlgorithmName() {
        return algorithmName;
    }

    public void setAlgorithmName(String algorithmName) {
        this.algorithmName = algorithmName;
    }

    public String getHomePageDescription() {
        return homepageDescription;
    }

    public void setHomePageDescription(String homePageDescription) {
        this.homepageDescription = homePageDescription;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getSubtopic() {
        return algorithmName;
    }

    public void setSubtopic(String subtopic) {
        this.algorithmName = subtopic;
    }

    public String getSummary() {
        return homepageDescription;
    }

    public void setSummary(String summary) {
        this.homepageDescription = summary;
    }

    public HomepageTopics(){}

    public HomepageTopics(String topic, String algorithmName, String homepageDescription) {
        this.topic = topic;
        this.algorithmName = algorithmName;
        this.homepageDescription = homepageDescription;
    }

    public HomepageTopics(Long id, String topic, String subtopic, String summary) {
        this.id = id;
        this.topic = topic;
        this.algorithmName = subtopic;
        this.homepageDescription = summary;
    }
}
