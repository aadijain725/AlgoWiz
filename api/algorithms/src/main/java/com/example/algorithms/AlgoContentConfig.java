package com.example.algorithms;

import com.example.algorithms.Homepage.HomepageRepository;
import com.example.algorithms.Homepage.HomepageTopics;
import com.example.algorithms.LessonPage.Lesson;
import com.example.algorithms.LessonPage.LessonRepository;
import com.example.algorithms.quiz.Quiz;
import com.example.algorithms.quiz.QuizRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
@Configuration
public class AlgoContentConfig {
    // a bean, inject quiz, homepage, and lesson repository
    @Bean
    CommandLineRunner commandLineRunner(HomepageRepository homepageRepository, LessonRepository lessonRepository, QuizRepository repository) {
        return args -> {

            HomepageTopics dijkstrasAlgorithm = new HomepageTopics(
                    "Graph",
                    "Dijkstra's Algorithm",
                    "Algorithm for finding the shortest path from start node to end node\n" +
                            "in a weighted graph.",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );
            HomepageTopics breadthAlgorithm2 = new HomepageTopics(
                    "Graph",
                    "Breadth First Search",
                    "Algorithm that selects a single node (initial or source point) in a graph and " +
                            "then visits all the nodes adjacent to the selected node in a weighted graph.",
                    "https://www.freecodecamp.org/news/content/images/2020/03/image-154.png"
            );
            HomepageTopics selectionSort = new HomepageTopics(
                    "Sorting",
                    "Selection Sort",
                    "The selection sort algorithm sorts an array by repeatedly finding the " +
                            "minimum element from unsorted part and putting it at the beginning.",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );

            HomepageTopics binarySearch = new HomepageTopics(
                    "Search",
                    "Binary Search",
                    "Binary search, also known as half-interval search, is an algorithm used " +
                            "to find the location of an element in a sorted array",
                    "https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png"
            );
            Lesson dijkstrasLesson = new Lesson(
                    3l,
                    "Graph",
                    "Dijkstras",
                    "Dijkstra's algorithm is a type of graph algorithm for finding the shortest paths between nodes in" +
                            "a graph. Dijkstra's algorithm was published in 1959 by a Dutch computer scientist Edsger Dijkstra." +
                            "The graph can be directed meaning the edges point in a direction or undirected. The weight" +
                            "on each edge needs to have a nonnegative weight. Dijkstra's algorithms are used to find " +
                            "shortest route between one city and all other cities, social networking" +
                            "application to suggest lists of firends that a user may know.",
                    "1-Initialization of all nodes with distance \"infinite\"; initialization of the starting node with 0.\n" +
                            "2-Marking of the distance of the starting node as permanent, all\n" +
                            " other distances as temporarily.\n" +
                            "3-Setting of starting node as active. 4-Calculation of the \n" +
                            "temporary distances of all neighbour nodes of the active node \n" +
                            "by summing up its distance with the weights of the edges.\n" +
                            "5-If such a calculated distance of a node is smaller as the current \n" +
                            "one, update the distance and set the current node as antecessor.\n" +
                            " This step is also called update and is Dijkstra's central idea.\n" +
                            "6-Setting of the node with the minimal temporary distance as \n" +
                            "active. Mark its distance as permanent.\n" +
                            "7-Repeating of steps 4 to 7 until there aren't any nodes \n" +
                            "left with a permanent distance, which neighbours still have temporary distances.",
                    "The time complexity of Dijkstra's algorithm is O(V^2) but with min priority queue, it reduces to \n" +
                            "O(V + E log V)",
                    "https://i.ytimg.com/vi/wtdtkJgcYUM/maxresdefault.jpg"
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
                    "That is true, but there is a better answer");

            Quiz dijkstraQ2 = new Quiz(
                    2,
                    "Dijkstra's algorithm",
                    "What is the best time complexity for Dijkstra's algorithm?",
                    "O(V + E log V)",
                    "O(log n)",
                    "O(V^2)",
                    "O(V + E log V)",
                    "That is correct. Great job",
                    "Nope, think about edges and vertices. Try again");

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

            homepageRepository.saveAll(List.of(dijkstrasAlgorithm,breadthAlgorithm2, selectionSort, binarySearch));
            lessonRepository.saveAll(List.of(dijkstrasLesson));
            repository.saveAll(
                    List.of(dijkstraQ1, dijkstraQ2, dijkstraQ3)
            );
        };
    }
}
