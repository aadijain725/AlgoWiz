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
/*
This class writes homepage, lesson, and quiz page data to postgresql database.
It contains interface CommandLineRunner that indicates where the bean should run within
the Spring application.
 */
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
                    "https://miro.medium.com/max/446/1*X0JmdE2g25qt0nRvnztbQw.png"
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
                    "graph_dijkstra_lesson",
                    "graph_dijkstra_quiz",
                    "Dijkstra's algorithm",
                    "Dijkstra graph image",
                    "The graph can be directed meaning the edges point in a direction " +
                            "or undirected. The weight on each edge needs to have a nonnegative weight. " +
                            "It finds the shortest path between two points. It picks the unvisited vertex with the " +
                            "lowest distance, calculates the distance through it to each unvisited neighbor, and " +
                            "updates the neighbor's distance if smaller. Mark visited (set to red) when done with neighbors.\n",
                    "Dijkstra vizSrc placeholder",
                    "Dijkstra's algorithm is a type of graph algorithm for finding the shortest paths between" +
                            " nodes in a graph. This algorithm was published in 1959 by a Dutch computer scientist Edsger Dijkstra." +
                            " It is commonly used to find the shortest route between one city and all other cities, a " +
                            "social networking application to suggest lists of friends that a user may know.\n",
                    "Start with vertex u in Q with min dist[u], searches for the vertex u in the vertex set Q " +
                            "that has the least dist[u] value. length(u, v) returns the length of the edge joining " +
                            "(i.e. the distance between) the two neighbor-nodes u and v. The variable alt on line 18 is the " +
                            "length of the path from the root node to the neighbor node v if it were to go through u. " +
                            "If this path is shorter than the current shortest path recorded for v, that current path is " +
                            "replaced with this alt path. The prev array is populated with a pointer to the \"next-hop\" " +
                            "node on the source graph to get the shortest route to the source.\n",
                    "The time complexity of Dijkstra's algorithm is O(V^2). But with min priority queue, it reduces to \n" +
                            "O(V + E log V).\n",
                    "https://i.ytimg.com/vi/wtdtkJgcYUM/maxresdefault.jpg"
            );
            Lesson binaryLesson = new Lesson(
                    "search_binary_lesson",
                    "search_binary_quiz",
                    "Binary search algorithm",
                    "Binary search image",
                    "It compares the target value to the middle element of the array. If they are not equal, the half " +
                            "in which the target cannot lie is eliminated and the search continues on the remaining half, " +
                            "again taking the middle element to compare to the target value, and repeating this until the " +
                            "target value is found. If the search ends with the remaining half being empty, the target " +
                            "is not in the array.\n",
                    "Binary search vizSrc placeholder",
                    "Binary search is a search algorithm used to find the location of a particular element within a " +
                            "sorted array. It is faster than linear search on sorted arrays because of its logarithmic " +
                            "runtime. B-tree and binary search trees are two data structures that are based on binary search.",
                    "Binary search looks for a particular item by comparing the middle most item of the collection. " +
                            "If a match occurs, then the index of the item is returned. If the middle item is greater " +
                            "than the item, then the item is searched in the sub-array to the left of the middle item. " +
                            "Otherwise, the item is searched for in the sub-array to the right of the middle item. " +
                            "This process continues on the sub-array as well until the size of the subarray reduces to zero.\n",
                    "The time complexity of the binary search algorithm is O(log n). The best-case time complexity " +
                            "would be O(1) when the central index would directly match the desired value. " +
                            "The worst-case scenario could be the values at either extremity of the list or values not in the list\n",
                    "https://jojozhuang.github.io/assets/images/algorithm/1211/binarysearch.png"
            );

            Lesson selectionLesson = new Lesson(
                    "sort_selection_lesson",
                    "sort_selection_quiz",
                    "Selection sort algorithm",
                    "Selection sort image",
                    "A temporary int variable is initialized with the index of the outer loop. " +
                            "Then the inner loop starts. If the element at the current inner loop’s index is, " +
                            "for example, less than the element at the temporarily stored index, the temporary " +
                            "variable’s value is replaced with that of the current inner loop index. This process " +
                            "continues until the inner loop terminates. Upon termination, the algorithm swaps the " +
                            "element at the outer loop’s index with the one at the temporary variable’s index. " +
                            "This process continues until the outer loop finishes.\n",
                    "Selection sort vizSrc placeholder",
                    "Selection sort algorithm is an in-place comparison-based algorithm in which the list is " +
                            "divided into two parts, the sorted part at the left end and the unsorted part at the " +
                            "right end. It involves a nested for loop. The outer loop loops over each index in the " +
                            "array while the inner loop loops over the indices after the outer loop’s index. \n",
                    "The algorithm divides the input list into two parts: a sorted sublist of items which is " +
                            "built up from left to right at the front (left) of the list and a sublist of the " +
                            "remaining unsorted items that occupy the rest of the list. Initially, the sorted " +
                            "sublist is empty and the unsorted sublist is the entire input list. The algorithm " +
                            "proceeds by finding the smallest (or largest, depending on sorting order) element " +
                            "in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element " +
                            "(putting it in sorted order), and moving the sublist boundaries one element to the right.\n",
                    "Selection Sort can be used if memory is limited. It can also be used in cases where the swap " +
                            "operation is particularly expensive. The runtime complexity of Selection Sort is always O(N^2).\n",
                    "https://static.packt-cdn.com/products/9781785888731/graphics/image_13_007-1.jpg"


            );

            Quiz dijkstraQ1 = new Quiz (
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "Which of the following type of graphs work(s) with Dijkstra's algorithm?",
                    "Undirected graph only",
                    "Both directed and undirected graphs",
                    "Directed graph only",
                    1,
                    "Sorry, that is incorrect. There is a better answer to this question.",
                    "That is correct! Dijkstra's algorithm works with both directed and undirected graphs.",
                    "Nope, not quite. While it does work with directed graph, but there's a better answer. " +
                            "Please try again."

            );


            Quiz dijkstraQ2 = new Quiz(
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "What is the best time complexity for Dijkstra's algorithm?",
                    "O(E + V log V)",
                    "O(log n)",
                    "O(V^2)",
                    0,
                    "Woohoo! That is correct! The time complexity of Dijkstra when using Min Heap.",
                    "Sorry, that is incorrect! Think about number of vertices algorithm iterates through.",
                    "Nope, that is incorrect! Remember the question is asking for the best time complexity of " +
                            "Dijkstra's algorithm."
            );

            Quiz dijkstraQ3 = new Quiz(
                    "graph_dijkstra_quiz",
                    "graph_dijkstra_lesson",
                    "Dijkstra's algorithm",
                    "Which of the following is incorrect weight for the edge of the graph used by Dijkstra's?",
                    "-200",
                    "1",
                    "10",
                    0,
                    "Great job! That is correct! Dijkstra's algorithm only work with positive weight.",
                    "Nope, that is incorrect. Think about incorrect weight for the edge.",
                    "That is incorrect. Think about how Dijkstra's algorithm traverse through the vertices."
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
                    "Correct! Binary search only works on sorted arrays. If and only if the array is sorted," +
                            " our algorithm can decide which half of the array the desired element would be present based on its value.",
                    "Not quite. This statement is true. If the array size is 3, we only check 2 elements. " +
                            "In any size greater than 3, we keep slicing the array into half, resulting in fewer " +
                            "checks than the total number of elements present.",
                    "Not quite. This statement is true. Binary search keeps slicing the array into halves " +
                            "every iteration, resulting in O(log(n)) runtime."
            );

            Quiz binarySearchQ2 = new Quiz(
                    "search_binary_quiz",
                    "search_binary_lesson",
                    "Binary Search",
                    "An array is sorted in ascending order. On comparing the middle element, we find that " +
                            "it is greater than the element we are searching for. Given that we have more elements to " +
                            "explore in the array, what does our binary search algorithm do at this point?",
                    "The algorithm stops executing at this point.",
                    "It goes to examine the right half of the sliced array.",
                    "It goes to examine the left half of the sliced array.",
                    2,
                    "Not quite. The current element is not equal to the target and we have more elements" +
                            " to explore. So, our algorithm keeps executing.",
                    "Not quite. If the current element is greater than the target, since the array is sorted " +
                            "in ascending order, we know that the target is present before the current element in the array.",
                    "Correct! If the target value < current value, we go to the left."
            );

            Quiz binarySearchQ3 = new Quiz(
                    "search_binary_quiz",
                    "search_binary_lesson",
                    "Binary Search",
                    "We have an array of 32 elements in an array sorted in ascending order and we want to use " +
                            "binary search to look up a certain number. What is the maximum number of elements that binary " +
                            "search would examine to find the number?",
                    "6 elements",
                    "1 element",
                    "32 elements",
                    0,
                    "Correct! After the first check, we have 16 elements. 8 after the second check, " +
                            "4 after the third, 2 after the fourth, and 1 after the fifth check. The sixth check " +
                            "would be to examine the last number.",
                    "Not Quite. Checking only one element would mean that the desired number is the " +
                            "middle element in the array. This is the best-case scenario.",
                    "Not Quite. Remember that binary search keeps slicing the array to examine into " +
                            "half every iteration. So, in no case, we examine all 32 elements."
            );

            Quiz selectionSortQ1 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "Given an array of 6 elements, how many times will the outer loop need to run?",
                    "5",
                    "6",
                    "7",
                    0,
                    "Correct! The question is really asking for the minimum number of times the " +
                            "outer loop needs to run. When the second to last element is sorted, this also " +
                            "means the last element is also sorted, and therefore not need to go through the inner loop.",
                    "Almost! The outer loop can run 6 times and still be correct. However, think about " +
                            "whether the last element needs to be swapped when the outer loop reaches it.",
                    "Not quite. This would involve having the outer loop iterate past the end of the array. " +
                            "Depending on the language you work with, this can either cause an excpetion error or unintended bugs."
            );

            Quiz selectionSortQ2 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "How many more (or few) iterations will the loops make if the array of size n " +
                            "was pre-sorted (versus a random order)?",
                    "-n",
                    "0",
                    "n",
                    1,
                    "Not quite. Think about the algorithm. Does its process change in any " +
                            "way depending on the order of elements?",
                    "Correct! Regardless of how the elements are arranged, both loops will " +
                            "still iterate the same way the same number of times",
                    "Not quite. Think about the algorithm. " +
                            "Regardless of whether the array was sorted or not, the number of times each loop " +
                            "runs never changes (changes depending on array size instead)."
            );

            Quiz selectionSortQ3 = new Quiz(
                    "sort_selection_quiz",
                    "sort_selection_lesson",
                    "Selection Sort",
                    "Which of the following is not an advantage of selection sort?",
                    "Low memory usage",
                    "Fewer swap operations",
                    "Faster runtime",
                    2,
                    "Not quite. Selection sort only need an additional single temporary int variable to the function.",
                    "Not quite. Selection sort only needs to make one swap operation per outer loop iteration, " +
                            "which is on the lower-end of swap-based sorts.",
                    "Correct! With an O(N^2) complexity, Selection Sort's runtime can quickly " +
                            "increase when the array is larger. There are other sorts more suited towards larger arrays."
            );

            // Save all the objects in the corresponding repositories.
            homepageRepository.saveAll(List.of(dijkstrasAlgorithm, selectionSort, binarySearch));
            lessonRepository.saveAll(List.of(dijkstrasLesson, binaryLesson, selectionLesson));
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
