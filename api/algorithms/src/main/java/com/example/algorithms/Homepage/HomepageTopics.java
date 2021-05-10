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

    public HomepageTopics(Long id, String topic, String algorithmName, String homepageDescription, String imageURL) {
        this.id = id;
        this.topic = topic;
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

    public String getAlgorithmName() {
        return algorithmName;
    }

    public void setAlgorithmName(String algorithmName) {
        this.algorithmName = algorithmName;
    }

    public String getHomepageDescription() {
        return homepageDescription;
    }

    public void setHomepageDescription(String homePageDescription) {
        this.homepageDescription = homePageDescription;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
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

    public HomepageTopics(){}

    public HomepageTopics(Long id, String algorithmName, String homepageDescription) {
        this.id = id;
        this.algorithmName = algorithmName;
        this.homepageDescription = homepageDescription;
    }

}
