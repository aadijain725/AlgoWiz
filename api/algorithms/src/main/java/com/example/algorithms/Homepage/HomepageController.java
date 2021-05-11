package com.example.algorithms.Homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

        // mapping topic to list of data containing algorithms
        Map<String, List<Data>> topicToDataMap = new HashMap<>();
        for (HomepageTopics hp: algoHomeService.getTopics()) {
            String topic = hp.getTopic();
            Data topicData = new Data(hp.getId(),
                                      hp.getAlgorithmName(),
                                      hp.getHomepageDescription(),
                                      hp.getImageURL());

            if (!topicToDataMap.containsKey(topic)) {
                topicToDataMap.put(topic, new ArrayList<>(List.of(topicData)));
            } else {
                List<Data> currDataList = topicToDataMap.get(topic);
                currDataList.add(topicData);
                topicToDataMap.put(topic, currDataList);
            }
        }

        List<CustomJSON> returnList = new ArrayList<>();
        for (String topic: topicToDataMap.keySet()) {
            CustomJSON customJSON = new CustomJSON(topic, topicToDataMap.get(topic));
            returnList.add(customJSON);
        }

        return returnList;
    }

    private static class CustomJSON {
        private final String topicName;
        private final List<Data> data;

        public CustomJSON(String topicName, List<Data> data) {
            this.topicName = topicName;
            this.data = data;
        }

        public String getTopicName() {
            return topicName;
        }

        public List<Data> getData() {
            return data;
        }

        @Override
        public String toString() {
            return "CustomJSON{" +
                    "topicName='" + topicName + '\'' +
                    ", data=" + data +
                    '}';
        }
    }

    private static class Data {
        private final long id;
        private final String algorithmName;
        private final String homePageDescription;
        private final String imageURL;

        public Data (long id, String algorithmName, String homePageDescription, String imageURL) {
            this.id = id;
            this.algorithmName = algorithmName;
            this.homePageDescription = homePageDescription;
            this.imageURL = imageURL;
        }

        public long getId() {
            return id;
        }

        public String getAlgorithmName() {
            return algorithmName;
        }

        public String getHomePageDescription() {
            return homePageDescription;
        }

        public String getImageURL() {
            return imageURL;
        }

        @Override
        public String toString() {
            return "Data{" +
                    "id=" + id +
                    ", algorithmName='" + algorithmName + '\'' +
                    ", homePageDescription='" + homePageDescription + '\'' +
                    ", imageURL='" + imageURL + '\'' +
                    '}';
        }
    }
}
