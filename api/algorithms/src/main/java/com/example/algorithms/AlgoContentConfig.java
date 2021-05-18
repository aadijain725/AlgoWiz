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
    CommandLineRunner commandLineRunner(HomepageRepository homepageRepository, LessonRepository lessonRepository, QuizRepository quizRepository) {
        return args -> {

            HomepageTopics dijkstrasAlgorithm = new HomepageTopics(
                    "Graph",
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's Algorithm",
                    "Algorithm for finding the shortest path from start node to end node\n" +
                            "in a weighted graph.",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );

            HomepageTopics selectionSort = new HomepageTopics(
                    "Sorting",
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "The selection sort algorithm sorts an array by repeatedly finding the " +
                            "minimum element from unsorted part and putting it at the beginning.",
                    "https://i1.faceprep.in/companies/selection-sort-2.PNG"
            );

            HomepageTopics binarySearch = new HomepageTopics(
                    "Search",
                    "search_binary_quiz",
                    "search_binary_lesson",
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

            Quiz dijkstraQ1 = new Quiz (
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "Which of the following type of graphs work(s) with Dijkstra's algorithm?",
                    "Undirected graph only",
                    "Both directed and undirected graphs",
                    "Directed graph only",
                    0,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"

            );


            Quiz dijkstraQ2 = new Quiz(
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "What is the best time complexity for Dijkstra's algorithm?",
                    "O(V + E log V)",
                    "O(log n)",
                    "O(V^2)",
                    0,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"
            );

            Quiz dijkstraQ3 = new Quiz(
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "\"Which of the following is incorrect weight for the edge of the graph used by Dijkstra's?",
                    "-200",
                    "200",
                    "-200",
                    1,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"
            );

            Quiz binarySearchQ1 = new Quiz(
                    "search_binary_quiz",
                    "search_binary_lesson",
                    "Binary Search",
                    "Which of the following is false about finding an element using binary search?",
                    "We can use this algorithm on unsorted arrays.",
                    "In an array with of size at least 3, the number of elements we examine is always lesser than the size of the array.",
                    "Runtime of binary search is O(log(n))",
                    0,
                    "Correct! Binary search only works on sorted arrays. If and only if the array is sorted, our algorithm can decide which half of the array the desired element would be present based on its value.",
                    "Not quite. This statement is true. If the array size is 3, we only check 2 elements. In any size greater than 3, we keep slicing the array into half, resulting in fewer checks than the total number of elements present.",
                    "Not quite. This statement is true. Binary search keeps slicing the array into halves every iteration, resulting in O(log(n)) runtime."
            );

            Quiz binarySearchQ2 = new Quiz(
                    "search_binary_quiz",
                    "search_binary_lesson",
                    "Binary Search",
                    "An array is sorted in ascending order. On comparing the middle element, we find that it is greater than the element we are searching for. Given that we have more elements to explore in the array, what does our binary search algorithm do at this point?",
                    "The algorithm stops executing at this point.",
                    "It goes to examine the right half of the sliced array.",
                    "It goes to examine the left half of the sliced array.",
                    2,
                    "Not quite. The current element is not equal to the target and we have more elements to explore. So, our algorithm keeps executing.",
                    "Not quite. If the current element is greater than the target, since the array is sorted in ascending order, we know that the target is present before the current element in the array.",
                    "Correct! If the target value < current value, we go to the left."
            );

            Quiz binarySearchQ3 = new Quiz(
                    "search_binary_quiz",
                    "search_binary_lesson",
                    "Binary Search",
                    "We have an array of 32 elements in an array sorted in ascending order and we want to use binary search to look up a certain number. What is the maximum number of elements that binary search would examine to find the number?",
                    "6 elements",
                    "1 element",
                    "32 elements",
                    0,
                    "Correct! After the first check, we have 16 elements. 8 after the second check, 4 after the third, 2 after the fourth, and 1 after the fifth check. The sixth check would be to examine the last number.",
                    "Not Quite. Checking only one element would mean that the desired number is the middle element in the array. This is the best-case scenario.",
                    "Not Quite. Remember that binary search keeps slicing the array to examine into half every iteration. So, in no case, we examine all 32 elements."
            );

            Quiz selectionSortQ1 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "Selection Sort Question",
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    -1,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"
            );

            Quiz selectionSortQ2 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "Selection Sort Question",
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    -1,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"
            );

            Quiz selectionSortQ3 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "Selection Sort Question",
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    -1,
                    "Feedback for option 1",
                    "Feedback for option 2",
                    "Feedback for option 3"
            );

            // Save all the objects in the corresponding repositories.
            homepageRepository.saveAll(List.of(dijkstrasAlgorithm, selectionSort, binarySearch));
            lessonRepository.saveAll(List.of(dijkstrasLesson));
            quizRepository.saveAll(
                    List.of(dijkstraQ1,
                            dijkstraQ2,
                            dijkstraQ3,
                            binarySearchQ1,
                            binarySearchQ2,
                            binarySearchQ3,
                            selectionSortQ1,
                            selectionSortQ2,
                            selectionSortQ3)
            );
        };
    }
}
