
import data from "./homepage.json"
export default class HomePageParser {
  topic = "";
  index =0;
  constructor(topic) {
    this.topic  = topic
    for(let i =0; i< data.length; i++) {
      //console.log(data[i]["topicName"])
      if(data[i]["topicName"] === this.topic) {
        this.index = i;
        //console.log("index set" + this.index)
      }
    }
  }
  
  getInfo() {
    var all_information =[]
    for(let i =0; i <data[this.index]["data"].length;i++) {
      var info2 = data[this.index]["data"][i]
      var topic_details = {
        "title" : info2["algorithmName"],
        "description"  :info2["homePageDescription"], 
        "imageURL": info2["imageURL"],
        "quizID": info2["quizID"],
        "lessonID":info2["lessonID"]
      }
      all_information.push(topic_details)
    }
    return all_information

  }
  age() {
    return data[0]
  }
  
}