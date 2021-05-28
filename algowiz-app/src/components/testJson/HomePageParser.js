
export default class HomePageParser {
  topic = "";
  index = 0;
  constructor(data, topic) {
    this.topic = topic
    this.data = data
    if (topic !=null) {
      for (let i = 0; i < this.data.length; i++) {
        //console.log(data[i]["topicName"])
        if (this.data[i]["topicName"] === this.topic) {
          this.index = i;
          //console.log("index set" + this.index)
        }
      }
    }
  }



  getInfo() {
    var all_information = []
    for (let i = 0; i < this.data[this.index]["data"].length; i++) {
      var info2 = this.data[this.index]["data"][i]
      var topic_details = {
        "title": info2["algorithmName"],
        "description": info2["homePageDescription"],
        "imageURL": info2["imageURL"],
        "quizID": info2["quizId"],
        "lessonID": info2["lessonId"]
      }
      all_information.push(topic_details)
    }
    return all_information

  }

  getTopicNames() {
    let topicNames = []
    for (let i = 0; i < this.data.length; i++) {
      topicNames.push(this.data[i]["topicName"])

    }
    return topicNames
  }
}