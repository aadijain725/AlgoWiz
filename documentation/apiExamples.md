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
