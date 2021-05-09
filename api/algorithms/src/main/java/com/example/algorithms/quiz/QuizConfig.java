package com.example.algorithms.quiz;

import com.example.algorithms.Homepage.HomepageRepository;
import com.example.algorithms.Homepage.HomepageTopics;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class QuizConfig {
    // a bean, inject quiz repository
    @Bean
    CommandLineRunner commandLineRunner(HomepageRepository homepageRepository, QuizRepository repository) {
        return args -> {
            HomepageTopics selectionSort = new HomepageTopics(
                    "Sorting",
                    "Selection Sort",
                    "Summary of Selection sort",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );

            HomepageTopics binarySearch = new HomepageTopics(
                    "Search",
                    "Binary Search",
                    "Summary of Binary Search",
                    "https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png"
            );

            HomepageTopics dijkstrasAlgorithm = new HomepageTopics(
                    "Graph",
                    "Dijkstra's Algorithm",
                    "Summary of Dijkstra's Graph Algorithm",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );
            Quiz dijkstraQ1 = new Quiz(
                    1,
                    "Dijkstra's algorithm",
                    "Which of the following type of graphs work(s) with Dijkstra's algorithm?",
                    "Both directed and undirected graphs",
                    "Both directed and undirected graphs",
                    "Directed graph only",
                    "Undirected graph only",
                    "Woohoo! Great job!",
                    "Sorry, that is incorrect. Try again");

            Quiz dijkstraQ2 = new Quiz(
                    2,
                    "Dijkstra's algorithm",
                    "What is the best time complexity for Dijkstra's algorithm?",
                    "O(V + E log V)",
                    "O(log n)",
                    "O(V^2)",
                    "O(V + E log V)",
                    "That is correct. Great job",
                    "Oops! nice try but that is incorrect. Try again");

            Quiz dijkstraQ3 = new Quiz(
                    3,
                    "Dijkstra's algorithm",
                    "Which of the following is incorrect weight for the edge of the graph used by Dijkstra's?",
                    "-200",
                    "200",
                    "-200",
                    "1",
                    "Awesome! Great job",
                    "Oops! nice try but that is incorrect. Try again");

            homepageRepository.saveAll(List.of(selectionSort, binarySearch, dijkstrasAlgorithm));
            repository.saveAll(
                    List.of(dijkstraQ1, dijkstraQ2, dijkstraQ3)
            );
        };
    }

}
