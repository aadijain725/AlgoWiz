# Api Examples
The frontend will load content via asynchronous requests to the backend server.
There are three main requests the frontend will make:
* Homepage Content - Topics, each with 1 or more Lesson Summaries
* Lesson - Lesson Content, Text, images, and Visualizer
* Quiz - Quiz questions, options, and results.

These examples are meant to be a suggestion for the backend team as to what 
content the frontend expects to receive and how. They are not concrete rules.

## Homepage Content
Frontend Request
```javascript
fetch('http://algowiz.com/homecontent')
  .then(response => response.json())
  .then(data => console.log(data));
```
JSON Response
```json
{
  "topics":[
    {
      "title":"Topic 1",
      "id":"extopicid123",
      "lessons":[
        {
          "title":"Lesson 1",
          "id":"012abc",
          "img":"www.image.com/img.png",
          "summary":"An example summary for lesson 1."
        },
        {
          "title":"Lesson 2",
          "id":"02a",
          "img":"www.image.com/img2.png",
          "summary":"An example summary for lesson 2."
        }
      ]
    },
    {
      "title":"Topic 2",
      "id":"extopicid453",
      "lessons":[
        {
          "title":"Lesson 3",
          "id":"01newbc",
          "img":"www.image.com/img3.png",
          "summary":"An example summary for lesson 3."
        },
        {
          "title":"Lesson 4",
          "id":"04abokbokabok",
          "img":"www.image.com/img4.png",
          "summary":"An example summary for lesson 4."
        }
      ]
    }
  ]
}
```

## Lesson
Frontend Request
```javascript
fetch('http://algowiz.com/lesson/01exid')
  .then(response => response.json())
  .then(data => console.log(data));
```
JSON Response
```json
{
  "id":"01exid",
  "title":"Example Title",
  "summary":"Some example summary",
  "quizID":"123associatedquiz",
  "vizID":"012VizIDexample",
  "images":[{"id":"someID", "src":"http://somesrc.com/img.png", "alt":"altTxt"}],
  "txt":"Some example text for the lesson..."
}
```
Note that some of the data associated with a lesson may need to change, 
we are still figuring out what each lesson will need to store on the database.

## Quiz
Frontend Request
```javascript
fetch('http://algowiz.com/quiz/exquizid012')
  .then(response => response.json())
  .then(data => console.log(data));
```
JSON Response
```json
{
  "id":"exquizid012",
  "title":"Quiz Title",
  "summary":"Some example Quiz Summary",
  "questions":[
    {
      "heading":"Some Example question heading",
      "text":"Which of the following is true? bla bla bla...",
      "options":["option1", "option2", "option3"],
      "correctAnswer":"0",
      "responses":[
        "Nice work, that was correct!",
        "Oops!, nice try but wrong because...",
        "Almost!, next time realize that..."
      ]
    },
    {
      "heading":"Question 2 heading",
      "text":"Which of the following is true for q 2? ..",
      "options":["option1", "option2", "option3"],
      "correctAnswer":"2",
      "responses":[
        "Oops!, nice try but wrong because...",
        "Almost!, next time realize that...",
        "Nice work, that was correct!"
      ]
    }
  ]
}
```
An example of a quiz with 2 questions.

## Lesson
Because the lesson JSON has to contain semantic
information on how to render items on the page
it is structured differently than other data.

JSON Response
```json
{
	"lessonID": "l1",
	"quizID": "q1",
	"title": "Dijkstra's Algorithm",
	"description": "Algorithm for finding the shortest path from start node to end node\nin a weighted graph.",
	"rows": [
		{"cols": [
			{"xs":6, "type": "img", "src":"https://www.geeksforgeeks.org/wp-content/uploads/Fig-11.jpg",
				 "alt": "Here is some alt text"},
			{"xs":6, "type": "p", "text": "Lorem Ipsum is that you have to take out its family. Lorem Ispum is a choke artist. It chokes! "}
		]},
		{"cols": [
			{"xs":12, "type": "h2", "text": "Dijkstra's Section Header"}
		]},
		{"cols": [
			{"xs":12, "type": "p", "text": "Example Lorem Ipsum text"}
		]}
	]
}
```
### Static Lesson Fields
* lessonID - Database lesson id
* quizID - Database quiz id
* title - the title (string) at the top of the page
* description - a short description (string) of the lesson 
### Rows and Cols
The Rows and columns are rendered according to the [Bootstrap Grid System](https://getbootstrap.com/docs/4.0/layout/grid/)

The rows field must be an array of objects. Each row gets rendered on the 
lesson page one after the other top to bottom as you would expect in a table.

Each object inside the row  array represents the contents of one row. This object has one field: cols.

cols is an array of one or more column objects. 
Each column object contains the actual data that will be rendered on the page.

* xs - The width of the column. This is based on the [Bootstrap Grid System](https://getbootstrap.com/docs/4.0/layout/grid/) and must be a number in the range of 1-12 (inclusive). 
For example a row with two columns each of xs:'6' will result in two side by side columns each half the size of the page.
* type: The HTML tag to be rendered. ('img', 'p', 'h1', 'h2', etc.)
* Other Fields: Depending on the type field there may be additional fields included. For example; h1, h2, and p tags should also include a text field. img tags require a src and alt tag. 

Checkout the Following JSON files: 
[lesson1](../algowiz-app/public/lesson/l1), 
[lesson2](../algowiz-app/public/lesson/l2)
as examples of how a lesson page might look.
