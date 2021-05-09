package com.example.algorithms.Homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/home")
public class HomepageController {
    private final HomepageService algoHomeService;

    @Autowired
    public HomepageController(HomepageService algoHomeService) {
        this.algoHomeService = algoHomeService;
    }

    @GetMapping
    public List<HomepageTopics> getTopics() {
        return algoHomeService.getTopics();
    }
}
