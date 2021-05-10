package com.example.algorithms.Homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="api/v1/homepage")
public class HomepageController {
    private final HomepageService algoHomeService;

    @Autowired
    public HomepageController(HomepageService algoHomeService) {
        this.algoHomeService = algoHomeService;
    }

    @GetMapping
    public List<CustomJSON> getTopics() {

        List<CustomJSON> returnList = new ArrayList<>();

        for (HomepageTopics hp: algoHomeService.getTopics()) {
            CustomJSON c = new CustomJSON(hp.getId(), hp.getTopic(), List.of(
                    hp.getAlgorithmName()),
                    List.of(hp.getHomepageDescription()), List.of(hp.getImageURL()));

            returnList.add(c);

        }
        return returnList;
    }

    public static class CustomJSON {
        private long id;
        private String topic;
        private List<String> algoName;
        private List<String> homePageDescription;
        private List<String> url;


        public CustomJSON(long id, String topic, List<String> algoName, List<String> homePageDescription, List<String> url) {
            this.id = id;
            this.topic = topic;
            this.algoName = algoName;
            this.homePageDescription = homePageDescription;
            this.url = url;
        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getTopic() {
            return topic;
        }

        public void setTopic(String topic) {
            this.topic = topic;
        }

        public List<String> getAlgoName() {
            return algoName;
        }

        public void setAlgoName(List<String> algoName) {
            this.algoName = algoName;
        }

        public List<String> getHomePageDescription() {
            return homePageDescription;
        }

        public void setHomePageDescription(List<String> homePageDescription) {
            this.homePageDescription = homePageDescription;
        }

        public List<String> getUrl() {
            return url;
        }

        public void setUrl(List<String> url) {
            this.url = url;
        }
    }


}
